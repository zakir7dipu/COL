import React, {useEffect, useRef} from 'react';
import MenuItems from "@/Components/FrontEnd/Header/MobileMenu/MenuItems.jsx";
import {Link} from "@inertiajs/react";
import ApplicationLogo from '../../../../../../public/assets/images/logo-white.png'
import {useDispatch, useSelector} from "react-redux";
import {mobileMenuAction} from "@/Featurs/Menu/MenuSlice.js";

function Index(props) {
    const {drawerMenu} = useSelector(state => state.menuItems)
    const dispatch = useDispatch()

    return (
        <div className={`offcanvas offcanvas-start ${drawerMenu ? "show":""}`} id="offcanvasMenu" style={{backgroundColor: "#031f42", width: '280px'}}>

            <div className="offcanvas-header">
                <div className="offcanvas-logo">
                    <Link href="/"><img src={ApplicationLogo} alt=""/></Link>
                </div>

                <button type="button" className="close-btn" data-bs-dismiss="offcanvas" onClick={e=>{
                    e.preventDefault()
                    dispatch(mobileMenuAction())
                }}><i
                    className="flaticon-close"></i></button>

            </div>
            <MenuItems/>
        </div>
    );
}

export default Index;
