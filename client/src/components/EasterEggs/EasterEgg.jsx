import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";

const EasterEgg = () => {
  const [typed, setTyped] = useState("");
  const [showEgg, setShowEgg] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState([]);

  const rawImages = [
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHN3czBhdmxmN2d3ZW0yd2U4OWNhMjV1MW8wYTZ2aTJ2d3FvdjgwdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TIWYqtzg5wCCtc10Bi/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXlqNzJtYjVuYjk4emJseG9yaXkwN3lzc2h0MHhvODZhemNwNDJpdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oNTREklEAaYkRZ0Jed/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExczdodnh3bjRsc3JidDAyMWNhbjRwcDl0aTByYmowaG5uNjFyOHp1bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bipumCzPODylq/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExenhlbzNucXFlYzZoaTU1cXh4OW9pMm9penVoZnBkaHM3M3Mzc3F4NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kkEmNte4tRmZ0fgBhE/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDcycmdhcjk5cXhvZDQ2d2MxMDdqYTMybGt5aDhudTU1ajRuOWo4ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/CqVNwrLt9KEDK/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGtmcmswZDZib3o2bHY4bzl4Nmx6Z2ZheGttZnEwZ2owN2wzank3NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zwIXxz99tNdbW/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW5yNHZhMTUyM21pcjRrNTdwOXFiZnowdjJ5emg5ajY2M2F6YjJ1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/w3J7mstYCISqs/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDUyZzhweTFhdnNncXJkdHJiNmJ0ZHNkbGRwaWM3N3NlcDF2ZWh4dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aGCfToZLs8PW7lHDCc/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTlqcWM2NGc2cGp4a2RiNHdzcW96Nmc4bjAxbXR1OWZpdm1ucWRiaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7bu5s3gOy4T43d28/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2RuMjRrNG9veGdhcG0zN3NpMmwwYzZmbnpkeGkwa3dsOWYyenZxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3vEJiMNgR6cik/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDIxeXlwb2xkcDJzcXU0ZW4wMjlnZXphNjdxYWt1NDA0bWVwbTR6NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QhtEyc5t9JEfAd3Vgm/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDRuMTlmZ3duczQ3dHUyZWY1aHBpbXczb2k5cTR4MjEwdTRkY2RtMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hllwtNe9cnAeA/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExanloMGliY2NrdXcwemVqbDVrdjBlNWQzODUxY3VvYzBrdmV1cXRubyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xx0JzzsBXzcMK542tx/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzNmZzFoMWpndWtvM2Z5ejJwZDF0ZXN0bXM4b2FuejhpYmY4a2FucyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0He9vcleJTOoowEg/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjZlaHoxczJmNnIxZjR6bG0yOHg5YnV5ajUzdnBjbDRjNWZmNDg1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3q2zskzk1OWbBdLy/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3prNXhheGZ4YTc2MmMzamFtdHUycml2Nnp5aGhjcm55bXBlNHhlaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hhgAbqQpm49vW/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHFqN2Qzdmcxamt2YzJ3M3lhZjFuZnZ3ZHhseHpuY3FjODgwMnFpbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EWEhEPYYLm5bDaLPS6/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXQweTF6eDg4czA0YXB1aDc0eHRrOGR5NGVhYXVnMmJqN2VteTluYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MpTxX3y1avwEWno7T9/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnkwOXNzZ3lscDRicmJ3eXF3cDZkMDQyejl1MXhxNHloMGRrMTRjeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/c8UY1kwtUkIkU/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHJoeTAwbGtzaHVwbmY4NWFjcTZxaW84ZHptcGQ1OHlteW5jcHNsNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3HMiEFzstXigw/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHBjOHJsM2RuZG9pNjdvOWRjcW9keWs1ZDA5d3AzeXJ4c3p2dm92dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AtZKYbmuszStW/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2lyczlqN2ZoYmtueTlzNms5d2Zqc3RqdDJvdjM2cDY1YWZiaDc4YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vjmceXw84zGdHaBDBp/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZtNTFqN3Q5dXUyMTVzNmVnbnh2dXRweHM0dG80dWZibDNjNjlvYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zb052LQTm4WsdZTPqa/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExejg0dmhhcGtucXU0OW8xN2E1Y2g2ZzV4dG93a2J2NnBzeWVicjV1YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sOgEuGyjS3qSbDu86R/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzQ4OGwzcGllMjI1dm41bXpyNGV2aXYxMDh1bGc5cTkxMnVraDgxdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/XI7rk6UYBM4LWp2rw0/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW0wZThtODE0cjlucDF5eW5lYm1uN2huZngwc3A4dGpwd3FtaDBzNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qwwO5KdM4cJLhl7YLK/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaTQ5czRjcG94bGVtaDE4Z3B6a2R2ejZnc3dvazRzOXR5YTV5YzJjZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1zaDQCaSsLTFK/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZmhqeW5hOGI4ZDRpaDF5NjUycjQycHZjb3M5bTJrOGJkZ2l0ZWJsZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MagubuxVFLgiI/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3VkcWdjeDF5dGZucnB4cHh2bTkyMjJrbjY1bDdqM3ZtaXA4cjJ3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2Sq42lWaExLwfAiI/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmo2MmZpa3kwNGpqNWJnMmZ1bTViZXZoMXE0NWxnc3JhbjJyNW9zeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iO1SXgxGMJnTxCmAKs/giphy.gif",
  ];

  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  useEffect(() => {
    const triggerPhrase = "alwaysinallways";

    const handleKeyPress = (e) => {
      const char = e.key;
      setTyped((prev) => {
        const next = (prev + char).slice(-triggerPhrase.length);
        if (next.toLowerCase() === triggerPhrase) {
          const shuffled = [rawImages[0], ...shuffle(rawImages.slice(1))];
          setShuffledImages(shuffled);
          setImageIndex(0);
          setShowEgg(true);
        }
        return next;
      });

      if (showEgg) {
        if (e.key === "ArrowRight") {
          setImageIndex((prev) => (prev + 1) % shuffledImages.length);
        } else if (e.key === "ArrowLeft") {
          setImageIndex((prev) =>
            prev === 0 ? shuffledImages.length - 1 : prev - 1
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [showEgg]);

  const handleImageClick = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev + 1) % shuffledImages.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setImageIndex((prev) =>
      prev === 0 ? shuffledImages.length - 1 : prev - 1
    );
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setImageIndex((prev) => (prev + 1) % shuffledImages.length);
  };

  return (
    <>
      <audio
        id="easter-egg-sound"
        src="https://nicky-blogs.s3.us-east-1.amazonaws.com/Assets/Sounds/AlwaysInAllWays.mp3"
        preload="auto"
      />

      <AnimatePresence>
        {showEgg && (
          <motion.div
            className="cosmic-overlay"
            initial={{ scale: 0.8, opacity: 0, borderRadius: "50%" }}
            animate={{
              scale: 1,
              opacity: 1,
              borderRadius: ["50%", "20%", "0%"],
              boxShadow: [
                "0 0 0px #0ff",
                "0 0 30px #0ff",
                "0 0 60px #00f",
                "0 0 80px #0ff",
              ],
            }}
            exit={{ opacity: 0, scale: 0.5, borderRadius: "50%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            onClick={() => {
              setShowEgg(false);
              const sound = document.getElementById("easter-egg-sound");
              if (sound) {
                sound.pause();
                sound.currentTime = 0; // optional: rewind to start
              }
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(0, 0, 0, 0.95)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <Particles
              options={{
                fullScreen: false,
                background: { color: { value: "transparent" } },
                fpsLimit: 60,
                interactivity: { events: { resize: true } },
                particles: {
                  color: { value: "#ffffff" },
                  move: {
                    enable: true,
                    speed: 0.2,
                    random: true,
                    outModes: { default: "bounce" },
                  },
                  number: { value: 75 },
                  opacity: { value: 0.5 },
                  shape: { type: "circle" },
                  size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
              }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
              }}
            />

            {/* Slideshow Image */}
            <motion.img
              src={shuffledImages[imageIndex]}
              alt="Nebula Portal"
              onClick={handleImageClick}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={{
                maxWidth: "60%",
                maxHeight: "60%",
                borderRadius: "1rem",
                zIndex: 1,
              }}
              onLoad={() => {
                const sound = document.getElementById("easter-egg-sound");
                if (sound) sound.play();
              }}
            />

            {/* Arrows */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "3%",
                transform: "translateY(-50%)",
                width: "3rem",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                cursor: "pointer",
                userSelect: "none",
              }}
              onClick={handlePrev}
            >
              <motion.span
                whileHover={{ scale: 1.3, textShadow: "0 0 15px #0ff" }}
                style={{
                  fontSize: "2.5rem",
                  fontFamily: "Orbitron, sans-serif",
                  color: "#0ff",
                  textShadow: "0 0 8px #0ff, 0 0 12px #00f",
                  display: "inline-block",
                  transformOrigin: "center",
                  willChange: "transform",
                }}
              >
                ◀
              </motion.span>
            </div>

            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "3%",
                transform: "translateY(-50%)",
                width: "3rem",
                height: "3rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 2,
                cursor: "pointer",
                userSelect: "none",
              }}
              onClick={handleNext}
            >
              <motion.span
                whileHover={{ scale: 1.3, textShadow: "0 0 15px #0ff" }}
                style={{
                  fontSize: "2.5rem",
                  fontFamily: "Orbitron, sans-serif",
                  color: "#0ff",
                  textShadow: "0 0 8px #0ff, 0 0 12px #00f",
                  display: "inline-block",
                  transformOrigin: "center",
                  willChange: "transform",
                }}
              >
                ▶
              </motion.span>
            </div>

            {/* Cosmic Message */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              style={{
                color: "#fff",
                fontSize: "2rem",
                marginTop: "2rem",
                zIndex: 1,
                fontFamily: "Orbitron, sans-serif",
                textShadow: "0 0 10px #0ff, 0 0 20px #00f",
              }}
            >
              Welcome, Cosmic Pal!
            </motion.h1>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEgg;
