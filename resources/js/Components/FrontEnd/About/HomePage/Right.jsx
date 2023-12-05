import React from 'react';
import {Col} from "react-bootstrap";
import {Link} from "@inertiajs/react";

function Right(props) {
    return (
        <Col lg={6}>
            <div className="about-content">
                <div className="section-title-3">
                    <h3 className="sub-title">Best Place for learn language</h3>
                    <h2 className="title">Study, practice & learn a new languages</h2>
                </div>
                <p className="text">With the Internet, translation software can help non-native-speaking
                    individuals understand web pages published in other languages.
                    Whole-page-translation tools are of limited utility</p>
                <div className="about-list">
                    <ul>
                        <li>
                            <span className="about-icon"><i className="fas fa-check"></i></span>
                            <span className="about-text">Get access to 4,000+ of our top courses </span>
                        </li>
                        <li>
                            <span className="about-icon"><i className="fas fa-check"></i></span>
                            <span className="about-text"> Popular topics to learn now </span>
                        </li>
                        <li>
                            <span className="about-icon"><i className="fas fa-check"></i></span>
                            <span className="about-text">Find the right instructor for you </span>
                        </li>
                    </ul>
                </div>
                <Link className="btn" href="#">Lear More</Link>
            </div>
        </Col>
    );
}

export default Right;
