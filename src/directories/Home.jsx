import AdSection from "../components/AdSection";
import CategorySection from "../components/CategorySection";
import GuaranteeSection from "../components/GuaranteeSection";
import ImageSlider from "../components/ImageSlider";
import ProductList from "../components/ProductList";

import { electronics } from "../data.json"

export default function Home() {
     return (
        <>
            <ImageSlider />
            <GuaranteeSection />
            <ProductList header="Featured Products" products={electronics.filter(x => x.featured && x.discount == 0)} />
            <CategorySection />
            <ProductList header="Bestsellers" products={electronics.filter(x => x.bestseller && x.discount == 0)} />
            <AdSection />
            <ProductList header="Big Deals" products={electronics.filter(x => x.discount != 0)} />
        </>
     )
};
