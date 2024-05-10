import Email from "../models/Email.js";
import catchAsync from "../utils/catchAsync.js";
import { sendEmail } from "../utils/email.js";

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

  const newEmailData = {
    email,
    timestamp: Date.now(),
    formattedDate,
  };

  if (name) newEmailData.name = name;
  if (unsubscribed) newEmailData.unsubscribed = unsubscribed;
  if (phoneNumber) newEmailData.phoneNumber = phoneNumber;

  const newEmail = await Email.create(newEmailData);

  res.status(201).json({
    status: "success",
    data: {
      newEmail,
    },
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
