import { FaShopify } from "react-icons/fa"
import { Link } from "react-router-dom";

export default function ProductCard({ category, name, imgSrc, price, bundle = false }) {
    return (
        <div className={`product_card${bundle ? " bundle" : undefined}`}>
            <p>{ category }</p>
            <Link>{ name }</Link>
            <img src={imgSrc} />
            <div>
                <span>${ price }</span>
                <FaShopify />
            </div>
        </div>
    )
};
