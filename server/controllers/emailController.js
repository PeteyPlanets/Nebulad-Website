import Email from "../models/Email.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";
import { sendEmail, sendWelcomeEmail } from "../utils/email.js";

// Util functions
const formatDateForTable = (timestamp) => {
  const date = new Date(timestamp);
  const month = pad2(date.getMonth() + 1); //months (0-11)
  const day = pad2(date.getDate()); //day (1-31)
  const year = date.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;
  return formattedDate;
};
const pad2 = (n) => {
  return (n < 10 ? "0" : "") + n;
};

// Email route handlers
export const getEmail = catchAsync(async (req, res, next) => {
  const email = await Email.findById(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      email,
    },
  });
});

export const getEmails = catchAsync(async (req, res, next) => {
  const emails = await Email.find();

  res.status(200).json({
    status: "success",
    data: {
      emails,
    },
  });
});

export const createEmail = catchAsync(async (req, res, next) => {
  const formattedDate = formatDateForTable(Date.now());
  const { email, name, phoneNumber, unsubscribed } = req.body;

  const existingEmail = await Email.findOne({ email });
  console.log("EXISTING EMAIL??? ", existingEmail);

  if (existingEmail) {
    if (existingEmail.unsubscribed) {
      // User is re-subscribing
      const updatedData = {
        unsubscribed: false,
        timestamp: Date.now(),
        formattedDate: formatDateForTable(Date.now()),
      };

      if (name) updatedData.name = name;
      if (phoneNumber) updatedData.phoneNumber = phoneNumber;

      const updatedEmail = await Email.findByIdAndUpdate(
        existingEmail._id,
        updatedData,
        { new: true }
      );
      await sendWelcomeEmail(updatedEmail); // Send welcome email to re-subscribed user

      return res.status(200).json({
        status: "success",
        message: "Email re-subscribed successfully!",
        data: { updatedEmail },
        newUser: false,
      });
    } else {
      // Email already exists and is subscribed
      return next(new AppError("Email is already subscribed.", 409));
    }
  }

  const newEmailData = {
    email,
    timestamp: Date.now(),
    formattedDate,
  };

  if (name) newEmailData.name = name;
  if (unsubscribed) newEmailData.unsubscribed = unsubscribed;
  if (phoneNumber) newEmailData.phoneNumber = phoneNumber;

  const newEmail = await Email.create(newEmailData);
  await sendWelcomeEmail(newEmail); // Send welcome email after creation

  res.status(201).json({
    status: "success",
    data: {
      newEmail,
    },
    newUser: true,
  });
});

export const updateEmail = catchAsync(async (req, res, next) => {
  const email = await Email.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!email) {
    return next(new AppError("No email found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      email,
    },
  });
});

export const deleteEmail = catchAsync(async (req, res, next) => {
  const email = await Email.findByIdAndDelete(req.params.id, req.body);

  if (!email) {
    return next(new AppError("No email found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});

export const sendContactEmail = catchAsync(async (req, res) => {
  const { name, email, subject, message } = req.body;

  const html = `
        <h2>Contact Email from website</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <br/>
        <p>Message: ${message}</p>
      `;
  await sendEmail(process.env.EMAIL_FROM, `Contact email: ${subject}`, html);

  res.status(200).json({
    status: "success",
  });
});

// Unsubscribe from email list
export const unsubscribeEmail = catchAsync(async (req, res, next) => {
  const emailId = req.params.id;

  // Check if email is exists
  const existingEmail = await Email.findById(emailId);
  if (!existingEmail) {
    return next(new AppError("No email found with that ID", 404));
  }

  console.log("here is the email: ", existingEmail);

  // If already unsubscribed, inform the user
  if (existingEmail.unsubscribed) {
    return res.status(400).send("You are already unsubscribed.");
  }

  // Send user to homepage after unsubscribing
  const email = await Email.findByIdAndUpdate(
    emailId,
    { unsubscribed: true },
    { new: true }
  );
  console.log("You have successfully unsubscribed!");

  res.send("You have been successfully unsubscribed.");
});
