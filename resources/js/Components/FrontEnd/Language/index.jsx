import React from 'react';
import {Container} from "react-bootstrap";
import Swiper from "@/Components/FrontEnd/Language/Swiper/index.jsx"

function Index(props) {
    return (
        <div className="section language-section">
            <Container>
                <div className="language-wrapper text-center">
                    <Swiper/>
                </div>
            </Container>
        </div>
);
}

export default Index;
