export default function HeadController({ items, itemsOf }) {
    return (
        <div className="flex-row-wrapper">
            <h1>Shop</h1>
            <p>Showing {items} of {itemsOf}</p>
        </div>
    )
};
