import ProductCard from "./ProductCard";
import img from "../../../public/product.png"

export default function ItemGrid({ data, gridView }) {
    return (
        <div id="item_grid_list" className={gridView ? "" : " grid_column" }>
            {
                data.map(item => <ProductCard
                                    key={item.id}
                                    category={item.category}
                                    name={item.name}
                                    price={item.price}
                                    discount={item.discount}
                                    imgSrc={img}
                                    bundle={!gridView}
                                    />)
            }
        </div>
    )
};
