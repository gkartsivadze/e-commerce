import { FaBars } from "react-icons/fa";
import logoImg from "../../../public/logo.svg"
import CustomInput from "../CustomInput";

export default function NavigationMain() {
    return (
        <div className="navigation_main">
            <div>
                <button><FaBars /></button>
                <img src={logoImg} /> 
            </div>
            <CustomInput type="search" />
        </div>
    )
};
