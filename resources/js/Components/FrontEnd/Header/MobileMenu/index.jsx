import React from 'react';
import MenuItems from "@/Components/FrontEnd/Header/MobileMenu/MenuItems.jsx";
import {Link} from "@inertiajs/react";
import ApplicationLogo from '../../../../../../public/assets/images/logo-white.png'

function Index(props) {
    return (
        <div className="offcanvas offcanvas-start" id="offcanvasMenu">

            <div className="offcanvas-header">
                <div className="offcanvas-logo">
                    <Link href="/"><img src={ApplicationLogo} alt=""/></Link>
                </div>

                <button type="button" className="close-btn" data-bs-dismiss="offcanvas"><i
                    className="flaticon-close"></i></button>

            </div>
            <MenuItems/>
        </div>
    );
}

export default Index;
