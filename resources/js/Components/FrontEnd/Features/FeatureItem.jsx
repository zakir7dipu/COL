import React from 'react';
import {Col} from "react-bootstrap";

function FeatureItem({image, title, brief}) {
    return (
        <Col lg={4} md={6}>
            <div className="features-item text-center">
                <div className="features-img">
                    <img src={image} alt=""/>
                </div>
                <div className="features-content">
                    <h3 className="title">{title}</h3>
                    <p>{brief}</p>
                </div>
            </div>
        </Col>
    );
}

export default FeatureItem;
