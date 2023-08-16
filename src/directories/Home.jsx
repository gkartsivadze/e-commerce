import CategorySection from "../components/CategorySection";
import GuaranteeSection from "../components/GuaranteeSection";
import ImageSlider from "../components/ImageSlider";
import ProductList from "../components/ProductList";

export default function Home() {
     return (
        <>
            <ImageSlider />
            <GuaranteeSection />
            <ProductList />
            <CategorySection />
        </>
     )
};
