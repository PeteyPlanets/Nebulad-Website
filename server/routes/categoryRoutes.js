import { Router } from "express";

import Category from "../models/Category.js";
import { protect, restrictTo } from "../controllers/authController.js";

import { uploadToS3 } from "../controllers/blogController.js";

const router = Router();

router.get("/", async (req, res) => {
  const categories = await Category.find().sort({ createdAt: 1 });
  res.status(200).json({
    status: "success",
    categories,
  });
});

// Get a single category by ID
router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  res.status(200).json({
    status: "success",
    category,
  });
});

// Create a new category
router.post("/", protect, async (req, res) => {
  const updateFields = { ...req.body };

  if (req.files && req.files.file) {
    const imageUrl = await uploadToS3(
      req.files.file,
      `Public/Categories/category-${req.params.id}-image-${Date.now()}`
    );
    updateFields.image = imageUrl;
  }

  const category = await Category.create(updateFields);

  res.status(201).json({
    status: "success",
    category,
  });
});

// Update an existing category by ID
router.patch("/:id", protect, async (req, res) => {
  const updateFields = { ...req.body };

  if (req.files && req.files.file) {
    const imageUrl = await uploadToS3(
      req.files.file,
      `Public/Categories/category-${req.params.id}-image-${Date.now()}`
    );
    updateFields.image = imageUrl;
  }

  const updatedCategory = await Category.findByIdAndUpdate(
    req.params.id,
    updateFields,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    updatedCategory,
  });
});

export default router;
