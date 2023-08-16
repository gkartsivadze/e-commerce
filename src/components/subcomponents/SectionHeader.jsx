import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import useProductListNavigation from "../../hooks/useProductListNavigation";


export default function SectionHeader({ header, controllingItem }) {
    const handleNavigation = useProductListNavigation;

    return (
        <div className="page-controller flex-row-wrapper">
            <h1>{ header }</h1>
            {
                controllingItem
                &&
                <div onClick={handleNavigation}>
                    <button className="icon_button" onClick={() => handleNavigation("prev", controllingItem)}><FaArrowLeft /></button>
                    <button className="icon_button" onClick={() => handleNavigation("next", controllingItem)}><FaArrowRight /></button>
                </div>
            }
        </div>
    )
};
