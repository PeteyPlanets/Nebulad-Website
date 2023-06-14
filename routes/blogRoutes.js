import mongoose from "mongoose";
import { Router } from "express";
import { protect, restrictTo } from "../controllers/authController.js";

import Blog from "../models/Blog.js";

import { createBlog, updateBlog } from "../controllers/blogController.js";

const router = Router();

router.get("/", async (req, res) => {
  const blogs = await Blog.find().populate("category");
  res.status(200).json({
    status: "success",
    blogs,
  });
});

//Get a single blog by ID
router.get("/:id", async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({
        status: "fail",
        message: "No blog found with this ID",
      });
    }
    const blog = await Blog.findById(req.params.id).populate("category");

    res.status(200).json({
      status: "success",
      blog,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the blog",
    });
  }
});

// Create a new blog
router.post("/", protect, createBlog);

// Update  existing blog by ID
// router.patch("/:id", protect, uploadFiles, resizePhotos, updateBlog);
router.patch("/:id", protect, updateBlog);

// Delete an existing blog by ID
router.delete("/:id", protect, async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

export default router;
