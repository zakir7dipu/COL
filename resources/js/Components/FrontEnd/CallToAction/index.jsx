import React from 'react';
import Left from "@/Components/FrontEnd/CallToAction/Left.jsx";
import Right from "@/Components/FrontEnd/CallToAction/Right.jsx";

function Index(props) {
    return (
        <div className="section upstudy-cta-section-03 section-padding">
            <div className="container">

                <div className="cta-wrap">
                    <div className="shape-2"></div>
                    <div className="row">
                        <Left/>
                        <Right/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
