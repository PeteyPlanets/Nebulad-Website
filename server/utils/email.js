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
      <title>Welcome</title>
      <style>
         
    .header-logos, .social-links {
      display: flex;
      gap: 1.2rem;
      align-items: center;
      justify-content: center;
      margin-bottom: 2.4rem;
    }
      </style>
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
      <div class="header-logos">
        <img
          src="https://nicky-blogs.s3.amazonaws.com/Assets/logo.png"
          alt="Logo image"
          style="width: 70px; height: 70px"
        />
        <img
          src="https://nicky-blogs.s3.amazonaws.com/Assets/email-logo.png"
          alt="Email logo"
          style="width: 250px"
        />
      </div>
        <div>
          <h1>Welcome to Our Newsletter!</h1>
          <p>
            Thank you for subscribing to our newsletter. We look forward to
            bringing you the latest updates and offers. Stay tuned for new products,
            behind the scenes, future stories and other entertaining content!
          </p>
  
          <p style="color: #fff"><br /></p>
          <p style="color: #fff"><br /></p>
          <p style="color: #fff">Best regards,</p>
          <p style="color: #fff">Nick Marino - Nebulad Graphics</p>
  
          <img
            src="https://nicky-blogs.s3.amazonaws.com/Assets/Logo_with_photo.png"
            alt="Logo image"
            style="width: 250px; margin-top: 3.2rem"
          />
          <p style="color: #fff"><br /></p>
          
          <div class="social-links">
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
                alt="Facebook"
                style="margin-right: 18px"
              />
            </a>
            <a href="https://www.instagram.com/nebuladgraphics" target="_blank">
              <img
                src="https://img.icons8.com/ios-glyphs/30/ffffff/globe.png"
                alt="Website"
              />
            </a>
          </div>
          <p>
            To ensure our emails are not intrusive, you can
            <a style="color: #f54f15;" href="${unsubscribeUrl}">unsubscribe</a> at any time.
          </p>
  
        <p style="text-align: center; font-size: 14px; color: #aaaaaa">
          Nebulad Graphics, 544 Hempstead Blvd, Uniondale, NY 11554
        </p>
      </div>
    </body>
  </html>
  `;

  await sendEmail(user.email, "Welcome to Our Service!", htmlContent);
};

export const sendPromotionalEmail = async (subscriber) => {
  if (subscriber.unsubscribed) return;

  const unsubscribeUrl = makeUnsubscribeLink(subscriber._id);
  const htmlContent = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Promotional</title>
    </head>
    <style>
      @media only screen and (max-width: 600px) {
        .mobile-padding {
          padding: 0 24px !important;
          border-radius: 8px !important;
        }
      }
    </style>
    <body
      style="
        font-family: Arial, sans-serif;
        background-color: #555;
        color: #fff;
        padding: 24px;
        font-size: 18px;
      "
    >
      <div>
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
            alt="Email logo"
            style="width: 250px"
          />
        </div>
        <h1 style="color: #ffffff">Cradle Con is this weekend!</h1>
        <p>
          We had a blast meeting and interacting with you at last year's event and
          hope to see you again this coming weekend.
        </p>
        <p>
          Check out some of our latest creations that will be featured at this
          year's show. Show us this email at the show to receive a 10%
          discount on any purchase.
        </p>
        <p><br /></p>
  
        <table
          role="presentation"
          width="100%"
          border="0"
          cellspacing="0"
          cellpadding="0"
          style="max-width: 600px;"
        >
          <tr>
            <td style="padding: 5px; width: 50%;">
              <img
                src="https://nicky-blogs.s3.amazonaws.com/ImageSlider/Star_Wars_Coasters.jpg"
                alt="Product 1"
                style="width: 100%; max-width: 200px; border-radius: 8px; display: block; margin-left: auto; margin-right: auto;"
              />
            </td>
            <td style="padding: 5px; width: 50%;">
              <img
                src="https://nicky-blogs.s3.amazonaws.com/ImageSlider/IMG_8663.HEIC"
                alt="Product 2"
                style="width: 100%; max-width: 200px; border-radius: 8px; display: block; margin-left: auto; margin-right: auto;"
              />
            </td>
          </tr>
          <tr>
            <td style="padding: 5px; width: 50%;">
              <img
                src="https://nicky-blogs.s3.amazonaws.com/ImageSlider/IMG_8665.HEIC"
                alt="Product 3"
                style="width: 100%; max-width: 200px; border-radius: 8px; display: block; margin-left: auto; margin-right: auto;"
              />
            </td>
            <td style="padding: 5px; width: 50%;">
              <img
                src="https://nicky-blogs.s3.amazonaws.com/ImageSlider/IMG_8666.HEIC"
                alt="Product 4"
                style="width: 100%; max-width: 200px; border-radius: 8px; display: block; margin-left: auto; margin-right: auto;"
              />
            </td>
          </tr>
        </table>

  
        <div style="display: flex; justify-content: center; margin-top: 20px; margin-left: auto; margin-right: auto;">
          <a
            href="https://www.cradlecon.com/"
            target="_blank"
            rel="noopener noreferrer"
            style="
              padding: 10px 20px;
              background-color: #f54f15;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
              font-size: 16px;
              margin-right: 10px;
            "
            >Full Schedule</a
          >
          <a
            href="https://www.cradleofaviation.org/plan_your_visit/cradle-con.html"
            target="_blank"
            rel="noopener noreferrer"
            style="
              padding: 10px 20px;
              background-color: #f54f15;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
              font-size: 16px;
            "
            >Get Tickets</a
          >
        </div>
  
        <p><br /></p>
        <p style="color: #ffffff">Best regards,</p>
        <p style="color: #ffffff">Nick Marino - Nebulad Graphics</p>
  
        <img
          src="https://nicky-blogs.s3.amazonaws.com/Assets/Logo_with_photo.png"
          class="mobile-padding"
          alt="Footer logo"
          style="
            width: calc(100% - 48px);
            max-width: 250px;
            margin-top: 1.8rem;
            border-radius: 8px;
          "
        />
  
        <div
          style="
            display: flex;
            gap: 1.2rem;
            align-items: center;
            justify-content: center;
            margin-bottom: 2.4rem;
            margin-left: auto;
            margin-right: auto;
          "
        >
          <a href="https://www.instagram.com/nebuladgraphics" target="_blank">
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
              alt="Instagram"
              style="margin-right: 18px"
            />
          </a>
          <a href="https://www.facebook.com/nebuladgraphics" target="_blank">
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/facebook-new.png"
              alt="Facebook"
              style="margin-right: 18px"
            />
          </a>
          <a href="https://nebulad.com" target="_blank">
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/globe.png"
              alt="Website"
            />
          </a>
        </div>
  
        <p style="color: #ffffff">
          To ensure our emails are not intrusive, you can
          <a href="${unsubscribeUrl}" style="color: #f54f15">unsubscribe</a> at
          any time.
        </p>
      </div>
    </body>
  </html>
  `;

  console.log("ABOUT TO SEND PROMO EMAIL to ", subscriber.email);
  await sendEmail(
    subscriber.email,
    "Visit Our Table at Cradle Con!",
    htmlContent
  );
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
