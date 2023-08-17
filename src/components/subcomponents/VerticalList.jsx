import ProductCard from "./ProductCard";

import img from "../../../public/product.png"
import SectionHeader from "./SectionHeader";

export default function VerticalList({ header, items }) {
    return (
        <div className="vertical-list">
            <SectionHeader header={header} />
                {
                    items.filter((product, ind) => ind < 3).map(item => 
                        <ProductCard
                            key={item.id}
                            name={item.name}
                            bundle={true}
                            price={item.price}
                            discount={item.discount}
                            imgSrc={img}
                        />)
                }
        </div>
    )
};
