import { config } from "dotenv";
import sgMail from "@sendgrid/mail";
import { htmlToText } from "html-to-text";

config({ path: "./config.env" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

  console.log("about to send this email...", msg);

  try {
    await sgMail.send(msg);
    console.log("Email sent to", to);
  } catch (error) {
    console.log("Error sending email:", error);
    console.log("Error body:", error.response.body);
  }
}

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
