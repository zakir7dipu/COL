import React from 'react';
import {Link} from "@inertiajs/react";
import Applogo from "../../../../../public/assets/images/logo-4.png"

function ApplicationLogo(props) {
    return (
        <div className="header-logo">
            <Link href="/"><img src={Applogo} alt="logo"/></Link>
        </div>
    );
}

export default ApplicationLogo;
