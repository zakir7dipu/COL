import Header from '@/Components/FrontEnd/Header/index.jsx'
import Footer from "@/Components/FrontEnd/Footer";
import BackToTop from "@/Components/FrontEnd/BackToTop.jsx";
import {useSelector} from "react-redux";

export default function Guest({children}) {
    const {drawerMenu} = useSelector(state => state.menuItems)
    return (
        <div className="main-wrapper">
            <Header/>
            {children}
            <Footer/>
            <BackToTop/>
            {drawerMenu && <div className={`offcanvas-backdrop fade ${drawerMenu ? 'show':''}`}></div>}
        </div>
    );
}
