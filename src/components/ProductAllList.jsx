import VerticalList from "./subcomponents/VerticalList";

export default function ProductAllList({ products }) {
    return (
        <section id="all_products_section" className="default-padding">
            <VerticalList header="Top Rated" items={products.filter(product => product.discount == 0 && product.featured) } />
            <VerticalList header="Bestseller" items={products.filter(product => product.discount == 0 && product.bestseller) } />
            <VerticalList header="Mega Offers" items={products.filter(product => product.discount > 0) } />
        </section>
    )
};
