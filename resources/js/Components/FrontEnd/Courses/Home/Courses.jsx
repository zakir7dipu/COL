import React, {useEffect} from 'react';
import Slide from "@/Components/FrontEnd/Courses/Home/Slide.jsx";
import Courses12 from "../../../../../../public/assets/images/courses/courses-12.jpg";
import Courses13 from "../../../../../../public/assets/images/courses/courses-13.jpg";
import Courses14 from "../../../../../../public/assets/images/courses/courses-14.jpg";

function Courses(props) {
    useEffect(()=>{
        new Swiper(".courses-active", {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".courses-active .swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                },
            },
        });
    })

    let allCourses = [
        {
            link: "#",
            image: Courses12,
            price: "$45",
            type: "Intermidiate",
            title: "Learn english with grammer pronuncitaion part 2",
            hours: "10"
        },
        {
            link: "#",
            image: Courses13,
            price: "$59",
            type: "Intermidiate",
            title: "Getting Started with the Linux Command Line",
            hours: "10"
        },
        {
            link: "#",
            image: Courses14,
            price: "$29",
            type: "Intermidiate",
            title: "The Complete JavaScript Course for Beginner",
            hours: "10"
        },
        {
            link: "#",
            image: Courses12,
            price: "$59",
            type: "Intermidiate",
            title: "Getting Started with the Linux Command Line",
            hours: "10"
        }

    ]

    return (
        <div className="swiper-container courses-active">
            <div className="swiper-wrapper">
                {allCourses.map((item, index) => <Slide
                    key={index}
                    link={item?.link}
                    image={item?.image}
                    price={item?.price}
                    type={item?.type}
                    title={item?.title}
                    hours={item?.hours}
                />)}

            </div>
            <div className="swiper-pagination"></div>
        </div>
    );
}

export default Courses;
