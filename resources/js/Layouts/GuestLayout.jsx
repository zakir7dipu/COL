import Header from '@/Components/FrontEnd/Header/index.jsx'
import Footer from "@/Components/FrontEnd/Footer";
import BackToTop from "@/Components/FrontEnd/BackToTop.jsx";
import {useDispatch, useSelector} from "react-redux";
import {mobileMenuAction} from "@/Featurs/Menu/MenuSlice.js";

export default function Guest({children}) {
    const {drawerMenu} = useSelector(state => state.menuItems)
    const dispatch = useDispatch()
    return (
        <div className="main-wrapper">
            <Header/>
            {children}
            <Footer/>
            <BackToTop/>
            {drawerMenu && <div className={`offcanvas-backdrop fade ${drawerMenu ? 'show':''}`} onClick={e => {
                e.preventDefault()
                dispatch(mobileMenuAction())
            }}></div>}
        </div>
    );
}
