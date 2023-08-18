import { FaArrowRight } from "react-icons/fa";

export default function CategoryCard({ category }) {
    return (
        <div className="category_card">
            <h3>{ category.name }</h3>
            <img src={category.img} alt={category.name} />
            <button className="icon_button"><FaArrowRight /></button>
        </div>
    )
};
