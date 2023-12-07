import React, {useEffect, useState} from 'react';

function Card({icon, title, unit, text}) {

    return (
        <div className="col-lg-3 col-sm-6">
            <div className="single-counter text-center">
                <div className="counter-icon">
                    <img src={icon} alt=""/>
                </div>
                <div className="counter-content">
                    <h3 className="title">
                        <span className="counter">{title}</span>
                        {unit}
                    </h3>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
