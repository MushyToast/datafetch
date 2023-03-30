function personCard(name, desc, img) {
  return (
    <div className="personCard">
        <img src={img} className="personCardImg" alt="person" />
        <h1 className="personName">
            {name}
        </h1>
        <p className="personDesc">
          {desc}
        </p>

    </div>
  )
}

export default personCard;