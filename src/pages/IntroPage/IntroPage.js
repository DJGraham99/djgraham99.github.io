import './IntroPage.css';
import { FaAngleUp } from 'react-icons/fa6';
import windowPane from '../../images/windowPng.png';
import profile from '../../images/mePngCropped.png'


const IntroPage = (props) => {

    function useChangeMenuStyle(){
        window.scrollBy(0,1);
        setTimeout(()=>{
            props.setLandVis("")
        }, 200);
        setTimeout(()=>{
            props.ScrollLandView();
        }, 300);
        setTimeout(()=>{
            props.setMainVis("displayNone");
        }, 900);
    }


    return (
        <div>
            <div className='borderBottom'>

            </div>
            <h2 onClick={useChangeMenuStyle} className='topOfPage pageArrows'> <FaAngleUp></FaAngleUp></h2>
            <h1 className='topOfPageTitle'> About Me </h1>
            <br></br> <br></br>
            {/* <div className='window'>
                <div className='insideWindow'>
                </div>
            <img src={windowPane}>
            </img>
            </div> */}
            <div className='container'>
                <div className='row'>
                    <div className='col-8'>
                    </div>
                    <div className='col-4 profilePic'>
                        <img src={profile}></img>
                    </div>
                </div>
            </div>
            <p>Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum 
            Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum 
            </p>
        </div>
    )
}
export default IntroPage;