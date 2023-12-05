import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AllCourse from "./Courses.jsx"

function Index(props) {
    return (
        <div className="section upstudy-courses-section-02 section-padding">
            <Container>
                <div className="courses-wrap">
                    <Row className="justify-content-center">
                        <Col xl={5} lg={6}>
                            <div className="section-title-3 text-center">
                                <h3 className="sub-title">Our Top Courses</h3>
                                <h2 className="title">Learn from our top a new language courses </h2>
                            </div>
                        </Col>
                    </Row>

                    <div className="courses-content-wrap">
                        <AllCourse/>
                    </div>
                </div>
            </Container>
        </div>
);
}

export default Index;
