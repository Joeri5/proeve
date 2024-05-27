'use client'

import React, { useState } from "react";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import './Carousel.css'

interface Props {
    data: { src: string; alt: string; title: string; text: string; }[];
}

const Carousel: React.FC<Props> = ({ data }) => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1)
    }
    console.log(data);
    return (
        <article className="pageLayout">
            {data.map((item, index) => (
                <h1 key={index} className={slide === index ? "title" : "title title-inactive"}>{item.title}</h1>
            ))}
            <div></div>
            {data.map((item, index) => (
                <p key={index} className={slide === index ? "text" : "text text-inactive"}>{item.text}</p>
            ))}

            <div className="carousel">
                <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
                {data.map((item, index) => (
                    <img src={item.src} alt={item.alt} key={index} className={slide === index ? "slide" : "slide slide-hidden"} />
                ))}
                <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
                <span className="indicators">
                    {data.map((_, idx) => (
                        <button key={idx} onClick={() => setSlide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                    ))}
                </span>

            </div>

        </article>
    );
};


export default Carousel;