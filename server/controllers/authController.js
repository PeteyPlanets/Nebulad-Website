import { promisify } from "util";
import User from "../models/User.js";
import pkg from "jsonwebtoken";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import { sendEmail, sendResetEmail } from "../utils/email.js";
import crypto from "crypto";

const { sign, verify } = pkg;

// Jwt auth
export const signToken = (id) => {
  return sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};
export const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const inProduction = process.env.NODE_ENV === "production";

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: inProduction,
    sameSite: inProduction ? "None" : "Lax",
  };

  res.cookie("jwt", token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};
export const signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  // Email confirmation token
  const confirmToken = newUser.createEmailConfirmToken();
  await newUser.save({ validateBeforeSave: false });

  const confirmUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/users/confirm-email/${confirmToken}`;

  const message = `Click the link below to confirm your email address:\n${confirmUrl}`;

  console.log("About to send email to ", newUser.email);

  await sendEmail(newUser.email, "Email Confirmation", message);

  createSendToken(newUser, 201, res);
});

// Protect routes
export const protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check if it's there
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get acccess.", 401)
    );
  }

  // 2) Token verification
  const decoded = await promisify(verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {
    return next(
      new AppError("The user belonging to this token no longer exists", 401)
    );
  }

  // 4) Check if user changed password after the token(JWT) was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("User recently changed password! Please log in again.")
    );
  }

  // Grant access to protected route (route handler next)
  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action", 403)
      );
    }
    next();
  };
};

// Login/Logout
export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password exist
  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  // Check if user exists & password is correct
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  // Send token if credentials are valid
  createSendToken(user, 200, res);
});
export const logout = (req, res) => {
  const isProduction = process.env.NODE_ENV === "production";

  res.clearCookie("jwt", {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "None" : "Lax",
  });

  res.status(200).json({ status: "success" });
};
export const isLoggedIn = async (req, res, next) => {
  req.isLoggedIn = false;

  if (req.cookies && req.cookies.jwt) {
    try {
      // 1) Token verification
      const decoded = await promisify(verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      // 3) Check if user changed password after the token(JWT) was issued
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }

      // There is a logged in user. Make accessible tofront end
      res.locals.user = currentUser;
      req.isLoggedIn = true;
    } catch (err) {
      console.log("ERROR 🚨🚨🚨🚨", err);
    }
  }
  next();
};

export const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });

  return newObj;
};

// PASSWORD RESET STUFF
export const forgotPassword = async (req, res, next) => {
  // Get user based on posted email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new AppError("There is no user with that email address", 404));
  }

  // Generate random reset token
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });

  try {
    // Send reset link to user's email
    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/api/v1/users/resetPassword/${resetToken}`;

    await new Email(user, resetURL).sendPasswordReset();

    res.status(200).json({
      status: "success",
      message: "Token sent to email!",
    });
  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    console.error(err);

    return next(
      new AppError(
        "There was an issue sending the email. Try again later!",
        500
      )
    );
  }
};
export const resetPassword = async (req, res, next) => {
  try {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;

    // Get user based on the token
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    // If token has not expired and there is a user, set the new password
    if (!user) {
      return next(new AppError("Token is invalid or has expired", 400));
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match." });
    }

    user.password = password;
    user.passwordConfirm = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    // Log the user in, send JWT
    createSendToken(user, 200, res);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: "An error occurred while resetting the password." });
  }
};
export const sendPasswordResetEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .json({ message: "No user found with this email address." });
    }

    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    await sendResetEmail(email, resetToken);

    res.status(200).json({ message: "Password reset email sent." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while sending the email." });
  }
};

// Account Setup Email Confirmation
export const confirmEmail = async (req, res) => {
  try {
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      emailConfirmToken: hashedToken,
      emailConfirmExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).send(`
        <h1>Invalid or expired token</h1>
        <p><a href="${process.env.FRONTEND_URL}/signup">Back to signup</a></p>
      `);
    }

    user.emailConfirmed = true;
    user.emailConfirmToken = undefined;
    user.emailConfirmExpires = undefined;
    await user.save({ validateBeforeSave: false });

    res.status(200).send(`
      <h1>Email confirmed successfully!</h1>
      <p><a href="${process.env.FRONTEND_URL}/login">Login to your account</a></p>
     
    `);
  } catch (error) {
    console.error(error);
    res.status(500).send(`
      <h1>An error occurred during email confirmation</h1>
      <p><a href="${process.env.FRONTEND_URL}/signup">Back to signup</a></p>
    `);
  }
};

export const updatePassword = async (req, res, next) => {
  // Get user from collection in DB
  const user = await User.findById(req.user.id).select("+password");

  // Check if user exists & password is correct
  if (!(await user.correctPassword(req.body.oldPassword, user.password))) {
    return next(new AppError("Your current password is wrong", 401));
  }

  // If so, update password in DB
  user.password = req.body.newPassword;
  user.passwordConfirm = req.body.confirmPassword;
  await user.save();

  // Log user in w/ new JWT
  createSendToken(user, 200, res);
};
