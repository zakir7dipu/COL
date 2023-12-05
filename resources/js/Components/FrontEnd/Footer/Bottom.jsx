import React from 'react';
import {Link} from "@inertiajs/react";

function Bottom(props) {
    return (
        <div className="footer-copyright">
            <div className="copyright-wrapper">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="copyright-text">
                            <p>© Copyright {new Date().getFullYear()} <a target="_blank" href="https://www.bizzsol.com.bd">Bizz Solutions PLC</a> All rights reserved. </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="copyright-social">
                            <ul className="social">
                                <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                                <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                                <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bottom;
