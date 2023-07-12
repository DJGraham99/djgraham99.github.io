import './LandingPage.css'
import { FaAngleDown } from 'react-icons/fa6'

const LandingPage = (props) => {


    function useChangeMenuStyle() {
        props.setMainVis("");
        setTimeout(()=>{
            props.ScrollIntroView();
        }, 100);
        setTimeout(()=>{
            props.setLandVis("displayNone")
        }, 900);
    }


    return (
        <div id='landingPage' className='allPages'>
            <h1>Landing Page </h1>
            <h3> Testing saklhfadsklhldfljsadfhlkasdflkslkjdahf </h3>
            <h2 onClick={useChangeMenuStyle} className='bottomOfPage pageArrows'> <FaAngleDown></FaAngleDown></h2>
        </div>
    )

}
export default LandingPage;