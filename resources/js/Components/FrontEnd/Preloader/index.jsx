import React, {useEffect, useRef, useState} from 'react';
import { usePage } from '@inertiajs/react';
import {useDispatch, useSelector} from "react-redux";
import {mobileMenuAction} from "@/Featurs/Menu/MenuSlice.js";

function Index() {
    const preloaderRef = useRef()
    const { props } = usePage();
    const loading = props.inertia && props.inertia.loading;
    const dispatch = useDispatch()
    const {drawerMenu} = useSelector(state => state.menuItems)
    useEffect(()=>{
        if(!loading){
           $(preloaderRef.current).delay(500).fadeOut(500)
            drawerMenu && dispatch(mobileMenuAction())
        }
    },[loading])

    return (
        <div ref={preloaderRef} id="preloader">
            <div className="preloader">
                <span></span>
                <span></span>
            </div>
        </div>
    );
}

export default Index;
