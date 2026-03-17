import React, { useState } from "react";
import { toast } from "react-toastify";
import "./Contact.css";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [name, setname] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    //handle submit button
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !msg) {
            toast.error("Please provide all fields");
            return;
        }

        emailjs
            .send(
                "service_7wpf5sf",
                "template_5mkuij7",
                {
                    from_name: name,
                    from_email: email,
                    message: msg,
                },
                "x9oPunb7LhwdHLV9v"
            )
            .then(() => {
                toast.success("Email Sent Successfully ✅");
                setname("");
                setEmail("");
                setMsg("");
            })
            .catch((error) => {
                console.log(error);
                toast.error("Failed to send email ❌");
            });
    };

    return (
        <>
            <div className="contact" id="contact">
                <div className="card card0 border-0">
                    <div className="row">

                        {/* LEFT IMAGE SECTION */}
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <motion.img
                                        src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?w=2000"
                                        alt="contact"
                                        className="image"
                                        initial={{ x: -100, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.8 }}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* RIGHT FORM SECTION */}
                        <div className="col-lg-6 col-md-6">
                            <motion.div
                                className="card2 d-flex card border-0 px-4 py-5"
                                initial={{ rotate: -10, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="row">
                                    <div className="row">
                                        <h6>
                                            Contact With
                                            <a
                                                href="https://www.linkedin.com/in/radhanapatel"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <BsLinkedin color="blue" size={30} className="ms-2" />
                                            </a>

                                            <a
                                                href="https://github.com/radhanapatel33"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <BsGithub color="black" size={30} className="ms-2" />
                                            </a>

                                        </h6>
                                    </div>

                                    <div className="row px-3 mb-4">
                                        <div className="line" />
                                        <small className="or text-center">OR</small>
                                        <div className="line" />
                                    </div>

                                    <div className="row px-3">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your Name"
                                            className="mb-3"
                                            value={name}
                                            onChange={(e) => setname(e.target.value)}
                                        />
                                    </div>

                                    <div className="row px-3">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter Your Email Address"
                                            className="mb-3"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <div className="row px-3">
                                        <textarea
                                            name="msg"
                                            placeholder="Write your message"
                                            className="mb-3"
                                            value={msg}
                                            onChange={(e) => setMsg(e.target.value)}
                                        />
                                    </div>

                                    <div className="row px-3">
                                        <button className="button" onClick={handleSubmit}>
                                            SEND MESSAGE
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;