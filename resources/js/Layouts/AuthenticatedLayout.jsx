import NavHeader from "@/Components/Backend/NavHeader/index.jsx";
import Header from "@/Components/Backend/Header/index.jsx";
import Sidebar from "@/Components/Backend/Sidebar/index.jsx";
import Footer from "@/Components/Backend/Footer/index.jsx";
import '../../backend-assets/css/style.css';
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {activeDashboardCss} from "@/Lib/helper.js";

export default function Authenticated({ user, header, children, auth }) {
    console.log(auth)
    useEffect(()=>{
        activeDashboardCss(true)
    },[])
    const {isOpenBackendSideNav} = useSelector(state => state.menuItems)
    return (
        <div id="main-wrapper" className={`show ${!isOpenBackendSideNav && 'menu-toggle'}`}>
            <NavHeader/>
            <Header/>
            <Sidebar/>
            <div className="content-body" style={{height: '90vh', overflowY: "scroll"}}>
                <div className="container-fluid mt-3">
                    {children}
                </div>
            </div>
            <Footer/>
        </div>
    );
}
