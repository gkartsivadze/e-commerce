import ProductCard from "./subcomponents/ProductCard";
import img from "../../public/01.png"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ProductList() {
    return (
        <section className="product_list default-padding">
            <div className="page-controller flex-row-wrapper">
                <h1>Featured Products</h1>
                <div>
                    <button><FaArrowLeft /></button>
                    <button><FaArrowRight /></button>
                </div>
            </div>
            <div className="list-row">
                <ProductCard
                    name="Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"
                    category={"Smartphones"}
                    imgSrc={img}
                    price={1000}
                />
                <ProductCard
                    name="Iphone"
                    category={"Smartphones"}
                    imgSrc={img}
                    price={1000}
                />
                <ProductCard
                    name="Iphone"
                    category={"Smartphones"}
                    imgSrc={img}
                    price={1000}
                />
                <ProductCard
                    name="Iphone"
                    category={"Smartphones"}
                    imgSrc={img}
                    price={1000}
                />
                <ProductCard
                    name="Iphone"
                    category={"Smartphones"}
                    imgSrc={img}
                    price={1000}
                />
            </div>
        </section>
    )
};
