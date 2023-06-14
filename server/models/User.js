import { Schema, model, Types } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: {
    type: String,
    default: "https://nicky-blogs.s3.amazonaws.com/Public/Users/default.jpg",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  subcription: {
    type: String,
    enum: ["free", "basic", "unlimited"],
    default: "free",
  },
  theme: {
    type: String,
    default: "light",
  },
  comments: [
    {
      type: Types.ObjectId,
      ref: "Comment",
    },
  ],
  favorites: [
    {
      type: Types.ObjectId,
      ref: "Blog",
    },
  ],
  openAi: {},
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minLength: [8, "Password must be at least 8 characters long"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      // THIS ONLY WORKS ON CREATE and SAVE!!! - not findOneAndUpdate
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords must match!",
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
  emailConfirmToken: String,
  emailConfirmed: {
    type: Boolean,
    default: false,
  },
  emailConfirmExpires: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
});

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

userSchema.methods.createEmailConfirmToken = function () {
  const confirmToken = crypto.randomBytes(32).toString("hex");

  this.emailConfirmToken = crypto
    .createHash("sha256")
    .update(confirmToken)
    .digest("hex");

  this.emailConfirmExpires = Date.now() + 24 * 60 * 60 * 1000; // Expires in 24 hours

  return confirmToken;
};

const User = model("User", userSchema);

export default User;
