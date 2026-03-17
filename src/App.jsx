import React from 'react'
import Layout from './Components/Layout/Layout'
import About from './Pages/About/About'
import Techstack from './Pages/Techstack/Techstack'
import Projects from "./Pages/Projects/Projects";
import Education from "./Pages/Educations/Education";
import WorkExp from "./Pages/workExp/WorkExp";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import { motion } from "framer-motion";
import MobileNav from "./Components/MobileNav/MobileNav";


function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 " style={{ marginLeft: "13%" }}>
          <motion.h6
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{
              scale: [0.8, 1.2, 1.2, 1, 1],
              rotate: [0, -5, 5, -5, 0],
              opacity: 1
            }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1 }}
          >
            Made With 😍 Radhana &copy; 2026
          </motion.h6>
        </div>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />


    </>
  )
}

export default App
