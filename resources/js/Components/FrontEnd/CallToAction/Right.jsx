import React from 'react';
import {Col} from "react-bootstrap";

function Right(props) {
    return (
        <Col lg={6}>
            <div className="cta-content">
                <h4 className="price">$199/ <span>month</span></h4>
                <h2 className="title">Special monthly language package for evreyone</h2>
                <a className="btn" href="#">Get Started Now</a>
            </div>
        </Col>
    );
}

export default Right;
