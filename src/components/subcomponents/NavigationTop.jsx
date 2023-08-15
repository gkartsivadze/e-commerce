import { FaCog, FaDollarSign, FaGlobe, FaLocationArrow, FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialMediaList from "./SocialMediaList";

export default function NavigationTop() {
    return (
        <div className="navigation_top">
                <div className="navigation_left">
                    <label className="input_wrapper">
                        <FaGlobe />
                        <select>
                            <option value="default">Language</option>
                        </select>
                    </label>
                    <label className="input_wrapper">
                        <FaDollarSign />
                        <select>
                            <option value="default">Currency</option>
                        </select>
                    </label>
                </div>
                <div className="navigation_right">
                    <div className="flex-row-wrapper">
                        <SocialMediaList />
                        <Link>
                            <FaLocationArrow /> Track order
                        </Link>
                        <Link>
                            <FaShoppingBasket /> Shop
                        </Link>
                        <Link>
                            <FaCog /> Settings
                        </Link>
                    </div>
                </div>
            </div>
    )
};
