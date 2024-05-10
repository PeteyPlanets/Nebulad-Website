import { Router } from "express";
import {
  getEmail,
  getEmails,
  createEmail,
  updateEmail,
  deleteEmail,
  sendContactEmail,
  unsubscribeEmail,
} from "../controllers/emailController.js";

import { protect, restrictTo } from "../controllers/authController.js";

const router = Router();

router
  .route("/")
  .get(getEmails)
  // .get(protect, restrictTo("admin"), getEmails)
  .post(createEmail);

router.route("/send-contact-email").post(sendContactEmail);
router.route("/unsubscribe/:id").post(unsubscribeEmail);

router
  .route("/:id")
  .get(getEmail)
  .patch(protect, restrictTo("admin"), updateEmail)
  .delete(protect, restrictTo("admin"), deleteEmail);

export default router;
