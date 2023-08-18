import AdSection from "../components/AdSection";
import BrandGrid from "../components/BrandGrid";
import CategorySection from "../components/CategorySection";
import GuaranteeSection from "../components/GuaranteeSection";
import ImageSlider from "../components/ImageSlider";
import ProductAllList from "../components/ProductAllList";
import ProductList from "../components/ProductList";

import { electronics, categories } from "../data.json"

export default function Home() {
     return (
        <main>
            <ImageSlider />
            <GuaranteeSection />
            <ProductList header="Featured Products" products={electronics.filter(x => x.featured && x.discount == 0)} />
            <CategorySection categories={categories} />
            <ProductList header="Bestsellers" products={electronics.filter(x => x.bestseller && x.discount == 0)} />
            <AdSection />
            <ProductList header="Big Deals" products={electronics.filter(x => x.discount != 0)} />
            <BrandGrid />
            <ProductAllList products={electronics} />
        </main>
     )
};
