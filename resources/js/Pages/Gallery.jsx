import React from 'react';
import {Head} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Preloader from "@/Components/FrontEnd/Preloader/index.jsx";

function Gallery(props) {
    return (
        <GuestLayout>
            <Head title="Gallery" />
            <Preloader/>
            <div>Gallery</div>
        </GuestLayout>
    );
}

export default Gallery;
