import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel(){

    const settings = {
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint:1024,
            settings:{
                slidesToShow:3,
                slidesToScroll:1,
                infinite:true,
                dots:true,
            }
        },
        {
            breakpoint:600,
            settings:{
                slidesToShow:2,
                slidesToScroll:1,
                initialSlide:2
            }
        },
        {
            breakpoint:480,
            settings:{
                slidesToShow:1,
                slidesToScroll:1,
            
            }
        },
    ]

  };
    return(
    <div className="w-3/4 bg-[#01013F] ">
    <div className="w-3/4 m-auto bg-[#01013F] ">
        <h2 className="flex justify-center items-center text-white text-5xl mt-2 font-bold p-2">Skills</h2>
        <div className="mt-10">
            <Slider {...settings}>
            {data.map((d)=>(
                <div className="h-[300px] w-[300px] pr-2 pl-2 rounded-xl ">
                    <div className="h-60 bg-white rounded-xl flex justify-center items-center">
                        <img src={d.img} alt="image" className="h-50 w-60 rounded-full"/>
                    </div>
                </div>  
            ))}
            </Slider>
        </div>
    </div>
    </div>
    );
}

const data=[
    {img:`/skills/html.jpg`},
    {img:`/skills/CSS.jpg`},
    {img:`/skills/js.jpg`},
    {img:`/skills/react.jpg`},
    {img:`/skills/C.jpg`},
    {img:`/skills/java.jpg`},
    {img:`/skills/GitHub.jpg`},
];