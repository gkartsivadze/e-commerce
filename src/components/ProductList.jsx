import { useEffect, useRef } from "react";

import ProductCard from "./subcomponents/ProductCard";
import img from "../../public/01.png"
import SectionHeader from "./subcomponents/SectionHeader";

export default function ProductList({ header, products }) {
    const listRef = useRef();
    const listWrapperRef = useRef();

    function handleScroll() {
        let { current } = listRef;
        if(current.scrollLeft == 0 && current.scrollWidth > current.clientWidth) {
            listWrapperRef.current.style.setProperty("--right-width", "3rem")
        } else {
            listWrapperRef.current.style.setProperty("--right-width", "0rem")
        }
        if(current.scrollLeft > 0) {
            listWrapperRef.current.style.setProperty("--left-width", "3rem")
        } else {
            listWrapperRef.current.style.setProperty("--left-width", "0rem")
        }
    }

    useEffect(() => {
        handleScroll()
    }, [])
    
    return (
        <section className="product_list default-padding">
            <SectionHeader header={header} controllingItem={listRef} />
            <div ref={listWrapperRef} className="list-wrapper">
                <div ref={listRef} className="list-row" onScroll={handleScroll}>
                    { products?.map(item => <ProductCard key={item.id} name={item.name} category={item.category} imgSrc={img} price={item.price} discount={item.discount} />) }
                </div>
            </div>
        </section>
    )
};
