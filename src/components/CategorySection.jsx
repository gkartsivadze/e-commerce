import CategoryCard from "./subcomponents/CategoryCard";

import tvImage from "../../public/tv.png"
import SectionHeader from "./subcomponents/SectionHeader";

export default function CategorySection() {
    return (
        <section id="category_section" className="default-padding">

        <SectionHeader header="Categories" />
        <section className="category_list">
            <CategoryCard name="TV & Audio" img={tvImage} />
            <CategoryCard name="TV & Audio" img={tvImage} />
            <CategoryCard name="TV & Audio" img={tvImage} />
            <CategoryCard name="TV & Audio" img={tvImage} />
            <CategoryCard name="TV & Audio" img={tvImage} />
            <CategoryCard name="TV & Audio" img={tvImage} />
            <CategoryCard name="TV & Audio" img={tvImage} />
            <CategoryCard name="TV & Audio" img={tvImage} />
        </section>
        </section>
    )
};
