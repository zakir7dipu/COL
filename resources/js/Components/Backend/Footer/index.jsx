import React, {useEffect, useState} from 'react';
import { Link } from '@inertiajs/react';

function Index(props) {
    const [currentYear, setCurrentYear] = useState("")
    useEffect(()=>{
        let date = new Date()
        let year = date.getFullYear()
        setCurrentYear(year);
    },[])
    return (
        <div className="footer">
            <div className="copyright">
                <p>Copyright &copy; Designed & Developed by <Link
                    href="/">Bizz Solutions Plc</Link> {currentYear}</p>
            </div>
        </div>
    );
}

export default Index;
