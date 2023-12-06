import React from 'react';
import {Head} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Preloader from "@/Components/FrontEnd/Preloader/index.jsx";

function Blog(props) {
    return (
        <GuestLayout>
            <Head title="Blog" />
            <Preloader/>
            <div>Blog</div>
        </GuestLayout>
    );
}

export default Blog;
