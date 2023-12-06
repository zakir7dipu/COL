import { Head } from '@inertiajs/react';
import Preloader from "@/Components/FrontEnd/Preloader/index.jsx"
import GuestLayout from '@/Layouts/GuestLayout.jsx'
import Hero from "@/Components/FrontEnd/Hero/index.jsx";
import Language from "@/Components/FrontEnd/Language/index.jsx";
import About from "@/Components/FrontEnd/About/HomePage/index.jsx";
import Features from "@/Components/FrontEnd/Features/index.jsx";
import Courses from "@/Components/FrontEnd/Courses/Home/index.jsx";
import CoursesSubscription from "@/Components/FrontEnd/Subscription/CourseSubscription/index.jsx";
import Blog from "@/Components/FrontEnd/Blog/Home/index.jsx";
import CallToAction from "@/Components/FrontEnd/CallToAction/index.jsx"

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <GuestLayout>
            <Head title="Welcome" />
            <Preloader/>
            <Hero/>
            <Language/>
            <About/>
            <Features/>
            <Courses/>
            <CoursesSubscription/>
            <Blog/>
            <CallToAction/>
        </GuestLayout>
    );
}
