import React, {useEffect} from 'react';
import {Link, usePage} from "@inertiajs/react";
import {useDispatch, useSelector} from "react-redux";
import {uid} from "@/Lib/helper.js";
import {setActiveMenu} from "@/Featurs/Menu/MenuSlice.js";

function Index() {
    const {menus} = useSelector(state => state.menuItems)
    const dispatch = useDispatch()
    const {props} = usePage()
    const {page} = props

    useEffect(()=>{
        dispatch(setActiveMenu(page))
    },[page])

    return (
        <div className="header-menu d-none d-lg-block">
            <ul className="main-menu">
                {menus.map(item => {
                    return (
                        <li className={item?.isActive? "active-menu":""} key={uid()}>
                            <Link href={item?.link}>{item?.page}</Link>
                            {item?.hasChild && <>
                                <span className="menu-icon"></span>
                                <ul className="sub-menu">
                                    {item?.hasChild.map(sItem => <li key={uid()}>
                                        {/* this menu "active" code is not working ↓ */}
                                        <Link className={sItem?.isActive? "active":""} href={sItem?.link}>{sItem?.page}</Link>
                                    </li>)}
                                </ul>
                            </>}
                        </li>
                    )
                })}

                {/*<li>*/}
                {/*    <Link href={route('about')}>About</Link>*/}
                {/*    <span className="menu-icon"></span>*/}
                {/*    <ul className="sub-menu">*/}
                {/*        <li><a href="index-2.html">Main Demo</a></li>*/}
                {/*        <li><a href="index-3.html">Course Hub</a></li>*/}
                {/*        <li><a href="index-4.html">Distant Learning</a></li>*/}
                {/*        <li><a href="index-5.html">Kindergarten</a></li>*/}
                {/*        <li className="active"><a href="index-6.html">Language</a></li>*/}
                {/*        <li><a href="index-7.html">University</a></li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
            </ul>
        </div>
    );
}

export default Index;
