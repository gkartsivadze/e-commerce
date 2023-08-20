import React, { useEffect, useState } from 'react'
import { electronics, categories } from '../data.json'
import HeadController from '../components/subcomponents/HeadController'
import ItemGrid from '../components/subcomponents/ItemGrid'
import { useLocation } from 'react-router-dom'

export default function Shop() {
    const [current, setCurrent] = useState(0)
    const [data, setData] = useState([])
    const { category, subcategory } = useLocation().state
    console.log(category, subcategory)
    var filteredProduct = [];

    useEffect(() => {
        if(current == 0) {
            setData([...electronics])
        } else {
            let selectedCategory = categories.find(category => category.id == current).name;
            let tempFilter = electronics.filter(item => item.category == selectedCategory);
            setData([...tempFilter])
        }
    }, [current])

    return (
        <main id="shop_page" className='default-padding'>
            <aside id="filter_panel">
                <div className='grid-column'>
                <h3>Categories</h3>
                    <input id={`category_controller_0`}
                            name="category"
                            type="radio"
                            defaultChecked
                            onClick={() => setCurrent(0)
                            }/>
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
                                {category.name} ({category.subcategories.reduce((acc, subCategory) => {
                                    return acc +     subCategory.items.length
                                }, 0)})
                            </label>
                        </React.Fragment>)}
                </div>
                <ul>
                    {categories
                        .find(category => category.id == current || current == 0)
                        .subcategories
                        .map(subCategory => <li key={subCategory.name} > {subCategory.name} </li>)}
                </ul>
            </aside>
            <section id="product_grid">
                <HeadController />
                <ItemGrid data={data} />
            </section>
        </main>
    )
};
