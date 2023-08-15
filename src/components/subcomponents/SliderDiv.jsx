export default function SliderDiv({ header, imgSrc }) {
    return (
        <div>
            <div>
                <h1>{ header }</h1>
                <button>Find Out More</button>
            </div>
            <img src={ imgSrc } alt={ header } />
        </div>
    )
};
