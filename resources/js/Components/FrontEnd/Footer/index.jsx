import React from 'react';
import Bottom from '@/Components/FrontEnd/Footer/Bottom.jsx'
import FooterMid from "@/Components/FrontEnd/Footer/FooterMid.jsx";
function Index(props) {
    return (
        <div className="footer-section section">
            <div className="container">
                <FooterMid/>
                <Bottom/>
            </div>
        </div>
    );
}

export default Index;
