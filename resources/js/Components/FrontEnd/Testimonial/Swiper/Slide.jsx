import React from 'react';

function Slide({image, message, name}) {
    return (
        <div className="swiper-slide">
            <div className="single-testimonial-02">
                <div className="testimonial-thumb">
                    <img src={image} alt=""/>
                </div>
                <div className="testimonial-content">
                    <i className="flaticon-quote-left"></i>
                    <p>{message}</p>
                    <span className="name">{name}</span>
                </div>
            </div>
        </div>
    );
}

export default Slide;
