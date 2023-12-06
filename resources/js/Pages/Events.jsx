import React from 'react';
import {Head} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Preloader from "@/Components/FrontEnd/Preloader/index.jsx";

function Events(props) {
    return (
        <GuestLayout>
            <Head title="Events" />
            <Preloader/>
            <div>Events</div>
        </GuestLayout>
    );
}

export default Events;
