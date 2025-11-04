import React from 'react';
import CountdownTimer from '../../components/UI/CountdownTimer';

import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroContainer}>
      <img
        className={styles.heroImg}
        src={
          'https://nicky-blogs.s3.us-east-1.amazonaws.com/Assets/nebulad-avatar.png'
        }
        alt="Hero image of a superhero"
      />
      <img
        className={styles.cradleImg}
        src={
          'https://nicky-blogs.s3.us-east-1.amazonaws.com/Assets/extravacon-logo.png'
        }
        alt="Cradle Con logo"
      />
      <div className={styles.heroTextContainer}>
        <h5>Prepare For</h5>
        <h1>
          ExtravaCon <span>2025</span>
        </h1>
        <p>Mellville, Ny - Saturday November 15th</p>

        <div className={styles.btnContainer}>
          <a
            href="https://www.extravacon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Full Schedule
          </a>
          <a
            href="https://www.eventeny.com/events/extravacon2025-15274/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Tickets
          </a>
        </div>
        <CountdownTimer
          target={new Date('2025-11-15T00:00:00')}
          dayMax={31}
          radius={70}
          strokeWidth={10}
          gradient={['#1f3768ff', '#f54f15']}
        />
      </div>
    </section>
  );
};

export default HeroSection;
