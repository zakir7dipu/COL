import React from 'react';
import ApplicationLogo from "@/Components/FrontEnd/Header/ApplicationLogo.jsx";
import Menu from "@/Components/FrontEnd/Header/Menu";
import {Container} from "react-bootstrap";
import {Link} from "@inertiajs/react";
import HeaderMeta from "@/Components/FrontEnd/Header/Menu/HeaderMeta.jsx";
import MobileMenu from "@/Components/FrontEnd/Header/MobileMenu/index.jsx";

function Index({props}) {
    return (
        <>
            <div className="section header header-section-02 header-section-04">
                <div className="header-bottom-section">
                    <Container>
                        <div className="header-bottom-wrap">
                            <ApplicationLogo/>
                            <Menu/>
                            <HeaderMeta/>
                        </div>
                    </Container>
                </div>
            </div>
            <MobileMenu/>
        </>
    );
}

export default Index;
