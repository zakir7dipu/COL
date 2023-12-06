import React, {useEffect} from 'react';
import {Col, Row} from "react-bootstrap";

function Right(props) {
    useEffect(() => {
        $('select').niceSelect();
    }, []);

    return (
        <Col lg={5}>
            <div className="course-form">
                <div className="course-form-inner text-center">
                    <h3 className="title">Select your language course here</h3>
                    <form action="#">
                        <Row>
                            <Col sm={12}>
                                <div className="single-form">
                                    <select>
                                        <option value="0">Course Level</option>
                                        <option value="1">Course Level 01</option>
                                        <option value="2">Course Level 02</option>
                                        <option value="3">Course Level 03</option>
                                        <option value="4">Course Level 04</option>
                                        <option value="5">Course Level 05</option>
                                    </select>
                                </div>
                            </Col>

                            <Col sm={12}>
                                <div className="single-form">
                                    <select>
                                        <option value="0">Course Category</option>
                                        <option value="1">Course Category 01</option>
                                        <option value="2">Course Category 02</option>
                                        <option value="3">Course Category 03</option>
                                        <option value="4">Course Category 04</option>
                                        <option value="5">Course Category 05</option>
                                    </select>
                                </div>
                            </Col>
                            <Col sm={12}>
                                <div className="single-form">
                                    <input type="text" placeholder="What are you looking for"/>
                                </div>
                            </Col>
                            <Col sm={12}>
                                <div className="form-btn">
                                    <a className="btn btn-2" href="#">Search Courses</a>
                                </div>
                            </Col>
                        </Row>
                    </form>
                </div>
            </div>
        </Col>
    );
}

export default Right;
