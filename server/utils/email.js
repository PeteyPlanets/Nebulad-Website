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

  try {
    await sgMail.send(msg);
    console.log("Email sent to", to);
  } catch (error) {
    console.log("Error sending email:", error);
    console.log("Error body:", error.response.body);
  }
}

export const makeUnsubscribeLink = (emailId) => {
  return `${process.env.FRONTEND_URL}/unsubscribe/${emailId}`;
};

export const sendWelcomeEmail = async (user) => {
  const unsubscribeUrl = makeUnsubscribeLink(user._id);
  console.log("Here is the unsubscribeLink!", unsubscribeUrl);

  const htmlContent = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Raffle Winner</title>
    </head>
    <body>
      <div
        style="
          padding: 24px;
          background-color: #555;
          color: #fff;
          font-size: 18px;
        "
      >
        <div
          style="
            display: flex;
            gap: 1.2rem;
            align-items: center;
            justify-content: center;
            margin-bottom: 2.4rem;
          "
        >
          <img
            src="https://nicky-blogs.s3.amazonaws.com/Assets/logo.png"
            alt="Logo image"
            style="width: 70px; height: 70px"
          />
          <img
            src="https://nicky-blogs.s3.amazonaws.com/Assets/email-logo.png"
            alt="Logo image"
            style="width: 250px"
          />
        </div>
        <div>
          <h1>Welcome to Our Newsletter!</h1>
          <p>Thank you for subscribing to our newsletter. We look forward to bringing you the latest updates and offers.</p>
          <p style="color: #fff"><br /></p>
          <p style="color: #fff">Best regards,</p>
          <p style="color: #fff">Nick Marino - Nebulad Graphics</p>
          <p style="color: #fff"><br /></p>
        
          <img
            src="https://nicky-blogs.s3.amazonaws.com/Assets/Logo_with_photo.png"
            alt="Logo image"
            style="width: 250px; margin-top: 3.2rem"
          />
          <div
            style="
              display: flex;
              justify-content: center;
              align-items: center;
              margin: 2.8rem auto;
            "
          >
            <a href="https://www.instagram.com/nebuladgraphics" target="_blank">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
                alt="Instagram"
                style="margin-right: 18px"
              />
            </a>
            <a href="https://www.instagram.com/nebuladgraphics" target="_blank">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"
                alt="Instagram"
                style="margin-right: 18px"
              />
            </a>
            <a href="https://www.instagram.com/nebuladgraphics" target="_blank">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/globe.png"
                alt="Instagram"
              />
            </a>
          </div>
        </div>
        <p>To ensure our emails are not intrusive, you can <a href="${unsubscribeUrl}">unsubscribe</a> at any time.</p>
  
        <p style="text-align: center; font-size: 14px; color: #aaaaaa">
          Nebulad Graphics, 544 Hempstead Blvd, Uniondale, NY 11554
        </p>
      </div>
    </body>
  </html>`;

  await sendEmail(user.email, "Welcome to Our Service!", htmlContent);
};

export const sendPromotionalEmail = async (subscriber) => {
  if (subscriber.unsubscribed) return;

  const unsubscribeUrl = makeUnsubscribeLink(subscriber._id);
  const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>P</title>
      </head>
      <body>
        <div style="font-family: Arial, sans-serif; font-size: 16px; color: #333;">
          <h1>Hello, ${name}!</h1>
          <p>Promotional Email Function!}</p>
          <p>To stop receiving these emails, you can <a href="${unsubscribeUrl}" style="color: #0656cc;">unsubscribe</a>.</p>
        </div>
      </body>
      </html>
`;

  console.log("ABOUT TO SEND PROMO EMAIL to ", subscriber.email);
  await sendEmail(subscriber.email, "Check out our latest news!", htmlContent);
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
