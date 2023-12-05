import React from 'react';

import {Row} from "react-bootstrap";
import Left from "@/Components/FrontEnd/About/HomePage/Left.jsx";
import Right from "@/Components/FrontEnd/About/HomePage/Right.jsx";
function Index(props) {
    return (
        <div className="section upstudy-about-section-03 section-padding-02">
            <div className="container">
                <div className="about-wrap">
                    <Row>
                        <Left/>
                        <Right/>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Index;
