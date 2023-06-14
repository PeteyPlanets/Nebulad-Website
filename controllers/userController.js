import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";

import User from "../models/User.js";
import AppError from "../utils/appError.js";

import { uploadToS3 } from "./blogController.js";

import { filterObj } from "./authController.js";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION, // region of your bucket
});

const multerStorage = multerS3({
  s3: s3,
  bucket: process.env.S3_BUCKET_NAME,
  acl: "public-read", // so the file uploaded can be accessed publicly
  key: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    cb(null, `Public/Blogs/blog-${req.params.id}-${Date.now()}.${ext}`);
  },
});
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};
const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadUserPhoto = upload.single("photo");

export const updateMe = async (req, res, next) => {
  // Create error if user tries to update password (POSTs password data)
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword",
        400
      )
    );
  }

  const filteredBody = filterObj(req.body, "name", "email");

  if (req.files && req.files.photo) {
    const userPhotoUrl = await uploadToS3(
      req.files.photo,
      `Public/Users/user-${req.user.id}-profilePicture-${Date.now()}`,
      412
    );
    filteredBody.photo = userPhotoUrl;
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    user: updatedUser,
  });
};

export const updateFavorites = async (req, res) => {
  try {
    const { userId } = req.params;
    const { favorites } = req.body;

    const user = await User.findByIdAndUpdate(
      userId,
      { favorites },
      {
        new: true, // return the updated user
        runValidators: true, // run validations on the update
      }
    );

    if (!user) {
      return res.status(404).json({
        status: "fail",
        message: "No user found with that ID",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};
