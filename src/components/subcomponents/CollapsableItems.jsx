import { useState } from "react"
import { FaArrowDown } from "react-icons/fa";

export default function CollapsableItems({ categories }) {

    return (
        <>
            {
                categories.map(category => <CollapsableItem category={category} />)
            }
        </>
    )
};

function CollapsableItem({ category }) {
    const [opened, setOpened] = useState(false)

    function handleChange(e) {
        setOpened(e.target.checked)
    }

    console.log(opened);
    return (
        <div className={`filter_list ${opened ? "open" : ""}`}>
            <label>
                { category.name }
                <input type="checkbox" onChange={handleChange} />
                <FaArrowDown />
            </label>
            <ul>
                {category.subcategories.map(subcategory => <li>{ subcategory.name }</li>)}
            </ul>
        </div>
    )
}