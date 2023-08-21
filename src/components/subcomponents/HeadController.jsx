import { BsGrid } from "react-icons/bs"
import { LuLayoutList } from "react-icons/lu"

export default function HeadController({ items, itemsOf, setGridView }) {
    return (
        <div>
            <div className="flex-row-wrapper">
                <h1>Shop</h1>
                <p>Showing {items} of {itemsOf}</p>
            </div>
            <div className="grid_view_controller" onChange={(e) => setGridView(e.target.value)}>
                <input
                    id="shop_view_grid"
                    type="radio"
                    name="shop_view"
                    value={0}
                    defaultChecked
                />
                <label htmlFor="shop_view_grid"><BsGrid /></label>
                <input
                    id="shop_view_list"
                    type="radio"
                    name="shop_view"
                    value={1}
                />
                <label htmlFor="shop_view_list"><LuLayoutList /></label>
            </div>
        </div>
    )
};
