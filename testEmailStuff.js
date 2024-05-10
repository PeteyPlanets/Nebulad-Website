import { config } from "dotenv";
import sgMail from "@sendgrid/mail";
import { htmlToText } from "html-to-text";

import axios from "axios";

config({ path: "./config.env" });

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const testHtml = `

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
        <p style="margin-bottom: 12px; color: #fff">Dear Kelly Walz,</p>
        <br />
        <p style="color: #fff">
          Congratulations on being selected as the lucky winner of the raffle
          conducted by Nebulad Graphics at this past weekend's Cradle Con! We
          are thrilled to inform you that you have won a prize of your choice
          from our selection of unique handmade items.
        </p>
        <p style="color: #fff">
          You now can choose one of the following three prizes:
        </p>
        <ol style="color: #fff">
          <li>
            Set of four coasters: These beautifully crafted coasters are both
            functional and aesthetically pleasing, ensuring your tabletops
            remain protected while adding a touch of super style to your home.
          </li>
          <li>
            Wall mount key ring holder: Keep your keys organized and easily
            accessible with our practical and visually appealing wall mount key
            ring holder. It's the perfect addition to any entryway or living
            space.
          </li>
          <li>
            Bottle opener: Our high-quality bottle opener is designed for both
            functionality and durability. It will become your trusty companion
            for effortlessly opening your favorite beverages.
          </li>
        </ol>
        <p style="color: #fff">
          To make your prize even more special, we offer the option of choosing
          a superhero character theme featuring the character of your
          choice.&nbsp;
        </p>
        <p style="color: #fff">
          Please note that as these items are handmade, there is no set time
          frame for delivery. However, we assure you that we will prioritize
          processing your order as soon as possible. Kindly understand that no
          refunds or exchanges will be allowed due to the custom nature of these
          items.
        </p>
        <p style="color: #fff">
          To claim your prize, please respond to this email or email
          <a href="mailto:nebulad.@gmail.com" style="color: #ffffff">
            Nebulad.@gmail.com
          </a>
          (subject: Raffle Winner) within 72 hours and indicate your preferred
          prize and superhero character theme. We will provide you with further
          instructions on how to proceed. Note, you will not be charged for
          shipping within the state of New York.&nbsp;
        </p>
        <p style="color: #fff">
          Once again, congratulations on winning the raffle! We sincerely
          appreciate your participation and support.
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
              alt="Facebook"
              style="margin-right: 18px"
            />
          </a>
          <a href="https://nebulad.com/collections/super-frames" target="_blank">
            <img
              src="https://img.icons8.com/ios-glyphs/30/ffffff/globe.png"
              alt="Website"
            />
          </a>
        </div>
      </div>
      <p style="text-align: center; font-size: 14px; color: #aaaaaa">
        Nebulad Graphics, 544 Hempstead Blvd, Uniondale, NY 11553
      </p>
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
    // console.log("res = ", response);
    const emails = response.data.data.emails;
    return emails;
  } catch (error) {
    console.error("Error retrieving emails:", error);
  }
}
const emails = await getEmailsFromDatabase();
let emailsArr = emails.map((obj) => obj.email);
console.log(emailsArr);

emailsArr.forEach((email) => {
  testRaffleWinnerEmail(
    email,
    "Thank You for Participating in the Raffle!",
    losersHtml
  );
});

// testRaffleWinnerEmail(
//   "peter.faucella@gmail.com",
//   "Thank You for Participating in the Raffle!",
//   losersHtml
// );
// testRaffleWinnerEmail(
//   "nebulad@gmail.com",
//   "Thank You for Participating in the Raffle!",
//   losersHtml
// );

export default sgMail;
