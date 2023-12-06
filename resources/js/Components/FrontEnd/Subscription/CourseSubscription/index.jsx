import React from 'react';
import FromBG from "../../../../../../public/assets/images/bg/form-bg.jpg";
import {Col, Container, Row} from "react-bootstrap";
import Left from "@/Components/FrontEnd/Subscription/CourseSubscription/Left.jsx";
import Right from "@/Components/FrontEnd/Subscription/CourseSubscription/Right.jsx";

function Index(props) {
    return (
        <div className="section upstudy-form-section" style={{backgroundImage: `url(${FromBG})`}}>
            <Container>
                <div className="form-wrap">
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
