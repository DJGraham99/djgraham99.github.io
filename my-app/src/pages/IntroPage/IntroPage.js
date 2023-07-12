import './IntroPage.css';
import { FaAngleUp } from 'react-icons/fa6';


const IntroPage = (props) => {

    function useChangeMenuStyle(){
        window.scrollTo(0,1);
        setTimeout(()=>{
            props.setLandVis("")
        }, 100);
        setTimeout(()=>{
            props.ScrollLandView();
        }, 200);
        setTimeout(()=>{
            props.setMainVis("displayNone");
        }, 800);
    }


    return (
        <div>
            <h2 onClick={useChangeMenuStyle} className='topOfPage pageArrows'> <FaAngleUp></FaAngleUp></h2>
            <h1 className='topOfPageTitle'> About Section Header </h1>
            <br></br> <br></br>
            <p>Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum 
            Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum 
            </p>
        </div>
    )
}
export default IntroPage;