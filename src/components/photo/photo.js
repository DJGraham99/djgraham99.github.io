import './photo.css';
import pin from '../../images/pin.png';
function Photo (img, text, id) {
    return (
        <div className='imgContainer' id={id}>
            <img className='pin' src={pin}></img>
            <img className='photoImg' src={img}></img>
            <div className='textContainer'>
                <p> {text} </p>
            </div>
        </div>
    )
}

export {Photo}