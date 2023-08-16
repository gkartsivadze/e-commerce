import CategoryCard from "./subcomponents/CategoryCard";

import tvImage from "../../public/tv.png"

export default function CategorySection() {
    return (
        <section className="category_section">
            <CategoryCard name="TV & Audio" img={tvImage} />
        </section>
    )
};
