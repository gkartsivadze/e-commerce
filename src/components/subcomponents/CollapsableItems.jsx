import { useState } from "react"
import { FaArrowDown } from "react-icons/fa";

export default function CollapsableItems({ categories }) {

    return (
        <>
            {
                categories.map(category => <CollapsableItem key={category.id} category={category} />)
            }
        </>
    )
};

function CollapsableItem({ category }) {
    const [opened, setOpened] = useState(false)

    function handleChange(e) {
        setOpened(e.target.checked)
    }
    
    return (
        <div className={`filter_list ${opened ? "open" : ""}`}>
            <label>
                { category.name }
                <input type="checkbox" onChange={handleChange} />
                <FaArrowDown />
            </label>
            <ul>
                {category.subcategories.map((subcategory,ind) => <li key={ind}>{ subcategory.name }</li>)}
            </ul>
        </div>
    )
}