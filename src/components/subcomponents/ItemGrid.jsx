import ProductCard from "./ProductCard";
import img from "../../../public/product.png"

export default function ItemGrid({ data }) {
    return (
        <div id="item_grid_list">
            {data.map(item => <ProductCard
                                    key={item.id}
                                    category={item.category}
                                    name={item.name}
                                    price={item.price}
                                    discount={item.discount}
                                    imgSrc={img}
                                    />)}
        </div>
    )
};
