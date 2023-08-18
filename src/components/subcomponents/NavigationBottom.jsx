import { useState } from "react"
import { categories } from "../../data.json"

export default function NavigationBottom() {
    const [current, setCurrent] = useState(1);
    const [open, setOpen] = useState(false);

    let i = categories.find(category => category.id == current);

    function handleCategoryButtonClick(id) {
        if(id == current && open) {
            setOpen(false)
        } else {
            setCurrent(id);
            setOpen(true)
        }
    }

    return (
        <>
        <div className="navigation_bottom">
            {
                categories.map(category => 
                    <button
                        key={category.id}
                        onClick={() => handleCategoryButtonClick(category.id)}
                        style={category.id == current && open ? {background: "rgba(0,0,0,0.2)"} : {}}
                        >
                        { category.name }
                    </button>)
            }
        </div>
        <div className={`sub_navigation ${open ? "open " : ""}default-padding`}>
            <h1>
                { i.name }
            </h1>
            <ul>
                { i.subcategories.map(subcategory => <li key={subcategory.name}>{ subcategory.name }</li>) }
            </ul>
            <img src={i.img} alt="" />
        </div>
        </>
    )
};
