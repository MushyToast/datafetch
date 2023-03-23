import icon from './icon3.png';

function donenoti(name, desc) {
    return (
        <div className="cont">
            <div class="onsameline">
                <img src={icon} className="logo" alt="logo" />
                <div class="maincont">
                    {name}
                </div>
            </div>
            <p class="subcont">
                {desc}
            </p>
        </div>
    )
}

export default donenoti;