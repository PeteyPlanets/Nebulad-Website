import { config } from "dotenv";
import sgMail from "@sendgrid/mail";
import { htmlToText } from "html-to-text";

import axios from "axios";

import { sendPromotionalEmail } from "./utils/email.js";
import Category from "./models/Category.js";
import mongoose from "mongoose";

config({ path: "./config.env" });
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to DB successful!");
  });
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const testHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .email-container {
            background-color: #ffffff;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #dddddd;
        }
        .email-header {
            text-align: center;
            background: #0078D7;
            color: #ffffff;
            padding: 10px 0;
        }
        .email-body {
            padding: 20px;
            text-align: center;
        }
        .email-footer {
            text-align: center;
            font-size: 12px;
            color: #777777;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            Test Email
        </div>
        <div class="email-body">
            <h1>Hello!</h1>
            <p>Thank you for participating in our test. This is a simple HTML email template for testing purposes.</p>
            <p>Feel free to respond to this email if you received it.</p>
        </div>
        <div class="email-footer">
            <p>Company Name, 123 Fake Street, City, State</p>
            <p>To unsubscribe from future emails, click <a href="#">here</a>.</p>
        </div>
    </div>
</body>
</html>
`;

const losersHtml = `

<!DOCTYPE html>
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
        <p style="margin-bottom: 12px; color: #fff">Hello!</p>
        <p style="color: #fff">
          We would like to extend our gratitude for participating in the raffle
          conducted by Nebulad Graphics last weekend at CradleCon. While you
          were not selected as the winner of the raffle, we truly appreciate
          your support and enthusiasm.
        </p>

        <p style="color: #fff">
          As a token of our gratitude, we are delighted to offer you an
          exclusive discount code to use on our website. By entering the code
          "Con20" during checkout, you will enjoy a generous 20% discount on any
          of the remarkable products showcased at our recent event. This is our
          way of giving you the opportunity to bring home the items that caught
          your eye.
        </p>

        <p style="color: #fff">
          Visit our website
          <a
            style="color: #fff"
            href="https://nebulad.com/collections/super-frames"
            target="_blank"
            >https://nebulad.com/collections/super-frames</a
          >
          and take advantage of this limited-time offer. Don’t miss this
          opportunity to treat yourself or surprise a loved one with one our
          exceptional handmade products.
        </p>
        <p style="color: #fff">
          We value your presence in our community, and we look forward to seeing
          you at future events. If you have any questions or would like to
          contact us for your own handmade piece, please do not hesitate to
          reach out to us. Follow us on social media at the links below for fun content and future updates.
        </p>
        <p style="color: #fff"><br /></p>
        <p style="color: #fff">Best regards,</p>
        <p style="color: #fff">Nick Marino - Nebulad Graphics</p>
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
      <p>Please click the following link to <a href="https://nebulad.com/">Unsubscribe</a> from future emails.</p>

      <p style="text-align: center; font-size: 14px; color: #aaaaaa">
        Nebulad Graphics, 544 Hempstead Blvd, Uniondale, NY 11554
      </p>
    </div>
  </body>
</html>


`;
const testRaffleWinnerEmail = async (to, subject, html) => {
  console.log("Sending test email.....");
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
};

async function getEmailsFromDatabase() {
  try {
    const response = await axios.get("http://localhost:8000/api/emails");
    const emails = response.data.data.emails;
    return emails;
  } catch (error) {
    console.error("Error retrieving emails:", error);
  }
}

async function getEmailFromDatabase(id) {
  try {
    const response = await axios.get(`http://localhost:8000/api/emails/${id}`);
    const subscriber = response.data.data.email;
    return subscriber;
  } catch (error) {
    console.error("Error retrieving emails:", error);
  }
}
// const emails = await getEmailsFromDatabase();
// const petey = await getEmailFromDatabase("663b86406156b836e44a08d4");
// console.log("Petey = ", petey);

// sendPromotionalEmail(petey);
// let emailsArr = emails.map((obj) => obj.email);
// console.log(emailsArr);

// testRaffleWinnerEmail(
//   "peter.faucella@gmail.com",
//   "Thank You for Participating in the Raffle!",
//   testHtml
// );

export default sgMail;
