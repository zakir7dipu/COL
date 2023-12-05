import React from 'react';
import HomeAbout01 from "../../../../../../public/assets/images/shape/ab-shape3.png";
import HomeAbout02 from "../../../../../../public/assets/images/about-big.jpg";
import HomeAbout03 from "../../../../../../public/assets/images/about-sm.jpg";
import HomeAbout04 from "../../../../../../public/assets/images/about-middle.jpg";
import HomeAbout05 from "../../../../../../public/assets/images/shape/about-text.png";
import {Col} from "react-bootstrap";

function Left(props) {
    return (
        <Col lg={6}>
            <div className="about-img-wrap">
                <div className="about-shape">
                    <img src={HomeAbout01} alt=""/>
                </div>
                <div className="about-img-big">
                    <img src={HomeAbout02} alt=""/>
                </div>
                <div className="about-img-sm">
                    <img src={HomeAbout03} alt=""/>
                </div>
                <div className="about-img-bottom">
                    <img src={HomeAbout04} alt=""/>
                </div>
                <div className="about-text-shape">
                    <img src={HomeAbout05} alt=""/>
                </div>
            </div>
        </Col>
    );
}

export default Left;
