import phoneImg from "../../public/phone.png"
import controllerImg from "../../public/controller.png"
import watchImg from "../../public/watch.png"
import SliderDiv from "./subcomponents/SliderDiv"
import { useEffect, useState } from "react"
import { useRef } from "react"

export default function ImageSlider() {
    const [current, setCurrent] = useState(0)
    const sliderRef = useRef();

    function handleSynchronization(e) {
        setCurrent(e.target.value)
    }
    
    useEffect(() => {
        
        let timeOut = setTimeout(() => {
            setCurrent(current == 2 ? 0 : (current + 1))
        }, 3000)
        sliderRef.current.scrollLeft = current * window.innerWidth;
        document.querySelectorAll(`input[name="image-slider"]`).forEach(elem => {
            if(elem.value == current) {
                elem.checked = true;
            } else {
                elem.checked = false;
            }
        });
        return () => {
            clearTimeout(timeOut)
        }
    }, [current])

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
                    id="slider-controller-0"
                />
                <label htmlFor="slider-controller-0" />
                <input
                    type="radio"
                    value="1"
                    name="image-slider"
                    id="slider-controller-1"
                />
                <label htmlFor="slider-controller-1" />
                <input
                    type="radio"
                    value="2"
                    name="image-slider"
                    id="slider-controller-2"
                />
                <label htmlFor="slider-controller-2" />
            </div>
        </section>
    )
};
