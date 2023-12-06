import React from 'react';
import {Col} from "react-bootstrap";
import Shape3 from "../../../../../public/assets/images/shape/cta-shape3.png"
import ShapeImage3 from "../../../../../public/assets/images/cta-img3.png"

function Left(props) {
    return (
        <Col lg={6}>
            <div className="cta-image">
                <img className="shape-1" src={Shape3} alt=""/>
                <div className="image">
                    <img src={ShapeImage3} alt="Call To Action"/>
                </div>
            </div>
        </Col>
    );
}

export default Left;
