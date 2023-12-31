import React from 'react';
import {Link} from "@inertiajs/react";

function Index({link, linkName, hasSubMenu, menuIcon, children}) {
    const collapseSubManu = (e) => {
        // menu status change
        let toggleButton = e.target
        let parentContent = toggleButton.parentElement
        parentContent.classList.toggle('active')
        let currentState = toggleButton.getAttribute('aria-expanded');
        if (currentState === "false") {
            toggleButton.setAttribute('aria-expanded', 'true');
        } else {
            toggleButton.setAttribute('aria-expanded', 'false');
        }
        // submenu status change
        let submenu = parentContent.querySelector('ul')
        submenu.classList.toggle('in')

    }
    return (
        <>
            <Link className={hasSubMenu ? "has-arrow":''} href={link} aria-expanded="false" onClick={e => {
                if (hasSubMenu) {
                    e.preventDefault()
                    collapseSubManu(e)
                }
            }}>
                {menuIcon}<span
                className="nav-text">{linkName}</span>
            </Link>
            {hasSubMenu && children}
        </>
    );
}

export default Index;
