import { Link, Head } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout.jsx'
import Hero from "@/Components/FrontEnd/Hero/index.jsx";
import Language from "@/Components/FrontEnd/Language/index.jsx";
import About from "@/Components/FrontEnd/About/HomePage/index.jsx";
import Features from "@/Components/FrontEnd/Features/index.jsx";
import Courses from "@/Components/FrontEnd/Courses/Home/index.jsx";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <GuestLayout>
            <Head title="Welcome" />
            <Hero/>
            <Language/>
            <About/>
            <Features/>
            <Courses/>
        </GuestLayout>
    );
}
