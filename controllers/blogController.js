import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import sharp from "sharp";

import Blog from "../models/Blog.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

export async function uploadToS3(file, fileKey, size) {
  try {
    const ext = file.mimetype.split("/")[1];
    const compressedBuffer = await sharp(file.data)
      .resize(size)
      .jpeg({ quality: 80 })
      .toBuffer();

    const uploadParams = {
      Bucket: process.env.S3_BUCKET_NAME,
      Body: compressedBuffer,
      Key: `${fileKey}.${ext}`,
      ACL: "public-read",
    };

    return new Promise((resolve, reject) => {
      s3.upload(uploadParams, (err, data) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(data.Location);
      });
    });
  } catch (error) {
    console.error("Error in compressAndUploadToS3 function: ", error);
    throw new AppError("Error processing the uploaded image.", 500);
  }
}

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
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

export const uploadFiles = upload.fields([
  { name: "coverPhoto", maxCount: 1 },
  { name: "blogListPhoto", maxCount: 1 },
]);

export const updateBlog = catchAsync(async (req, res, next) => {
  console.log("req files: ", req.files);
  const updateFields = { ...req.body };

  if (req.files && req.files.coverPhoto) {
    const coverPhotoUrl = await uploadToS3(
      req.files.coverPhoto,
      `Public/Blogs/blog-${req.params.id}-coverPhoto-${Date.now()}`,
      1200
    );
    updateFields.image = coverPhotoUrl;
  }
  if (req.files && req.files.blogListPhoto) {
    const blogListPhotoUrl = await uploadToS3(
      req.files.blogListPhoto,
      `Public/Blogs/blog-${req.params.id}-blogListPhoto-${Date.now()}`,
      600
    );
    updateFields.blogListImage = blogListPhotoUrl;
  }

  const updatedBlog = await Blog.findByIdAndUpdate(
    req.params.id,
    updateFields,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    blog: updatedBlog,
  });
});

export const createBlog = catchAsync(async (req, res, next) => {
  console.log(req.files); // Add this line

  // Create the blog first with other details
  let blog = await Blog.create(req.body);

  // Upload images if they are present in the request
  if (req.files && req.files.coverPhoto) {
    const coverPhotoUrl = await uploadToS3(
      req.files.coverPhoto,
      `Public/Blogs/blog-${blog._id}-coverPhoto-${Date.now()}`,
      1200
    );
    blog.image = coverPhotoUrl;
  }

  if (req.files && req.files.blogListPhoto) {
    const blogListPhotoUrl = await uploadToS3(
      req.files.blogListPhoto,
      `Public/Blogs/blog-${blog._id}-blogListPhoto-${Date.now()}`,
      800
    );
    blog.blogListImage = blogListPhotoUrl;
  }

  // Update the blog with the image URLs
  blog = await Blog.findByIdAndUpdate(blog._id, blog, {
    new: true,
    runValidators: true,
  });

  res.status(201).json({
    status: "success",
    blog,
  });
});
