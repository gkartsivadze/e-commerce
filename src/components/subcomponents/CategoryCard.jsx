import { FaArrowRight } from "react-icons/fa";

export default function CategoryCard({ name, img }) {
    return (
        <div>
            <h3>{ name }</h3>
            <img src={img} alt={name} />
            <button className="icon_button"><FaArrowRight /></button>
        </div>
    )
};
