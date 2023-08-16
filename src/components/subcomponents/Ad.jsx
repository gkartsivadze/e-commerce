export default function Ad({ header, highlight, img, style }) {
    return (
        <div className="ad_component" style={style}>
            <h1>{ header } <span>{ highlight }</span></h1>
            <img src={img} />
        </div>
    )
};
