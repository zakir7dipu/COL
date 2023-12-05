import React from 'react';
import {Link} from "@inertiajs/react";

function Slide({image, title}) {
    return (
        <div className="swiper-slide">
            <Link href="#" className="language-item text-center">
                <img src={image} alt=""/>
                <h4 className="title">{title}</h4>
            </Link>
        </div>
    );
}

export default Slide;
