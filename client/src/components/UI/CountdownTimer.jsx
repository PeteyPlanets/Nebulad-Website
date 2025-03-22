import React, { useState, useEffect } from "react";
import styles from "./CountdownTimer.module.css";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("May 17, 2025 10:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getCircleStyle = (value, maxValue) => {
    const percentage = (1 - value / maxValue) * 100;
    const strokeDashoffset = 376.99 - (376.99 * percentage) / 100;
    return {
      strokeDashoffset: strokeDashoffset,
    };
  };

  return (
    <div className={styles.container}>
      <div className={styles.element}>
        <svg className={styles.circle}>
          <defs>
            <linearGradient id="gradientDays" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="darkblue" />
              <stop offset="100%" stopColor="#f54f15" />
            </linearGradient>
          </defs>
          <circle
            cx="50%"
            cy="50%"
            r="60"
            stroke="url(#gradientDays)"
            style={getCircleStyle(31 - timeLeft.days, 31)}
          />
        </svg>
        <span className={styles.number}>{timeLeft.days}</span>
        <span className={styles.label}>days</span>
      </div>
      <div className={styles.element}>
        <svg className={styles.circle}>
          <defs>
            <linearGradient
              id="gradientHours"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="darkblue" />
              <stop offset="100%" stopColor="#f54f15" />
            </linearGradient>
          </defs>
          <circle
            cx="50%"
            cy="50%"
            r="60"
            stroke="url(#gradientHours)"
            style={getCircleStyle(24 - timeLeft.hours, 24)}
          />
        </svg>
        <span className={styles.number}>{timeLeft.hours}</span>
        <span className={styles.label}>hours</span>
      </div>
      <div className={styles.element}>
        <svg className={styles.circle}>
          <defs>
            <linearGradient
              id="gradientMinutes"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="darkblue" />
              <stop offset="100%" stopColor="#f54f15" />
            </linearGradient>
          </defs>
          <circle
            cx="50%"
            cy="50%"
            r="60"
            stroke="url(#gradientMinutes)"
            style={getCircleStyle(60 - timeLeft.minutes, 60)}
          />
        </svg>
        <span className={styles.number}>{timeLeft.minutes}</span>
        <span className={styles.label}>minutes</span>
      </div>
      <div className={styles.element}>
        <svg className={styles.circle}>
          <defs>
            <linearGradient
              id="gradientSeconds"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="darkblue" />
              <stop offset="100%" stopColor="#f54f15" />
            </linearGradient>
          </defs>
          <circle
            cx="50%"
            cy="50%"
            r="60"
            stroke="url(#gradientSeconds)"
            style={getCircleStyle(60 - timeLeft.seconds, 60)}
          />
        </svg>
        <span className={styles.number}>{timeLeft.seconds}</span>
        <span className={styles.label}>seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
