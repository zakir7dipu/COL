import React, {useEffect, useRef, useState} from 'react';
import { usePage } from '@inertiajs/react';

function Index() {
    const preloaderRef = useRef()
    const { props } = usePage();
    const loading = props.inertia && props.inertia.loading;

    useEffect(()=>{
        if(!loading){
           $(preloaderRef.current).delay(500).fadeOut(500)
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
