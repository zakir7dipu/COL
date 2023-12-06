import React, {useEffect} from 'react';
import Shape from "@/Components/FrontEnd/Hero/Shape.jsx";
import {Col, Container, Row} from "react-bootstrap";
import {router} from "@inertiajs/react";
import HeroShape from '../../../../../public/assets/images/shape/hero5-shape1.png';
import HeroImage from '../../../../../public/assets/images/hero5-img.png';

function Index(props) {

    useEffect(()=>{
        AOS.init({
            duration: 1200,
            once: true,
        });
    },[])
    return (
        <div className="upstudy-hero-section-05 section">
            <Shape/>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className="hero-content">
                            <h2 className="title" data-aos="fade-up" data-aos-delay="700">
                                Online <span>language & culture</span> learning
                                platform</h2>
                            <div className="hero-btn-wrap" data-aos="fade-up" data-aos-delay="900">
                                <div className="hero-btn">
                                    <a className="btn" href={route('register')}>Try Free Courses</a>
                                </div>
                                <div className="hero-call">
                                    <div className="icon">
                                        <i className="flaticon-phone-call"></i>
                                    </div>
                                    <p className="number">458 654 528</p>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6}>
                        <div className="hero-images">
                            <img className="shape-1" src={HeroShape} alt=""/>
                                <div className="image">
                                    <img src={HeroImage} alt=""/>
                                </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Index;
