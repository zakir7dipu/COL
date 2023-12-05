import Header from '@/Components/FrontEnd/Header/index.jsx'
import Footer from "@/Components/FrontEnd/Footer";
import BackToTop from "@/Components/FrontEnd/BackToTop.jsx";

export default function Guest({children}) {
    return (
        <div className="main-wrapper">
            <Header/>
            {children}
            <Footer/>
            <BackToTop/>
        </div>
    );
}
