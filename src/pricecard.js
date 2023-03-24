function pricingCard(title, price, description, timeunit) {
    return (
        <div className="pricingcard">
            <h2 className="priceTitle">
                {title}
            </h2>
            <h1 className="price">
                {price}
                <p className="priceTimeUnit">
                    /{timeunit}
                </p>
            </h1>
            <p className="priceDescription">
                {description}
            </p>
            <button className="priceButton">
                Buy Now
            </button>
        </div>
    )
}

export default pricingCard;