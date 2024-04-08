import './IntroPage.css';
import { FaAngleUp } from 'react-icons/fa6';
import catImg from '../../images/mellowleo.jpg';
import profile from '../../images/mePngCropped.png'
import { FadeInSection } from "../../components/fadeIn.js"
import { Photo } from "../../components/photo/photo.js"


const IntroPage = (props) => {

    function useChangeMenuStyle() {
        props.ScrollLandView();
    }


    return (
        <div className={'insidePage ' + props.bodyWidth}>
            <div className='borderTop'> </div>
            <h2 onClick={useChangeMenuStyle} className='topOfPage pageArrows'> <FaAngleUp></FaAngleUp></h2>
            <div id="picRow" className='row'>
                <div className='circleImg'>
                    <img src={profile}></img>
                </div>
            </div>
            <div className='innerPage'>
                <div className='restOfIntro'>
                    <FadeInSection>
                        <div className='container' id='introContainer'>
                            <div className='row'>
                                <div className='col-12 whoRow'>
                                    {/* <h5>
                                    <strong> Who am I? </strong>
                                </h5> */}
                                    <p>
                                        Dylan is currently on the Software Engineering Graduate Scheme at Lloyds Banking group.
                                        He has experience of working in multiple roles with a multitude of languages.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <h5>
                                        <strong>Experience Overview</strong>
                                    </h5>
                                    <p>
                                        Dylan has experience in front-end and back-end development. He has completed Node work centreing around
                                        uplifting legacy applications. Dylan also has experience in developing automation scripts using Cypress
                                        and Selenium.
                                    </p>

                                    <h5>
                                        <strong>Journey so far</strong>
                                    </h5>
                                    <p>
                                        Dylan completed his undergraduate degree in humanities and through this
                                        found enthusiasm for logic and coding. He then worked on this and
                                        acquired a Disctinction MSc in Computer Science from Newcastle University. He then
                                        managed to acquire a graduate role at Lloyds Banking Group.                                </p>

                                    <h5>
                                        <strong>Career aspirations</strong>
                                    </h5>
                                    <p>
                                        Dylan has enjoyed working with multiple teams and working across the entire
                                        software development cycle. As such he would like to continue to move into a
                                        fullstack role and build experience in this area.
                                    </p>

                                </div>
                                <div className='col-6' id='outsideWork'>
                                    <h5>
                                        <strong>Outside of work</strong>
                                    </h5>
                                    <br></br> <br></br>
                                    <div className='photoContainer'>
                                        {Photo(catImg, "Leo & Mellow", "catPic")}
                                    </div>
                                    <br></br>
                                    <br></br>

                                    <p>
                                        Outside of work Dylan loves the outdoors, weekends are full of hikes and trips
                                        to the sea. He has two cats called Leo & Mellow who are extremely spoiled.
                                    </p>


                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-6'>


                                </div>

                                <div className='col-6'>

                                    <br></br><br></br>



                                </div>
                            </div>

                        </div>

                    </FadeInSection >
                </div>
            </div >
        </div>
    )
}
export default IntroPage;