import phoneImg from "../../public/phone.png"
import controllerImg from "../../public/controller.png"
import watchImg from "../../public/watch.png"
import SliderDiv from "./subcomponents/SliderDiv"
import { useState } from "react"
import { useRef } from "react"

export default function ImageSlider() {
    const sliderRef = useRef();

    function handleSynchronization(e) {
        sliderRef.current.scrollLeft = e.target.value * window.innerWidth
    }

    return (
        <section id="slider_wrapper">

            <section ref={sliderRef} id="slider">
                <SliderDiv header={"NEW NAMPHONE RELEASE THIS FALL"} imgSrc={phoneImg} />
                <SliderDiv header={"PLAYBOX CONSOLE X245-HD"} imgSrc={controllerImg} />
                <SliderDiv header={"KEEP YOUR SHAPE WITH ALL NEW GADGETS"} imgSrc={watchImg} />
            </section>
            <div id="controller" onChange={handleSynchronization}>
                <input
                    defaultChecked
                    type="radio"
                    value="0"
                    name="image-slider"
                    id="slider-controller-1"
                />
                <label htmlFor="slider-controller-1" />
                <input
                    type="radio"
                    value="1"
                    name="image-slider"
                    id="slider-controller-2"
                />
                <label htmlFor="slider-controller-2" />
                <input
                    type="radio"
                    value="2"
                    name="image-slider"
                    id="slider-controller-3"
                />
                <label htmlFor="slider-controller-3" />
            </div>
        </section>
    )
};
