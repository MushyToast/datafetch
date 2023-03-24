function pricingCard(title, price, description, timeunit, buylink, learnmorelink) {
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
            
            <span className="priceCardButtons">
                <a href={buylink}> {/*change to your own link */}
                    <button className="priceButton">
                        Buy Now
                    </button>
                </a>
                <a href={learnmorelink}> {/*change to your own link */}
                    <button className="learnMoreButton">
                        Learn More
                    </button>
                </a>
            </span>
        </div>
    )
}

export default pricingCard;