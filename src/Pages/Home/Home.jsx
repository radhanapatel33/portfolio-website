import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume_Radhana_Patel from "../../assets/docs/Resume_Radhana_Patel.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import { motion } from "framer-motion"; 

const Home = () => {
  const [theme, setTheme] = useTheme();

  // handle theme toggle

  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div className="container-fluid home-container" id="home">
      {/* Theme Button */}
      <div className="theme-btn" onClick={handleTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={25} />
        ) : (
          <BsFillSunFill size={25} />
        )}
      </div> 

      <div className="container home-content">
        {/* Heading animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Hi 👋 I'm a</h2>
          <h1>
            <Typewriter
              options={{
                strings: [
                  "FullStack Web Developer!",
                  "Mern Stack Developer!",
                  "React Js Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </motion.div>

        {/* Buttons animation */}
        <motion.div
          className="home-buttons"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            className="btn btn-hire"
            // href="https://api.whatsapp.com/send?phone=1234567890"
            rel="noreferrer"
            target="_blank"
          >
            Hire Me
          </a>
          <a
            className="btn btn-cv"
            href={Resume_Radhana_Patel}
            download="your_name.pdf"
          >
            My Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;