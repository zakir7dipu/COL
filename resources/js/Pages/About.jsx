import React from 'react';
import {Head} from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout.jsx";
import Preloader from "@/Components/FrontEnd/Preloader/index.jsx";
import Breadcrumb from "@/Components/FrontEnd/Breadcrumb/index.jsx";
import PageAbout from "@/Components/FrontEnd/About/AboutPage/index.jsx"
import Counter from "@/Components/FrontEnd/Counter/index.jsx";
import VideoSection from "@/Components/FrontEnd/Video/AboutPage/index.jsx"
import Thumb from "../../../public/assets/images/video-img.png";
import PopupModal from "@/Components/FrontEnd/PopupModal/index.jsx";
import Testimonial from "@/Components/FrontEnd/Testimonial/index.jsx";

function About(props) {
    let videoID = "Ga6RYejo6Hk"
    return (
        <GuestLayout>
            <Head title="About Us"/>
            <Preloader/>
            <Breadcrumb/>
            <PageAbout/>
            <Counter/>
            <VideoSection
                thumb={Thumb}
                videoId={videoID}
            />
            <Testimonial/>
            <PopupModal
                size={'lg'}
                haveHeader={false}
            >
                <iframe className="mfp-iframe" src={`https://www.youtube-nocookie.com/embed/${videoID}`} frameBorder="0" allowFullScreen="" width="100%" height={`350px`}></iframe>
                {/*<>ok</>*/}
            </PopupModal>
        </GuestLayout>
    );
}

export default About;
