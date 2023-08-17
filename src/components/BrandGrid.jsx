import brandImg from "../../public/brands.svg"
import brandImg1 from "../../public/brands-1.svg"
import brandImg2 from "../../public/brands-2.svg"
import brandImg3 from "../../public/brands-3.svg"
import brandImg4 from "../../public/brands-4.svg"
import brandImg5 from "../../public/brands-5.svg"
import brandImg6 from "../../public/brands-6.svg"
import brandImg7 from "../../public/brands-7.svg"
import brandImg8 from "../../public/brands-8.svg"
import brandImg9 from "../../public/brands-9.svg"

export default function BrandGrid() {
    return (
        <section id="brands_section" className="default-padding">
            <img src={brandImg} alt="Brand Logo" />
            <img src={brandImg1} alt="Brand Logo" />
            <img src={brandImg2} alt="Brand Logo" />
            <img src={brandImg3} alt="Brand Logo" />
            <img src={brandImg4} alt="Brand Logo" />
            <img src={brandImg5} alt="Brand Logo" />
            <img src={brandImg6} alt="Brand Logo" />
            <img src={brandImg7} alt="Brand Logo" />
            <img src={brandImg8} alt="Brand Logo" />
            <img src={brandImg9} alt="Brand Logo" />
        </section>
    )
};
