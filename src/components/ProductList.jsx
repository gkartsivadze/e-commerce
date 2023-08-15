import ProductCard from "../components/ProductCard";
import img from "../../public/01.png"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ProductList(params) {
    return (
        <>
            <div className="flex-row-wrapper default-padding">
                <h1>Featured Products</h1>
                <div>
                    <button><FaArrowLeft /></button>
                    <button><FaArrowRight /></button>
                </div>
            </div>
            <div className="product_list default-padding">
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
        </>
    )
};
