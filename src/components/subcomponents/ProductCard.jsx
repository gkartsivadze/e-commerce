import { FaHeart, FaRandom, FaShopify, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom";

export default function ProductCard({ category, name, imgSrc, price, discount, bundle = false }) {
    return (
        <div className={`product_card${bundle ? " bundle" : ""}`}>
            { bundle || <p>{category}</p> }
            <Link>{name}</Link>
            <img src={imgSrc} />
            { bundle && <div className="item_stars" > <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> </div> }
            <div className="price_buttons">
                <div className="price_wrapper">
                { discount != 0 && <span style={{ color: "var(--danger-600)" }}>${(price * (100 - discount) / 100).toFixed(2)}</span> }
                <span style={discount != 0 ? { textDecoration: "line-through", fontSize: "0.75rem" } : {}}>${price}</span>
                </div>
                <div>
                    <button className="icon_button"><FaRandom /></button>
                    <button className="icon_button"><FaHeart /></button>
                    <button className="icon_button"><FaShopify /></button>
                </div>
            </div>
        </div>
    )
};
