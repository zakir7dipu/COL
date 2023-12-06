import React from 'react';
import FromShape from "../../../../../../public/assets/images/shape/form-shape.png";
import {Col} from "react-bootstrap";

function Left(props) {
    return (
        <Col lg={7}>
            <div className="form-content-wrap">
                <div className="shape-1">
                    <img src={FromShape} alt=""/>
                </div>
                <div className="form-content">
                    <div className="quote-svg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41px" height="36px">
                            <path
                                d="M40.999,26.79 C40.999,31.558 36.630,35.999 31.240,35.999 C25.849,35.999 21.480,31.558 21.480,26.79 C21.480,26.75 21.480,26.71 21.480,26.66 C21.469,25.776 20.895,9.974 30.992,2.439 C40.98,-4.355 30.275,3.900 28.79,16.703 C29.71,16.356 30.132,16.160 31.240,16.160 C36.630,16.160 40.999,20.601 40.999,26.79 ZM9.768,35.999 C4.378,35.999 0.8,31.558 0.8,26.79 C0.8,26.75 0.9,26.71 0.9,26.66 C0.2,25.776 0.575,9.974 9.521,2.439 C18.626,-4.355 8.804,3.900 6.607,16.703 C7.600,16.356 8.660,16.160 9.768,16.160 C15.158,16.160 19.528,20.601 19.528,26.79 C19.528,31.558 15.158,35.999 9.768,35.999 Z"/>
                        </svg>
                    </div>
                    <p className="text">World-class training and development programs developed by top
                        teachers</p>
                    <p className="name">Martney Holder</p>
                    <p className="designation">IT Specailist</p>
                </div>
            </div>
        </Col>
    );
}

export default Left;
