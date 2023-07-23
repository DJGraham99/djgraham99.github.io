import './LandingPage.css'
import { FaAngleDown } from 'react-icons/fa6'
import { BsArrowDownSquare } from "react-icons/bs";

const LandingPage = (props) => {


    function useChangeMenuStyle() {
        props.setMainVis("");
        setTimeout(() => {
            props.ScrollIntroView();
        }, 100);
        setTimeout(() => {
            props.setLandVis("displayNone")
        }, 900);
    }

    const getSkill = (skill) => {
        return (
            <p className='tagger'> {skill} </p>
        )
    }


    return (
        <div id='landingPage' className='allPages'>

            <div className='container'>
                <div className='row' id='topTitles'>
                    <div className='col-6' id='titleDiv'>


                        <h1><strong>Dylan Graham</strong> </h1>
                        <h2> CV & Portfolio </h2>

                    </div>
                    <div className='col-6 flexEnd'>
                        <img id="lloydsLogo" src={require("../../images/LloydsLogo.png")} alt="Lloyds Logo"></img>
                    </div>
                </div>
                {/* <div className='row' id="picRow">

                    <div className='col-12'>
                        <div id='profilePic'>
                            <img id="mannImage" src={require("../../images/mePng.png")} alt="Picture of page owner"></img>
                        </div>
                    </div>
                </div> */}


                <div className='row'>
                    <div className='col-12' id='aboutInfoRow'>
                        <p id='aboutInfo'>
                            Welcome to my portfolio and CV. I use this page to document my work and personal projects alongside an updated CV. Please feel free to look around and get in
                            contact if you have any queries!
                            <br></br>
                        </p>

                    </div>
                </div>

            </div>

            <div className='bottomOfPage' onClick={useChangeMenuStyle} >
                <h2 id='exploreText'> Explore</h2>
                <h2 className='pageArrows'> <BsArrowDownSquare></BsArrowDownSquare></h2>
            </div>

        </div>
    )

}
export default LandingPage;