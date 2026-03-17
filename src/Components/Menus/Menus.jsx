import React from "react";
import "./Menus.css";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import girl from "../../assets/girl.png"
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

const Menus = ({ toggle }) => {
  // animation variants
  const zoomIn = { hidden: { scale: 0 }, visible: { scale: 1 } };
  const fadeLeft = { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } };

  return (
    <>
      {toggle ? (
        <>
          {/* Profile pic animation */}
          <motion.div
            className="navbar-profile-pic"
            initial="hidden"
            animate="visible"
            variants={zoomIn}
            transition={{ duration: 0.5 }}
          >
            <img src={girl}
              alt="profile pic"
            />
          </motion.div>

          {/* Nav items animation */}
          <motion.div
            className="nav-items"
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            transition={{ staggerChildren: 0.1 }}
          >
            <div className="nav-item">
              <div className="nav-link">
                <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcHome /> Home
                </Link>
              </div>
              <div className="nav-link">
                <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcAbout /> About
                </Link>
              </div>
              <div className="nav-link">
                <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcReadingEbook /> Education
                </Link>
              </div>
              <div className="nav-link">
                <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBiotech /> Tech Stack
                </Link>
              </div>
              <div className="nav-link">
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcVideoProjector /> Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcPortraitMode /> Work Experience
                </Link>
              </div>
              <div className="nav-link">
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                  <FcBusinessContact /> Contact
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                <FcHome />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
                <FcAbout />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="education" spy={true} smooth={true} offset={-100} duration={100}>
                <FcReadingEbook />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="techstack" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBiotech />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
                <FcVideoProjector />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="work" spy={true} smooth={true} offset={-100} duration={100}>
                <FcPortraitMode />
              </Link>
            </div>
            <div className="nav-link">
              <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
                <FcBusinessContact />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;