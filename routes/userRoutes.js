import { Router } from "express";
import { updateMe, updateFavorites } from "../controllers/userController.js";

import {
  signup,
  login,
  resetPassword,
  updatePassword,
  protect,
  restrictTo,
  isLoggedIn,
  logout,
  sendPasswordResetEmail,
  confirmEmail,
} from "../controllers/authController.js";

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/isLoggedIn", isLoggedIn, (req, res) => {
  if (!req.isLoggedIn) {
    res.status(200).json({
      status: "success",
      isLoggedIn: false,
    });
    return;
  }
  res.status(200).json({
    status: "success",
    user: res.locals.user,
    isLoggedIn: true,
  });
});

router.post("/forgot-password", sendPasswordResetEmail);
router.patch("/forgot-password/:token", resetPassword);
router.get("/confirm-email/:token", confirmEmail);

// Protect all routes after this middleware
router.use(protect);

router.patch("/updateMyPassword", updatePassword);
router.patch("/updateMe", updateMe);

router.patch("/:userId/favorites", updateFavorites);

export default router;
