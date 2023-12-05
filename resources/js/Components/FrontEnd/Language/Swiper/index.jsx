import React, {useEffect} from 'react';
import Lan1 from "../../../../../../public/assets/images/language/lang-1.png";
import Lan2 from "../../../../../../public/assets/images/language/lang-2.png";
import Lan3 from "../../../../../../public/assets/images/language/lang-3.png";
import Lan4 from "../../../../../../public/assets/images/language/lang-4.png";
import Lan5 from "../../../../../../public/assets/images/language/lang-5.png";
import Slide from "@/Components/FrontEnd/Language/Swiper/Slide.jsx";

function Index(props) {

    const langs = [
        {
            img: Lan1,
            title: "English"
        },
        {
            img: Lan2,
            title: "German"
        },
        {
            img: Lan3,
            title: "Spanish"
        },
        {
            img: Lan4,
            title: "France"
        },
        {
            img: Lan5,
            title: "Italy"
        }
    ]

    useEffect(()=>{
        new Swiper(".language-active .swiper-container", {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            navigation: {
                nextEl: '.language-active .swiper-button-next',
                prevEl: '.language-active .swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 3,
                },
                1200: {
                    slidesPerView: 4,
                },
            },
        });
    },[])

    return (
        <>
            <div className="language-active">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {langs.map((item, index) => {
                            return <Slide
                                key={index}
                                image={item.img}
                                title={item.title}
                            />
                        })}
                    </div>


                </div>
                <div className="language-arrow swiper-button-next"></div>
                <div className="language-arrow swiper-button-prev"></div>
            </div>


        </>
    );
}

export default Index;
