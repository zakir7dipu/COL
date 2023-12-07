import React, {useEffect} from 'react';
import {Link, usePage} from "@inertiajs/react";
import MenuLink from "@/Components/FrontEnd/Header/MobileMenu/MenuLink.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setActiveMenu} from "@/Featurs/Menu/MenuSlice.js";
import {uid} from "@/Lib/helper.js";

function MenuItems() {
    const {menus} = useSelector(state => state.menuItems)
    const dispatch = useDispatch()
    const {props} = usePage()
    const {page} = props

    useEffect(()=>{
        dispatch(setActiveMenu(page))
    },[page])

    return (
        <div className="offcanvas-body">
            <div className="offcanvas-menu">
                <ul className="main-menu">
                    {menus.map(item =>
                        <MenuLink
                            key={uid()}
                            link={item?.link}
                            name={item?.page}
                            isActive={item?.isActive}
                            hasChild={item?.hasChild}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
}

export default MenuItems;
