import { config } from "dotenv";
import sgMail from "@sendgrid/mail";
import { htmlToText } from "html-to-text";

config({ path: "./config.env" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Default Promotional Email Template
export const defaultEmailTemplate = ({ name, message, unsubscribeUrl }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email</title>
    </head>
    <body>
      <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
        <h1>Hello, ${name}!</h1>
        <p>${message}</p>
        <p>To stop receiving these emails, you can <a href="${unsubscribeUrl}" style="color: #0656cc;">unsubscribe</a>.</p>
      </div>
    </body>
    </html>
  `;
};

export const makeUnsubscribeLink = (emailId) => {
  return `${process.env.FRONTEND_URL}/unsubscribe/${emailId}`;
};

export async function sendEmail(to, subject, html) {
  const msg = {
    to,
    from: process.env.EMAIL_FROM,
    subject,
    text: htmlToText(html, {
      wordwrap: 80,
      ignoreHref: false,
    }),
    html,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent to", to);
  } catch (error) {
    console.log("Error sending email:", error);
    console.log("Error body:", error.response.body);
  }
}

export const sendPromotionalEmail = async (user) => {
  const unsubscribeUrl = makeUnsubscribeLink(user._id);
  const htmlContent = defaultEmailTemplate({
    name: user.name,
    message: "Here's our latest news and offers!",
    unsubscribeUrl: unsubscribeUrl,
  });

  console.log("ABOUT TO SEND PROMO EMAIL 🛰");
  await sendEmail(user.email, "Check out our latest news!", htmlContent);
};

export async function sendResetEmail(email, resetToken) {
  const resetURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  const mailOptions = {
    to: email,
    from: process.env.EMAIL_FROM,
    subject: "Password Reset Request",
    text: `Please click the following link to reset your password: ${resetURL}`,
    html: `<p>Please click the following link to reset your password: <a href="${resetURL}">${resetURL}</a></p>`,
  };

  try {
    await sgMail.send(mailOptions);
  } catch (error) {
    console.log("Error sending email:", error);
  }
}

export default sgMail;
