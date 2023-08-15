import { FaDollarSign, FaFacebook, FaGlobe, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function NavigationTop(params) {
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
                    <div className="social_networks_wrapper">
                        <FaFacebook />
                        <FaInstagram />
                        <FaLinkedin />
                        <FaTwitter />
                        <FaYoutube />
                    </div>
                </div>
            </div>
    )
};
