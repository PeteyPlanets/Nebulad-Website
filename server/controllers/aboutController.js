import aws from "aws-sdk";
import sharp from "sharp";
import AboutMe from "../models/AboutMe.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

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

export const getAboutMe = catchAsync(async (req, res, next) => {
  const about = await AboutMe.findOne();
  res.status(200).json({ status: "success", about });
});

export const updateAboutMe = catchAsync(async (req, res, next) => {
  console.log("Incoming PATCH request with body:", req.body);
  console.log("Incoming PATCH request with files:", req.files);

  const updateFields = { ...req.body };

  if (req.files && req.files.photo) {
    const aboutPhotoUrl = await uploadToS3(
      req.files.photo,
      `Public/AboutMe/aboutMe-${Date.now()}`,
      1200
    );
    updateFields.image = aboutPhotoUrl;
  }

  let about = await AboutMe.findOne();
  if (!about) {
    about = await AboutMe.create(updateFields);
  } else {
    about.set(updateFields);
    await about.save();
  }

  res.status(200).json({
    status: "success",
    about,
  });
});

export const createAboutMe = catchAsync(async (req, res, next) => {
  const { content } = req.body;
  let image = req.body.image;

  if (req.file) {
    const resizedImageBuffer = await sharp(req.file.buffer)
      .resize(800)
      .jpeg({ quality: 80 })
      .toBuffer();

    const imageUrl = await uploadToS3(
      resizedImageBuffer,
      `Public/About/about-photo-${Date.now()}.jpeg`
    );
    image = imageUrl;
  }

  const about = await AboutMe.create({ content, image });

  res.status(201).json({
    status: "success",
    about,
  });
});
