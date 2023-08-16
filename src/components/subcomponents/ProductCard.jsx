import { FaHeart, FaRandom, FaShopify } from "react-icons/fa"
import { Link } from "react-router-dom";

export default function ProductCard({ category, name, imgSrc, price, discount, bundle = false }) {
    return (
        <div className={`product_card${bundle ? " bundle" : ""}`}>
            <p>{ category }</p>
            <Link>{ name }</Link>
            <img src={imgSrc} />
            <div className="price_buttons">
                {discount != 0 && <span style={{color: "red"}}>${ discount * (100 - discount) / 100 }</span>}
                <span style={discount != 0 ? {textDecoration: "line-through", fontSize: "0.75rem"} : {}}>${ price }</span>
                <div>
                    <button className="icon_button"><FaRandom /></button>
                    <button className="icon_button"><FaHeart /></button>
                    <button className="icon_button"><FaShopify /></button>
                </div>
            </div>
        </div>
    )
};
