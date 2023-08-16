import { useRef } from "react";

import ProductCard from "./subcomponents/ProductCard";
import img from "../../public/01.png"
import SectionHeader from "./subcomponents/SectionHeader";

export default function ProductList({ header }) {
    const listRef = useRef();

    return (
        <section className="product_list default-padding">
            <SectionHeader header={header} controllingItem={listRef} />
            <div ref={listRef} className="list-row">
                <ProductCard
                    name="Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"
                    category={"Smartphones"}
                    imgSrc={img}
                    price={1000}
                />
                <ProductCard
                    name="Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"
                    category={"Smartphones"}
                    imgSrc={img}
                    price={1000}
                />
                <ProductCard
                    name="Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"
                    category={"Smartphones"}
                    imgSrc={img}
                    price={1000}
                />
                <ProductCard
                    name="Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"
                    category={"Smartphones"}
                    imgSrc={img}
                    price={1000}
                />
                <ProductCard
                    name="Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"
                    category={"Smartphones"}
                    imgSrc={img}
                    price={1000}
                />
                <ProductCard
                    name="Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"
                    category={"Smartphones"}
                    imgSrc={img}
                    price={1000}
                />
                <ProductCard
                    name="Apple iPhone 14 Pro, LTPO Super Retina XDR OLED 6.1"
                    category={"Smartphones"}
                    imgSrc={img}
                    price={1000}
                />
            </div>
        </section>
    )
};
