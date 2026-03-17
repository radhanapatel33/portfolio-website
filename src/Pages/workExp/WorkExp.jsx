import React from "react";
import { SiReact } from "react-icons/si";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
    return (
        <>
            <div className="work" id="work">
                <div className="container work-exp">
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                        Work Experience
                    </h2>
                    <hr />
                    <VerticalTimeline lineColor="#1e1e2c">
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "white", color: "#1e1e2c" }}
                            contentArrowStyle={{
                                borderRight: "7px solid  white",
                            }}
                            date="July 2025 - present"
                            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
                            icon={<SiReact />}
                        >
                            <h5 className="vertical-timeline-element-title">
                                Mern Stack Developer (Trainee)
                            </h5>
                            <h6 className="vertical-timeline-element-subtitle">
                                Infoviaan Technologies | IT Training & Placement | An ISO 9001:2015 Certified Company
                            </h6>
                            <p className="description">
                                Trained in MERN stack with hands-on projects and REST API development.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "white", color: "#1e1e2c" }}
                            contentArrowStyle={{
                                borderRight: "7px solid  white",
                            }}
                            date="Feb 2026 - present"
                            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
                            icon={<SiReact />}
                        >
                            <h5 className="vertical-timeline-element-title">
                                Frontend Developer Intern
                            </h5>
                            <h6 className="vertical-timeline-element-subtitle">
                                Innovateloop Solutions
                            </h6>
                            <p className="description">
                                Frontend intern building responsive React interfaces.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "white", color: "#1e1e2c" }}
                            contentArrowStyle={{
                                borderRight: "7px solid  white",
                            }}
                            date="July 2025 - present"
                            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
                            icon={<SiReact />}
                        >
                            <h5 className="vertical-timeline-element-title">
                                Project
                            </h5>
                            <h6 className="vertical-timeline-element-subtitle">
                                10+
                            </h6>
                            <p className="description">
                                Developed full-stack apps with React, Node, and MongoDB.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
};

export default WorkExp;
