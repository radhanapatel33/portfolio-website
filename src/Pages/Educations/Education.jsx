import React from "react";
import { MdSchool } from "react-icons/md";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
    return (
        <>
            <div className=" education" id="education">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Education Details
                </h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="2021 - 2025"
                        iconStyle={{ background: "#138781", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h4 className="vertical-timeline-element-title">B-tech (cse)</h4>
                        <h5 className="vertical-timeline-element-subtitle">
                          JNCT Rewa, IN
                        </h5>
                        <h6 className="cgpa"><strong>CGPA :</strong> 8.1 / 10</h6>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="2018 - 2019/ 2020-2021"
                        iconStyle={{ background: "#138781", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h4 className="vertical-timeline-element-title">X (SSC) / XII (HSC)</h4>
                        <h5 className="vertical-timeline-element-subtitle">
                             JJC School Rewa, IN
                        </h5>
                        <h6 className="cgpa">
                            <strong>X :</strong> 87% &nbsp; | &nbsp; <strong>XII :</strong> 86%
                        </h6>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Education;