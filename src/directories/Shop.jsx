import { categories } from '../data.json'

export default function Shop() {
    return (
    <main className='default-padding'>
        <aside>
            <ul>
                { categories.map(category => 
                    <li>
                        { category.name }
                        <ul>
                            { category.subcategories.map(subcategories => <li>{ subcategories.name }</li>) }
                        </ul>
                    </li>) }
            </ul>
        </aside>
        <section>

        </section>
    </main>
    )
};
