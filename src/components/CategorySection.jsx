import CategoryCard from "./subcomponents/CategoryCard";

import tvImage from "../../public/tv.png"
import SectionHeader from "./subcomponents/SectionHeader";

export default function CategorySection({ categories }) {
    return (
        <section id="category_section" className="default-padding">

        <SectionHeader header="Categories" />
        <section className="category_list">
            { categories.map(category => <CategoryCard key={category.id} name={category.name} img={tvImage} />) }
        </section>
        </section>
    )
};
