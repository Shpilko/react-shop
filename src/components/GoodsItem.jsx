function GoodsItem(props) {
    const {
        mainId: id,
        displayName: name,
        displayDescripton: description,
        price: { regularPrice: price },
        displayAssets = [],
        addToBasket = Function.prototype,
    } = props;

    const image = displayAssets[0]?.full_background;

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
            </div>
            <div className="card-action">
                <button
                    className="btn blue darken-4"
                    onClick={() =>
                        addToBasket({
                            id,
                            name,
                            price,
                        })
                    }
                >
                    Купить
                </button>
                <span className="right" style={{ fontSize: '1.8rem' }}>{price} руб.</span>
            </div>
        </div>
    );
}

export { GoodsItem };

