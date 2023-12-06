import React from 'react';
import {Link} from "@inertiajs/react";
import {useDispatch} from "react-redux";
import {mobileMenuAction} from "@/Featurs/Menu/MenuSlice.js";

function HeaderMeta(props) {
    const dispatch = useDispatch()
    return (
        <div className="header-meta">


            {/*<div className="header-cart dropdown">*/}

            {/*</div>*/}

            {/*<div className="header-login d-none d-lg-block">*/}
            {/*    <Link className="link" href={route('login')}><i className="far fa-user"></i> Login</Link>*/}
            {/*    <Link className="link" href={route('register')}>Register Now</Link>*/}
            {/*</div>*/}

            <div className="header-toggle d-lg-none">
                <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu" onClick={e=>{
                    e.preventDefault()
                    dispatch(mobileMenuAction())
                }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

        </div>
    );
}

export default HeaderMeta;
