import React from "react";
import Vendor from "./Vendor";
import styles from "./OtherVendorsSection.module.css";

const OtherVendors = () => {
  const vendors = [
    {
      name: "Jess Off The Hook",
      description: "Crochet Artist",
      ig: "jessoffthehook",
      email: "jessoffthehook@gmail.com",
      website:
        "https://l.instagram.com/?u=http%3A%2F%2Ffacebook.com%2Fjessoffthehook&e=AT2ZghBCTDNn-lztWXzmUbnKIEz7UiDjEotx_kdZiC75Ezd353Vd3auSRa-RhASD5npK6CnYcI0zc8U1sc8-sd4icSUn2LX9_Ls9rw",
      image: "https://nicky-blogs.s3.amazonaws.com/Vendors/Jess.webp",
    },
    {
      name: "Comic Book Depot",
      description: "Retailer (Pokemon, Yugioh, etc.)",
      ig: "thecomicbookdepot",
      email: "comdepot@optonline.net",
      website: "https://www.facebook.com/TheComicDepot",
      image: "https://nicky-blogs.s3.amazonaws.com/Vendors/comicdepot.jpg",
    },
    {
      name: "Shadow Minis",
      description: "Shadowbox Dioramas",
      ig: "shadow.minis",
      email: "",
      website:
        "https://l.instagram.com/?u=http%3A%2F%2Fetsy.com%2Fshop%2Fshadowminis&e=AT211RtVeOVX2fsfDZyxTas-XsFoCE54mpNN6yOeI2ASxvQ1bf6cyiI72cOMetAdskO_ZS6v58-m6rjjjB0mLMhh19aYQLIkRIBgrA",
      image: "https://nicky-blogs.s3.amazonaws.com/Vendors/Shadowminis.jpg",
    },
    {
      name: "Calm Comics",
      description: "Comic Book Retailers",
      ig: "calmcomics",
      email: "calmcomics@gmail.com",
      website: "https://www.facebook.com/people/CALM-Comics/100057437979777/",
      image: "https://nicky-blogs.s3.amazonaws.com/Vendors/calm_comics.png",
    },
  ];
  return (
    <section className={styles.container}>
      <h2>Check out our friends</h2>
      <span className={styles.divider}></span>
      <div className={styles.vendorsContainer}>
        <Vendor vendor={vendors[0]} delay={100} />
        <Vendor vendor={vendors[1]} delay={300} />
        <Vendor vendor={vendors[2]} delay={500} />
        <Vendor vendor={vendors[3]} delay={700} />
      </div>
    </section>
  );
};

export default OtherVendors;
