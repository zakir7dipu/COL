import React, {useRef} from 'react';
import {Link} from "@inertiajs/react";

function MenuLink({link, name, isActive, hasChild}) {
    const subMenuLink = useRef()
    const parentMenuLinks = useRef()


    return (
        <>
            {!hasChild ?
                <li><Link className={isActive ? "active-menu" : ""} href={link}>{name}</Link></li>
                :
                <li ref={parentMenuLinks} className={`${isActive ? "active-menu" : ""} menu-item-has-children`}>
                    <span className="mobile-menu-expand"></span>
                    <Link href={link}>{name}</Link>
                    <span className="menu-icon"></span>
                    <span className="menu-expand" onClick={e => {
                        e.preventDefault()
                        parentMenuLinks.current.classList.toggle('active')
                        subMenuLink.current.classList.toggle('d-block')
                    }}></span>

                    <ul ref={subMenuLink} className="sub-menu" style={{boxSizing: "border-box"}}>
                        {hasChild.map(item =>
                            <li><Link className={isActive ? "active":""} href={item?.link}>{item?.page}</Link></li>
                        )}
                    </ul>
                </li>
            }



        </>
    );
}

export default MenuLink;
