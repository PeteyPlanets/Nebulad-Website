import { config } from "dotenv";
import sgMail from "@sendgrid/mail";
import { htmlToText } from "html-to-text";

import axios from "axios";

import { sendEmail, sendPromotionalEmail } from "./utils/email.js";
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

function makeUnsubscribeLink(emailId) {
  // return `${process.env.FRONTEND_URL}/unsubscribe/${emailId}`;
  return `https://nebulad.netlify.app/unsubscribe/${emailId}`;
}

const sendRaffleEmail = async (user, winner) => {
  const unsubscribeUrl = makeUnsubscribeLink(user._id);

  const htmlContent = winner
    ? `<!DOCTYPE html>
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
                background-color: #777;
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
                    style="max-width: 70px; height: 70px"
                    width="70"
                    height="70"
                />
                <img
                    src="https://nicky-blogs.s3.amazonaws.com/Assets/email-logo.png"
                    alt="Logo image"
                    width="250"
                    height="auto"
                    style="max-width: 250px; height: auto;"
                />
            </div>
            <div>
                <p style="margin-bottom: 12px; color: #fff">Dear Ismael,</p>
                <p style="color: #fff">
                    Congratulations on being selected as the lucky winner of the raffle conducted by Nebulad Graphics at last weekend's Cradle Con! We are thrilled to inform you that you have won a prize of a unique, handmade wall hanging bottle opener! Our high-quality bottle opener is designed for both functionality and durability. It will become your trusty companion for effortlessly opening your favorite beverages. Choose one from the selection below:
                </p>
                <div style="text-align: center; margin: 20px 0;">
                    <img src="https://nicky-blogs.s3.amazonaws.com/Emails/ProductImages/image0+(1).jpeg" alt="Bottle Opener 1" style="max-width: 200px; margin: 10px;" />
                    <img src="https://nicky-blogs.s3.amazonaws.com/Emails/ProductImages/image1.jpeg" alt="Bottle Opener 2" style="max-width: 200px; margin: 10px;" />
                    <img src="https://nicky-blogs.s3.amazonaws.com/Emails/ProductImages/image2.jpeg" alt="Bottle Opener 3" style="max-width: 200px; margin: 10px;" />
                </div>
                <p style="color: #fff">
                    To make your prize even more special, we are offering you 20% off the purchase of any large or medium frame of your choice, featuring the superhero character of your choice!
                </p>
                <p style="color: #fff">
                    To claim your prize, please respond to this email or email <a href="mailto:nebulad@gmail.com?subject=Raffle Winner" style="color: #3366FF">nebulad@gmail.com</a> within 72 hours and indicate your chosen prize.
                </p>
                <p style="color: #fff">
                    Once again, congratulations on winning the raffle! We sincerely appreciate your participation and support.
                </p>
                <p style="color: #fff">Best regards,</p>
                <p style="color: #fff">Nick Marino - Nebulad Graphics</p>
                <img
                    src="https://nicky-blogs.s3.amazonaws.com/Assets/Logo_with_photo.png"
                    alt="Logo image"
                    style="max-width: 250px; margin-top: 3.2rem"
                    width="250"
                    height="auto"
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
            </div>
            <p style="color: #ffffff">
                To ensure our emails are not intrusive, you can
                <a href="${unsubscribeUrl}" style="color: #f54f15">unsubscribe</a> at
                any time.
            </p>
            <p style="text-align: center; font-size: 14px; color: #aaaaaa">
                Nebulad Graphics, 544 Hempstead Blvd, Uniondale, NY 11554
            </p>
        </div>
    </body>
    </html>
    `
    : `

    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Raffle Loser</title>
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
              style="max-width: 70px; height: 70px"
              width="70"
              height="70"
            />
            <img
              src="https://nicky-blogs.s3.amazonaws.com/Assets/email-logo.png"
              alt="Logo image"
              width="250"
              height="auto"
              style="max-width: 250px; height: auto;"
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
              style="max-width: 250px; margin-top: 3.2rem"
              width="250"
              height="auto"
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
          </div>
          <p style="color: #ffffff">
            To ensure our emails are not intrusive, you can
            <a href="${unsubscribeUrl}" style="color: #f54f15">unsubscribe</a> at
            any time.
          </p>
    
          <p style="text-align: center; font-size: 14px; color: #aaaaaa">
            Nebulad Graphics, 544 Hempstead Blvd, Uniondale, NY 11554
          </p>
        </div>
      </body>
    </html>
    
    
    `;

  console.log("ABOUT TO SEND PROMO EMAIL to ", user.email);
  await sendEmail(
    user.email,
    winner
      ? "You’re the 2024 CradleCon Raffle Winner!"
      : "Thanks for participating!",
    htmlContent
  );
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

const petey = await getEmailFromDatabase("663ebadea54e6790559c1f4c");
const nicky = await getEmailFromDatabase("6645255351483fb90640ec36");
const ismael = await getEmailFromDatabase("664f4c2aecf977a386b0765b");
// const allEmails = await getEmailsFromDatabase();

sendRaffleEmail(ismael, true);

export default sgMail;
