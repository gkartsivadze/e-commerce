import AdSection from "../components/AdSection";
import CategorySection from "../components/CategorySection";
import GuaranteeSection from "../components/GuaranteeSection";
import ImageSlider from "../components/ImageSlider";
import ProductList from "../components/ProductList";

export default function Home() {
     return (
        <>
            <ImageSlider />
            <GuaranteeSection />
            <ProductList header="Featured Products" />
            <CategorySection />
            <ProductList header="Bestsellers" />
            <AdSection />
        </>
     )
};
