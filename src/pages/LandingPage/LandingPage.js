import './LandingPage.css'
import { FaAngleDown, FaGit } from 'react-icons/fa6'
import { BsArrowDownSquare } from "react-icons/bs";
import { FadeInSection } from "../../components/fadeIn.js"
import mewithcat from '../../images/mewithcat.png'
import { IoPersonSharp } from "react-icons/io5";
import inProgress from "../../images/inProgress.png"
import {
    FaHeadset, FaFire, FaAddressCard, FaGithub, FaGraduationCap, FaChartColumn, FaLinkedin, FaPersonHiking,
    FaLaptopCode
} from "react-icons/fa6";
// const {FadeInSection} = require('../../components/fadeIn.js')

const LandingPage = (props) => {


    function useChangeMenuStyle() {
        props.ScrollIntroView();
        // setTimeout(() => {
        //     props.setLandVis("displayNone")
        // }, 1200);
    }

    return (
        <div className='allPages insidePage'>
            <div className='container landingContainer'>
                <img className='inProgress' src={inProgress}></img>
                <div className='row' id='topTitles'>
                    <div className='col-sm-12 col-md-6' id='titleDiv'>
                        <h1><strong>Dylan Graham</strong> </h1>
                        <h2> CV & Portfolio </h2>
                    </div>
                    <div className='col-sm-12 col-md-6 flexEnd'>
                        <img id="lloydsLogo" src={require("../../images/LloydsLogo.png")} alt="Lloyds Logo"></img>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12' id='aboutInfoRow'>
                        <p id='aboutInfo'>
                            Welcome to Dylan Graham's CV & Portfolio, please look around and dont hesitate to get in contact.
                            <br></br>
                        </p>

                    </div>
                </div>
                <div id="linkRow" className="row">
                    <div className='linkContainer col-6' >
                        <div className='row'>
                            <div className='linkContainer col-6' >
                                {LinkBox("About me", "#introPage", "one", <IoPersonSharp></IoPersonSharp>)}
                                {LinkBox("Skills", "#skillsPage", "two", <FaFire></FaFire>)}
                            </div>
                            <div className='linkContainer col-6'>
                                {LinkBox("Portfolio", "#portfolioPage", "three", <FaLaptopCode></FaLaptopCode>)}
                                {LinkBox("Work", "#workPage", "four", <FaHeadset></FaHeadset>)}
                            </div>
                        </div>
                    </div>
                 
                    <div className='col-6 linkContainer'>
                        <div className='row'>
                            <div className='col-6 linkContainer'>
                                {LinkBox("Education", "#educationPage", "five", <FaGraduationCap></FaGraduationCap>)}
                                {LinkBox("Contact me", "#contactPage", "six", <FaAddressCard></FaAddressCard>)}
                            </div>
                            <div className='col-6 linkContainer'>
                                {LinkBox("Github", "https://github.com/DJGraham99", "seven", <FaGithub></FaGithub>, true)}
                                {LinkBox("LinkedIn", "https://www.linkedin.com/in/dylan-graham-cs/", "eight", <FaLinkedin></FaLinkedin>, true)}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='col-4'></div>
                    <div className='col-4'>
                        <div className='bottomOfPage' onClick={useChangeMenuStyle} >
                            {/* <img id="catImg" src={mewithcat}></img> */}
                            <h4 id='exploreText'> Explore
                            </h4>
                        </div>
                        <div id="bottomBlock"></div>
                    </div>
                    <div className='col-4'></div>
                </div>

            </div>

        </div >
    )
}

const LinkBox = (title, linkTo, number, icon, newTab) => {
    return (
        <div className={'linkBox ' + number}>
            <a href={linkTo} target={newTab ? "_blank" : ""}>
                <div className='innerLink'>
                <h5 className='iconTitle'> {icon} </h5>
                    <h5 className='iconHeading'> {title} </h5>
                </div>
            </a>

        </div>
    )
}
export default LandingPage;