import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import authentication from "../../assets/authentication.png"
import chatapp from "../../assets/chatapp.png"
import crud from "../../assets/crud.png"
import mern_crud from "../../assets/mern_crud.png"
import todo from "../../assets/todo.png"
import coffee from "../../assets/coffee.png"
import ecommerce from "../../assets/ecommerce.png"
import weatherapp from "../../assets/weatherapp.png"
import Css_Box_Shadow_Generator from "../../assets/Css_Box_Shadow_Generator.png"



const Projects = () => {
    return (
        <>
            <div className="continer project" id="projects">
                <h2 className="col-12 mt-4 mb-1 text-center text-uppercase">
                    TOP RECENT PROJECTS
                </h2>
                <hr />
                <p className="pb-3 text-center">
                    These projects represent my practical experience as a MERN Stack Developer, where I have designed and developed full-stack web applications using MongoDB, Express.js, React.js,<br /> and Node.js. I have worked on building responsive and dynamic user interfaces, creating secure backend APIs, implementing authentication and authorization systems, and <br /> managing databases efficiently. Throughout these projects, I focused on writing clean and maintainable code, optimizing performance, and ensuring smooth user experiences. From developing e-commerce platforms to backend services and mobile applications, each project reflects my ability to transform ideas into functional, scalable, and real-world digital solutions while continuously improving my technical and problem-solving skills.
                </p>

                {/* card design */}
                <div className="row" id="ads">

                    {/* project 1 */}

                    <motion.div
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="col-md-4"
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full stack</span>
                                <img
                                    src={authentication}
                                    alt="project1"
                                />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">react</span>
                                <span className="card-detail-badge">Mongodb</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h6 className="text-uppercase">
                                        Mern Authentication system
                                    </h6>
                                </div>
                                <a
                                    className="ad-btn"
                                href="#"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* project 2 */}

                    <motion.div
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="col-md-4 mt-4"
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full Stack</span>
                                <img
                                    src={chatapp}
                                    alt="project2"
                                />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">React</span>
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">Mongodb</span>
                                <span className="card-detail-badge">Firebase</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase"> mern Real time chat App</h5>
                                </div>
                                <a
                                    className="ad-btn"
                                href="#"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* project 3 */}

                    <motion.div
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="col-md-4 mt-4"
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Frontend</span>
                                <img
                                    src={crud}
                                    alt="project3"
                                />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Reactjs</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">react crud project</h5>
                                </div>
                                <a className="ad-btn"
                                href="https://crud-react-project-lemon.vercel.app"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* project 4 */}

                    <motion.div
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="col-md-4 mt-4"
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Frontend</span>
                                <img
                                    src={ecommerce}
                                    alt="project4"
                                />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Reactjs</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">E-commerce website</h5>
                                </div>
                                <a className="ad-btn"
                                href="#"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* project 5 */}

                    <motion.div
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="col-md-4 mt-4"
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Frontend</span>
                                <img
                                    src={weatherapp}
                                    alt="project5"
                                />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Reactjs</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">weather website</h5>
                                </div>
                                <a className="ad-btn"
                                href="https://weather-app-project-red.vercel.app"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* project 6 */}

                    <motion.div
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="col-md-4 mt-4"
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Frontend</span>
                                <img
                                    src={Css_Box_Shadow_Generator}
                                    alt="project6"
                                />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">html</span>
                                <span className="card-detail-badge">css</span>
                                <span className="card-detail-badge">javascript</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">Css Box Shadow Generator</h5>
                                </div>
                                <a className="ad-btn"
                                href="https://css-generator-tool-project.netlify.app"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* project 7 */}

                    <motion.div
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="col-md-4 mt-4"
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Frontend</span>
                                <img
                                    src={todo}
                                    alt="project7"
                                />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">html</span>
                                <span className="card-detail-badge">css</span>
                                <span className="card-detail-badge">javascript</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">todo project</h5>
                                </div>
                                <a className="ad-btn"
                                href="https://todo-list-project-rp.netlify.app"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* project 8 */}

                    <motion.div
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="col-md-4 mt-4"
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full Stack</span>
                                <img
                                    src={mern_crud}
                                    alt="project8"
                                />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">React</span>
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">MongoDB</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">mern crud project</h5>
                                </div>
                                <a className="ad-btn"
                                href="#"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* project 9 */}

                    <motion.div
                        initial={{ rotate: -10, opacity: 0 }}
                        whileInView={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="col-md-4 mt-4"
                    >
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Frontend</span>
                                <img
                                    src={coffee}
                                    alt="project9"
                                />
                            </div>
                            <div className="card-image-overly m-auto mt-3 text-center">
                                <span className="card-detail-badge">html</span>
                                <span className="card-detail-badge">css</span>
                                <div className="ad-title">
                                    <h5 className="text-uppercase mt-3">Coffee Page</h5>
                                </div>
                                <a className="ad-btn"
                                href="https://coffee-web-page-project.netlify.app"
                                >
                                    View
                                </a>
                            </div>
                            {/* <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">Coffee Page</h5>
                                </div>
                                <a className="ad-btn"
                                href="https://coffee-web-page-project.netlify.app"
                                >
                                    View
                                </a>
                            </div> */}
                        </div>
                    </motion.div>

                </div>
            </div>
        </>
    );
};

export default Projects;