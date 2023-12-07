import React from 'react';
import {Col, Row} from "react-bootstrap";
import {Link} from "@inertiajs/react";
import {highlightKeyword} from "@/Lib/helper.js";
// f6520a
function Right(props) {

    return (
        <Col lg={6}>
            <div className="about-content">
                {/*<h2 className="about-title">Including large benifit When <span>You Enroll</span> from our courses</h2>*/}
                <h2 className="about-title" dangerouslySetInnerHTML={{
                    __html: highlightKeyword(
                    "Including large benifit When You Enroll from our courses",
                    2,
                    'm')}}></h2>
                <p className="text">If you’ve been researching exactly what skill you want to learn, or
                    if you just need one more skill to round out your resume Whether fully virtual,
                    fully in-person or something in between, explore.</p>

                <p className="text">If you’ve been researching exactly what skill you want to learn, or
                    if you just need one more skill to round out your resume Whether fully virtua.</p>
                <Link className="read-more" href="#">Start Learning Now <i
                    className="fas fa-long-arrow-alt-right"></i></Link>
            </div>
        </Col>
    );
}

export default Right;
