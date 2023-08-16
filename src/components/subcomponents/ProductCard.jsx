import { FaHeart, FaRandom, FaShopify } from "react-icons/fa"
import { Link } from "react-router-dom";

export default function ProductCard({ category, name, imgSrc, price, bundle = false }) {
    return (
        <div className={`product_card${bundle ? " bundle" : ""}`}>
            <p>{ category }</p>
            <Link>{ name }</Link>
            <img src={imgSrc} />
            <div className="price_buttons">
                <span>${ price }</span>
                <div>
                    <button className="icon_button"><FaRandom /></button>
                    <button className="icon_button"><FaHeart /></button>
                    <button className="icon_button"><FaShopify /></button>
                </div>
            </div>
        </div>
    )
};
