import React from "react";
import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.heroContainer}>
          <div className={styles.textContainer}>
            <h1>About Me</h1>
            <h4>I'm a graphic designer and decoupage extraordinaire </h4>
            <p>
              As I sit down to write this "about me" entry, I can't help but
              slip away into my usual daydreams. Perhaps it's my love for music
              or the endless stream of social media posts, but I find myself
              easily getting lost in my thoughts. In fact, you could say that
              writing this very sentence is just a velvety disguised daydream.
            </p>
            <br />
            <p>
              My attention span can be abbreviated at times, and I often find
              myself losing track of what I was saying mid-conversation. But
              it's not all bad - my tendency to drift away means that I can
              transport myself to different places in my mind at a moment's
              notice. Whether it's the coastal charm of Provincetown, the rocky
              cliffs of Montauk, or the peaceful woods of the Poconos, I can
              escape to any destination I choose.
            </p>
            <br />
            <p>
              Despite being a grown man living in the 21st century, I often view
              life through the lens of a 12-year-old boy. I tend to wish away
              the present and yearn for the chance to redo certain moments, to
              make different choices and seize every opportunity that comes my
              way. I could write a handbook of missed opportunities.
            </p>
            <br />
            <p>
              But it's not just my own life that I think about. I believe in the
              power of living eulogies - why wait until someone has passed away
              to tell them how much they mean to you? I want to celebrate the
              people I love while they're still here, to let them know just how
              much they enrich my life and bring me joy.
            </p>
            <br />
            <p>
              And as for the end of my own journey? I like to think that, in a
              way, it's already happening. Every day is a new chapter in my life
              story, and I'm determined to make the most of each one. When I
              take my last breath, I hope that I'll be able to look back on my
              life with a sense of fulfillment, knowing that I made the most of
              every opportunity and lived with no regrets.
            </p>
          </div>
          <div className={styles.heroImg}>
            <img
              src="https://nicky-blogs.s3.amazonaws.com/Nicky/Nicky_Ai_Avatar.png"
              alt="Picture of me, Nicky Marino"
            />
          </div>
        </div>
      </div>
      <div className={styles.timelineContainer}>
        <img
          className={styles.scrollImage}
          src="https://nicky-blogs.s3.amazonaws.com/Nicky/Timeline.png"
          alt=""
        />
        <img
          className={styles.scrollImage}
          src="https://nicky-blogs.s3.amazonaws.com/Nicky/Timeline.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default AboutMe;
