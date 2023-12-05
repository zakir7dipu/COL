import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Shape01 from "../../../../../public/assets/images/shape/feat-shape2.png";
import Shape02 from "../../../../../public/assets/images/shape/feat-shape2.png";
import Feature01 from "../../../../../public/assets/images/feat-10.png";
import Feature02 from "../../../../../public/assets/images/feat-11.png";
import Feature03 from "../../../../../public/assets/images/feat-12.png";
import FeatureItem from "@/Components/FrontEnd/Features/FeatureItem.jsx";

function Index(props) {
    let features = [
        {
            image: Feature01,
            title: "Skilled Teachers",
            brief: "World-class training and development programs developed by top teachers Habitant duis voluptate."
        },
        {
            image: Feature02,
            title: "World Best Tutor",
            brief: "World-class training and development programs developed by top teachers Habitant duis voluptate."
        },
        {
            image: Feature03,
            title: "Classified Certificate",
            brief: "World-class training and development programs developed by top teachers Habitant duis voluptate."
        }
    ]

    return (
        <div className="section upstudy-features-section upstudy-features-section-04 section-padding-02">
            <Container>
                <div className="features-wrap section-padding-03">
                    <div className="shape-1">
                        <img src={Shape01} alt=""/>
                    </div>
                    <div className="shape-2">
                        <img src={Shape02} alt=""/>
                    </div>
                    <div className="section-title-3 text-center">
                        <h3 className="sub-title">Why Choose Us</h3>
                        <h2 className="title">We offer wide range of courses </h2>
                    </div>
                    <div className="features-content-wrap">
                        <Row>
                            {features.map((item, index) => <FeatureItem
                                key={index}
                                image={item?.image}
                                title={item?.title}
                                brief={item?.brief}
                            />)}
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Index;
