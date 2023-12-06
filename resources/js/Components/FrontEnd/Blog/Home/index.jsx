import React from 'react';
import Blog7 from "../../../../../../public/assets/images/blog/blog-7.jpg"
import Blog9 from "../../../../../../public/assets/images/blog/blog-9.jpg"
import Blog10 from "../../../../../../public/assets/images/blog/blog-10.jpg"
import BlogCard from "@/Components/FrontEnd/Blog/BlogCard.jsx";
import {Col, Container, Row} from "react-bootstrap";

function Index(props) {

    let blogs = [
        {
            link: "#",
            image: Blog7,
            data: "Jun 21, 2023",
            author: "Andrew Parker",
            category: "Business",
            title: "LIVE SHOW: Business memes, dad lessons, selling to CROs",
            Brief: "World-class training and development programs developed by top teachers"
        },
        {
            link: "#",
            image: Blog9,
            data: "Jun 23, 2023",
            author: "Andrew Parker",
            category: "Business",
            title: "Those Other College Expenses You Aren`t Thinking About",
            Brief: "World-class training and development programs developed by top teachers"
        },
        {
            link: "#",
            image: Blog10,
            data: "Jun 25, 2023",
            author: "Andrew Parker",
            category: "Business",
            title: "LIVE SHOW: Business memes, dad lessons, selling to CROs",
            Brief: "World-class training and development programs developed by top teachers"
        }

    ]

    return (
        <div className="section upstudy-blog-section-03 section-padding-02">
            <Container>
                <div className="blog-wrap">
                    <Row className="justify-content-center">
                        <Col lg={6}>
                            <div className="section-title-3 text-center">
                                <h3 className="sub-title">Latest News</h3>
                                <h2 className="title">Whats going on around you </h2>
                            </div>
                        </Col>
                    </Row>

                    <div className="blog-content-wrap">
                        <Row>
                            {blogs.map((item, index)=> <BlogCard
                                key={index}
                                link={item?.link}
                                image={item?.image}
                                data={item?.data}
                                author={item?.author}
                                category={item?.category}
                                title={item?.title}
                                brief={item?.brief}
                            />)}
                        </Row>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Index;
