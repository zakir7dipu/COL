import React from 'react';
import BGImage from "../../../../../public/assets/images/bg/page-banner.jpg";
import Shape01 from "../../../../../public/assets/images/shape/shape-1.png";
import Shape07 from "../../../../../public/assets/images/shape/shape-7.png";
import {Link, usePage} from "@inertiajs/react";
function Index() {
    const {props} = usePage()
    const {title} = props;
    return (
        <div className="section page-banner-section" style={{backgroundImage: `url(${BGImage})`}}>
            <div className="shape-1">
                <img src={Shape07} alt=""/>
            </div>
            <div className="shape-2">
                <img src={Shape01} alt=""/>
            </div>
            <div className="shape-3"></div>
            <div className="container">
                <div className="page-banner-wrap">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="page-banner text-center">
                                <h2 className="title">{title}</h2>
                                <ul className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">{title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
