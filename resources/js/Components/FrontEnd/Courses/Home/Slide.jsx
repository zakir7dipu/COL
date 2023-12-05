import React from 'react';
import {Link} from "@inertiajs/react";


function Slide({link, image, price, type, title, hours}) {
    return (
        <div className="swiper-slide">
            <div className="single-course">
                <div className="courses-image">
                    <Link href={link}>
                        <img src={image} alt="Courses"/>
                    </Link>
                    <div className="top-meta">
                        <p className="price">{price}</p>
                    </div>
                </div>
                <div className="courses-content">
                    <h4 className="sub-title">{type}</h4>
                    <h3 className="title">
                        <Link href={link}>{title}</Link>
                    </h3>
                </div>

                <div className="courses-meta">
                    <div className="course-enroll-rating d-flex">
                        <p><i className="far fa-clock"></i> {hours}</p>
                        <p><i className="fas fa-user"></i> {price}</p>
                        {/*<p className="total-rating"><i className="fas fa-star"></i> 4.5</p>*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slide;
