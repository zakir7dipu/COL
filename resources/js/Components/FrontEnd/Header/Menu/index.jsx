import React from 'react';
import {Link} from "@inertiajs/react";

function Index(props) {
    return (
        <div className="header-menu d-none d-lg-block">
            <ul className="main-menu">
                <li className="active-menu">
                    <Link href="/">Home</Link>
                    <span className="menu-icon"></span>
                    <ul className="sub-menu">
                        <li><Link href="index-2.html">Main Demo</Link></li>
                        <li><Link href="index-3.html">Course Hub</Link></li>
                        <li><Link href="index-4.html">Distant Learning</Link></li>
                        <li><Link href="index-5.html">Kindergarten</Link></li>
                        <li className="active"><Link href="index-6.html">Language</Link></li>
                        <li><Link href="index-7.html">University</Link></li>
                    </ul>
                </li>
                <li><Link href="#">Pages</Link>
                    <span className="menu-icon"></span>
                    <ul className="sub-menu">
                        <li><Link href="about.html">About Us</Link></li>
                        <li><Link href="team.html">Team</Link></li>
                        <li><Link href="team-details.html">Team Single</Link></li>
                        <li><Link href="event.html">Event</Link></li>
                        <li><Link href="faq.html">Faq's</Link></li>
                        <li><Link href="error.html">404 Page</Link></li>
                        <li><Link href="login-register.html">Login Register</Link></li>
                    </ul>
                </li>
                <li><Link href="course-grid.html">Courses</Link>
                    <span className="menu-icon"></span>
                    <ul className="sub-menu">
                        <li><Link href="course-grid.html">Course Grid</Link></li>
                        <li><Link href="course-list.html">Course List</Link></li>
                        <li><Link href="course-details.html">Course Details</Link></li>
                    </ul>
                </li>
                <li><Link href="blog.html">Blog</Link>
                    <span className="menu-icon"></span>
                    <ul className="sub-menu">
                        <li><Link href="blog.html">Blog</Link></li>
                        <li><Link href="blog-list.html">Blog List</Link></li>
                        <li><Link href="blog-details.html">Blog Details</Link></li>
                    </ul>
                </li>
                <li><Link href="contact.html">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Index;
