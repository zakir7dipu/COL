import React from 'react';
import {highlightKeyword, uid} from "@/Lib/helper.js";
import Shape06 from "../../../../../public/assets/images/shape/shape-6.png";
import CounterIcon07 from "../../../../../public/assets/images/counter-7.png";
import CounterIcon08 from "../../../../../public/assets/images/counter-8.png";
import CounterIcon09 from "../../../../../public/assets/images/counter-9.png";
import CounterIcon05 from "../../../../../public/assets/images/counter-5.png";
import {Row} from "react-bootstrap";
import CounterCard from "@/Components/FrontEnd/Counter/Card.jsx";

function Index() {
    let counter = [
        {
            icon: CounterIcon08,
            title: "24",
            unit: "k+",
            text: "Total Students Enrolled"
        },
        {
            icon: CounterIcon09,
            title: "2.4",
            unit: "k+",
            text: "Daily Live Classes"
        },
        {
            icon: CounterIcon05,
            title: "3.5",
            unit: "M",
            text: "Video Lesson"
        },
        {
            icon: CounterIcon07,
            title: "75",
            unit: "+",
            text: "Total Exam Categories"
        }
    ]
    return (
        <div className="section upstudy-counter-section-04 section-padding">
            <div className="container">
                <div className="counter-wrap">
                    <div className="section-title text-center">
                        <h2 className="title" dangerouslySetInnerHTML={{
                            __html: highlightKeyword(
                                "We have best Records",
                                1,
                                'e')}}></h2>
                    </div>
                    <div className="shape-1"></div>
                    <img className="shape-2" src={Shape06} alt=""/>
                    <div className="counter-content-wrap">
                        <Row>
                            {counter.map(item=>
                                <CounterCard
                                    key={uid()}
                                    icon={item?.icon}
                                    title={item?.title}
                                    unit={item?.unit}
                                    text={item?.text}
                                />
                            )}
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
