import React from 'react';
import {Head} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Preloader from "@/Components/FrontEnd/Preloader/index.jsx";

function About(props) {
    return (
        <GuestLayout>
            <Head title="About Us" />
            <Preloader/>
            <div>About</div>
        </GuestLayout>
    );
}

export default About;
