import React from 'react';
import {Col} from "react-bootstrap";
import Shape3 from "../../../../../../public/assets/images/shape/about-shape3.png"
import BG3 from "../../../../../../public/assets/images/about-big3.jpg"
import ComponentImg from "../../../../../../public/assets/images/about-sm4.jpg"

function Left(props) {
    return (
        <Col lg={6}>
            <div className="about-img-wrap">
                <img className="shape-1" src={Shape3} alt=""/>
                <div className="about-img about-img-big">
                    <img src={BG3} alt=""/>
                </div>
                <div className="about-img about-img-sm">
                    <img src={ComponentImg} alt=""/>
                </div>
            </div>
        </Col>
    );
}

export default Left;
