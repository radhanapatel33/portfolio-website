import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import sign from "../../assets/sign.png";
import chat from "../../assets/chat.png";
import reactcrud from "../../assets/reactcrud.png";
import merncrud from "../../assets/merncrud.png";
import ecommerce from "../../assets/ecommerce.png";
import Css_Box_Shadow_Generator from "../../assets/Css_Box_Shadow_Generator.png";

const Projects = () => {
    return (
        <>
            <div className="continer project" id="projects">

                <h2 className="col-12 mt-4 mb-1 text-center text-uppercase">
                    TOP RECENT PROJECTS
                </h2>
                <hr />

                <p className="pb-3 text-center">
                    These projects represent my practical experience as a MERN Stack Developer, where I have designed and developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I have worked on building responsive and dynamic user interfaces, creating secure backend APIs, implementing authentication and authorization systems, and  managing databases efficiently. Throughout these projects, I focused on writing clean and maintainable code, optimizing performance, and ensuring smooth user experiences. From developing e-commerce platforms to backend services and mobile applications, each project reflects my ability to transform ideas into functional, scalable, and real-world digital solutions while continuously improving my technical and problem-solving skills.

                </p>

                <div className="row" id="ads">

                    {/* ===== PROJECT 1 ===== */}

                    <motion.div className="col-md-4"
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full stack</span>
                                <img src={sign} alt="project1" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">React</span>
                                <span className="card-detail-badge">MongoDB</span>
                                <span className="card-detail-badge2"><a href="https://github.com/radhanapatel33/mern-auth-system" target="_blank" rel="noreferrer">
                                    View Code
                                </a></span>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="text-uppercase ">MERN Authentication System
                                    <span className="card-notify-badge1"> <a href="https://mern-auth-frontend-psi-cyan.vercel.app">Live Demo</a></span>
                                </h5>
                            </div>
                        </div>
                    </motion.div>

                    {/* ===== PROJECT 2 ===== */}

                    <motion.div className="col-md-4"
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full Stack</span>
                                <img src={chat} alt="project2" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">React</span>
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">MongoDB</span>
                                <span className="card-detail-badge">Firebase</span>
                                <span className="card-detail-badge2"><a href="https://github.com/radhanapatel33/mern-live-chat-app" target="_blank" rel="noreferrer">
                                    View Code
                                </a></span>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="text-uppercase">MERN real time Chat App
                                    <span className="card-notify-badge1"> <a href="https://mern-real-time-chat-app-cqxg.onrender.com">Live Demo</a></span>
                                </h5>
                            </div>
                        </div>
                    </motion.div>

                    {/* ===== PROJECT 3 ===== */}

                    <motion.div className="col-md-4"
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="card rounded">
                            <span className="card-notify-badge">Full Stack</span>
                            <div className="card-image">
                                <img src={merncrud} alt="project8" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">React</span>
                                <span className="card-detail-badge">MongoDB</span>
                                <span className="card-detail-badge2"><a href="https://github.com/radhanapatel33/mern-user-management-system" target="_blank" rel="noreferrer">
                                    View Code
                                </a></span>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="text-uppercase">MERN User Management System
                                    <span className="card-notify-badge1"> <a href="https://mern-crud-auth-three.vercel.app">Live Demo</a></span>
                                </h5>
                            </div>
                        </div>
                    </motion.div>

                    {/* ===== PROJECT 4 ===== */}

                    <motion.div className="col-md-4 mt-4"
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Frontend</span>
                                <img src={ecommerce} alt="project4" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">React</span>
                                <span className="card-detail-badge2"><a href="#" target="_blank" rel="noreferrer">
                                    View Code
                                </a></span>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="text-uppercase">E-commerce Website
                                    <span className="card-notify-badge1"> <a href="#">Live Demo</a></span>
                                </h5>
                            </div>
                        </div>
                    </motion.div>

                    {/* ===== PROJECT 5 ===== */}

                    <motion.div className="col-md-4 mt-4"
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Frontend</span>
                                <img src={reactcrud} alt="project3" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">React</span>
                                <span className="card-detail-badge2"><a href="https://github.com/radhanapatel33/react-crud-app" target="_blank" rel="noreferrer">
                                    View Code
                                </a></span>
                            </div>
                            <div className="card-body text-center">
                                <h5 className="text-uppercase">React CRUD Project
                                    <span className="card-notify-badge1"> <a href="https://crud-react-project-lemon.vercel.app">Live Demo</a></span>
                                </h5>
                            </div>
                        </div>
                    </motion.div>

                    {/* ===== PROJECT 6 ===== */}
                    <motion.div className="col-md-4 mt-4"
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Frontend</span>
                                <img src={Css_Box_Shadow_Generator} alt="project6" />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">html</span>
                                <span className="card-detail-badge">css</span>
                                <span className="card-detail-badge">javascript</span>
                                <span className="card-detail-badge2"><a href="https://github.com/radhanapatel33/css-generator-toolkit" target="_blank" rel="noreferrer">
                                    View Code
                                </a></span>

                            </div>
                            <div className="card-body text-center">
                                <h5 className="text-uppercase">CSS Generator toolkit
                                    <span className="card-notify-badge1"> <a href="https://css-generator-tool-alpha.vercel.app">Live Demo</a></span>
                                </h5>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </>
    );
};

export default Projects;