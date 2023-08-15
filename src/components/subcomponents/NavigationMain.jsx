import { FaBars, FaHeart, FaRandom, FaShopify, FaUser } from "react-icons/fa";
import logoImg from "../../../public/logo.svg"
import CustomInput from "../CustomInput";
import { Link } from "react-router-dom";

export default function NavigationMain() {
    return (
        <div className="navigation_main">
            <div>
                <button><FaBars /></button>
                <img src={logoImg} />
            </div>
            <CustomInput type="search" />
            <div className="flex-row-wrapper">
                <FaUser />
                <FaRandom />
                <FaHeart />
                <Link to="/">
                    <FaShopify />
                    $0.00
                </Link>
            </div>
        </div>
    )
};
