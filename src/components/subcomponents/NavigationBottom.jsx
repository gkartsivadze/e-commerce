import { categories } from "../../data.json"

export default function NavigationBottom() {
    return (
        <div className="navigation_bottom">
            {
                categories.map(category => 
                    <select key={category.id}>
                        { category.subcategories.map(subCategory => <option key={ subCategory.name } > { subCategory.name } </option>) }
                    </select>)
            }
        </div>
    )
};
