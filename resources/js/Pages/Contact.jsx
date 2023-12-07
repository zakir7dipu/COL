import React from 'react';
import {Head} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Preloader from "@/Components/FrontEnd/Preloader/index.jsx";
import Breadcrumb from "@/Components/FrontEnd/Breadcrumb/index.jsx";

function Contact(props) {
    return (
        <GuestLayout>
            <Head title="Contact Us" />
            <Preloader/>
            <Breadcrumb/>
        </GuestLayout>
    );
}

export default Contact;
