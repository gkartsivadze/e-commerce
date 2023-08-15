export default function SliderDiv({ header, imgSrc }) {
    return (
        <div className="sliding_item">
            <div>
                <h1>{ header }</h1>
                <button>Find Out More</button>
            </div>
            <img draggable={false} src={ imgSrc } alt={ header } />
        </div>
    )
};
