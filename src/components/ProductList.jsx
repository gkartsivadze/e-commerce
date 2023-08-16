import { useRef } from "react";

import ProductCard from "./subcomponents/ProductCard";
import img from "../../public/01.png"
import SectionHeader from "./subcomponents/SectionHeader";

export default function ProductList({ header, products }) {
    const listRef = useRef();

    return (
        <section className="product_list default-padding">
            <SectionHeader header={header} controllingItem={listRef} />
            <div ref={listRef} className="list-row">
                { products?.map(item => <ProductCard key={item.id} name={item.name} category={item.category} imgSrc={img} price={item.price} discount={item.discount} />) }
            </div>
        </section>
    )
};
