import React from 'react';
import {Container, Row} from "react-bootstrap";
import Left from "@/Components/FrontEnd/About/AboutPage/Left.jsx";
import Right from "@/Components/FrontEnd/About/AboutPage/Right.jsx";

function Index() {
    return (
        <div className="section upstudy-about-section-06 section-padding">
            <Container>
                <div className="about-wrap">
                    <Row>
                        <Left/>
                        <Right/>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default Index;
