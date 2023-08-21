import { useEffect, useState } from 'react'
import { electronics, categories } from '../data.json'
import HeadController from '../components/subcomponents/HeadController'
import ItemGrid from '../components/subcomponents/ItemGrid'
import FilterAside from '../components/FilterAside'
import { useLocation } from 'react-router-dom'

function Shop() {
    const location = useLocation();
    const [current, setCurrent] = useState(0);
    const [gridView, setGridView] = useState(0);
    const { category, subcategory } = location.state;
    const [data, setData] = useState([]);

    useEffect(() => {
        if(category == "undefined") {
            setData([...electronics]);
        } else {
            setData([...filterItems(current)])
        }
        setCurrent(category || 0);
    }, [category])
    
    useEffect(() => {
        setData([...filterItems(current)])
    }, [current])

    return (
        <main id="shop_page" className='default-padding'>
            <FilterAside
                categories={categories}
                current={current}
                setCurrent={setCurrent}
            />
            <section id="product_grid">
                <HeadController
                    setGridView={setGridView} />
                <ItemGrid
                    data={data}
                    gridView={gridView == 0}
                />
            </section>
        </main>
    )
};


function filterItems( currentId ) {
    if(currentId == 0) {
        return electronics
    }
    let selectedCategory = categories.find(category => category.id == currentId).name;
    return electronics.filter(item => item.category == selectedCategory)
}

export default Shop