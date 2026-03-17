import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import girl from "../../assets/girl.png"

const About = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, transform: "scale(0.8)" }}
                animate={{ opacity: 1, transform: "scale(1)" }}
                transition={{ duration: 0.6 }}
            >
                <div className="about" id="about">
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                            <img src={girl}
                                alt="profile_pic"
                            />
                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                            <h1>About me</h1>
                            <p>
                                I am a passionate and dedicated MERN Stack Developer with strong expertise in building modern, scalable, and high-performance web applications using MongoDB, Express.js, React.js, and Node.js. I specialize in developing full-stack applications from scratch, handling everything from designing responsive front-end interfaces to building secure and efficient backend APIs.

                                I have hands-on experience working with RESTful APIs, authentication systems, database design, and state management. My focus is always on writing clean, maintainable, and reusable code while ensuring optimal performance and a seamless user experience. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.

                                Apart from technical skills, I strongly believe in continuous learning and staying updated with the latest technologies and industry trends. I am always eager to take on new challenges that help me grow both professionally and personally. 
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default About;