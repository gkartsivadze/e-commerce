import React, { useState } from 'react'
import { categories } from '../data.json'
import HeadController from '../components/subcomponents/HeadController'

export default function Shop() {
    const [current, setCurrent] = useState(1)

    return (
        <main id="shop_page" className='default-padding'>
            <aside id="filter_panel">
                <div className='grid-column'>
                <h3>Categories</h3>
                    {categories.map(category =>
                        <React.Fragment key={category.id}>
                            <input
                                id={`category_controller_${category.id}`}
                                name="category"
                                type="radio"
                                defaultChecked={category.id == 1}
                                onClick={() => setCurrent(category.id)} />
                            <label
                                htmlFor={`category_controller_${category.id}`}
                            >
                                {category.name} ({category.subcategories.reduce((acc, subCategory) => {
                                    return acc +     subCategory.items.length
                                }, 0)})
                            </label>
                        </React.Fragment>)}
                </div>
                <ul>
                    {categories
                        .find(category => category.id == current)
                        .subcategories
                        .map(subCategory => <li key={subCategory.name} > {subCategory.name} </li>)}
                </ul>
            </aside>
            <section id="product_grid">
                <HeadController />
            </section>
        </main>
    )
};
