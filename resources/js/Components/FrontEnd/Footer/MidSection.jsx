import React from 'react';

function MidSection({children}) {
    return (
        <div className="col-lg-3 col-sm-6">
            <div className="footer-widget widget-about">
                {children}
            </div>
        </div>
    );
}

export default MidSection;
