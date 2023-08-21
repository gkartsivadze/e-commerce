import React from "react"

export default function FilterAside({ categories, current, setCurrent }) {
    
    return (
        <aside id="filter_panel">
            <div className='grid-column'>
                <h3>Categories</h3>
                <input id={`category_controller_0`}
                    name="category"
                    type="radio"
                    defaultChecked
                    onClick={() => setCurrent(0)
                    } />
                <label htmlFor="category_controller_0">All</label>
                {categories.map(category =>
                    <React.Fragment key={category.id}>
                        <input
                            id={`category_controller_${category.id}`}
                            name="category"
                            type="radio"
                            onClick={() => setCurrent(category.id)}
                        />
                        <label
                            htmlFor={`category_controller_${category.id}`}
                        >
                            {category.name} ({category
                                                .subcategories
                                                .reduce((acc, subCategory) => acc + subCategory.items.length, 0)})
                        </label>
                    </React.Fragment>)}
            </div>
            {current != 0 && <ul>
                {categories
                    .find(category => category.id == current || current == 0)
                    .subcategories
                    .map(subCategory => <li key={subCategory.name} > {subCategory.name} </li>)}
            </ul>}
        </aside>
    )
};
