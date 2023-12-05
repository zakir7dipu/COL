import React from 'react';
import {Link} from "@inertiajs/react";

function HeaderMeta(props) {
    return (
        <div className="header-meta">


            {/*<div className="header-cart dropdown">*/}

            {/*</div>*/}

            {/*<div className="header-login d-none d-lg-block">*/}
            {/*    <Link className="link" href={route('login')}><i className="far fa-user"></i> Login</Link>*/}
            {/*    <Link className="link" href={route('register')}>Register Now</Link>*/}
            {/*</div>*/}

            <div className="header-toggle d-lg-none">
                <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

        </div>
    );
}

export default HeaderMeta;
