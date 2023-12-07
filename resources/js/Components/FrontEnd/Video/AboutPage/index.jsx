import React, {useState} from 'react';
import CounterShape01 from "../../../../../../public/assets/images/shape/counter-shape1.png";
import Shape04 from "../../../../../../public/assets/images/shape/shape-4.png";
import {Link} from "@inertiajs/react";
import {modalAction} from "@/Featurs/PopupModal/PopupModalSlice.js";
import {useDispatch} from "react-redux";


function Index({thumb, videoId}) {
    const dispatch = useDispatch()

    return (
        <div className="section upstudy-video-section upstudy-video-section-02 section-padding-02">
            <div className="container">
                <div className="video-wrap">
                    <img className="shape-1 parallaxed" src={CounterShape01} alt=""/>
                    <img className="shape-2 parallaxed" src={Shape04} alt=""/>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="video-img text-center">
                                <img src={thumb} alt=""/>
                                <div className="play-btn" onClick={e => {
                                    dispatch(modalAction())
                                }}>
                                    <span className="popup-video action"><i
                                        className="fas fa-play"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
