import React from 'react';
import MidSection from "@/Components/FrontEnd/Footer/MidSection.jsx";
import {Link} from "@inertiajs/react";
import FooterLogo from '../../../../../public/assets/images/logo-5.png'
import AppleStore from '../../../../../public/assets/images/app-1.jpg'
import PlayStore from '../../../../../public/assets/images/app-2.png'

function FooterMid(props) {
    return (
        <div className="footer-widget-wrap">
            <div className="row">

                <MidSection>
                    <div className="footer-logo">
                        <Link href="/"><img src={FooterLogo} alt=""/></Link>
                    </div>
                    <p className="text">World largest online learning platform. Download our apps to start
                        learning.</p>
                    <div className="widget-info widget-info-2">
                        <div className="info-icon">
                            <i className="flaticon-phone-call"></i>
                        </div>
                        <div className="info-text">
                            <p className="call-text">Call Us Free</p>
                            <a href="tel:+91458654528">+91 458 654 528</a>
                        </div>
                    </div>
                </MidSection>


                <MidSection>
                        <h4 className="footer-widget-title">Trending Courses</h4>
                        <div className="widget-link">
                            <ul className="link">
                                <li><Link href="/">Home </Link></li>
                                <li><Link href="#">Pricing</Link></li>
                                <li><Link href="about.html">Compare plans</Link></li>
                                <li><Link href="contact.html">Contact us</Link></li>
                            </ul>
                        </div>
                </MidSection>

                <MidSection>
                        <h4 className="footer-widget-title">Study material</h4>
                        <div className="widget-link">
                            <ul className="link">
                                <li><Link href="blog.html">Blog</Link></li>
                                <li><Link href="#">Weekly webinar</Link></li>
                                <li><Link href="#">Academy</Link></li>
                                <li><Link href="#">Free eBooks & checklists</Link></li>
                            </ul>
                        </div>
                </MidSection>

                <MidSection>
                    <h4 className="footer-widget-title">Download Now</h4>
                    <div className="widget-download">
                        <a href="#"><img src={AppleStore} alt=""/></a>
                        <a href="#"><img src={PlayStore} alt=""/></a>
                    </div>
                </MidSection>
            </div>
        </div>
    );
}

export default FooterMid;
