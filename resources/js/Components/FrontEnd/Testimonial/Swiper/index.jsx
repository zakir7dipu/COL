import React, {useEffect} from 'react';
import Slide from "@/Components/FrontEnd/Testimonial/Swiper/Slide.jsx";
import Testi04 from "../../../../../../public/assets/images/testi-4.jpg"
import Testi05 from "../../../../../../public/assets/images/testi-5.jpg"
import {uid} from "@/Lib/helper.js";
function Index(props) {
    let testimonials = [
        {
            image: Testi04,
            message: "In total, it was a big success, I would get emails about what a fantastic resource it was. ",
            name: "Vergenia Radar"
        },
        {
            image: Testi05,
            message: "In total, it was a big success, I would get emails about what a fantastic resource it was. ",
            name: "Martney Holder"
        },
        {
            image: Testi04,
            message: "In total, it was a big success, I would get emails about what a fantastic resource it was. ",
            name: "Vergenia Radar"
        }
    ]

    useEffect(()=>{
        new Swiper(".testimonial-02-active", {
            slidesPerView: 2,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".testimonial-02-active .swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                1400: {
                    slidesPerView: 2,
                },
            },
        });
    },[])

    return (
        <div className="testimonial-content-wrap-02">
            <div className="swiper-container testimonial-02-active">
                <div className="swiper-wrapper">
                    {testimonials.map(item=>
                        <Slide
                            key={uid()}
                            image={item?.image}
                            message={item?.message}
                            name={item?.name}
                        />
                    )}
                </div>

                <div className="swiper-pagination"></div>
            </div>
        </div>
    );
}

export default Index;
