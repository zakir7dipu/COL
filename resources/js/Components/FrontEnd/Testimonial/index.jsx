import React from 'react';
import {highlightKeyword} from "@/Lib/helper.js";
import TestimonialSwiper from "@/Components/FrontEnd/Testimonial/Swiper/index.jsx";

function Index() {

    return (
        <div className="section upstudy-testimonial-section-02 upstudy-testimonial-section-04 section-padding">
            <div className="container">
                <div className="testimonial-wrap-02">
                    <div className="section-title text-center">
                        <h2 className="title" dangerouslySetInnerHTML={{
                            __html: highlightKeyword(
                                "What they Talk about us",
                                2,
                                'e')}}></h2>
                    </div>
                    <TestimonialSwiper/>
                </div>
            </div>
        </div>
    );
}

export default Index;
