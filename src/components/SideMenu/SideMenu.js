import * as React from 'react';
import {
    useState, useEffect
} from 'react'; import './SideMenu.css';
import { IoPersonSharp } from "react-icons/io5";
import {
    FaBars, FaHeadset, FaFire, FaAddressCard, FaGithub, FaGraduationCap, FaHouseChimney, FaLinkedin, FaPersonHiking,
    FaLaptopCode
} from "react-icons/fa6";

const SideMenu = (props) => {

    const [icon, setIcon] = useState("sideIcon");
    const [navVis, setNavVis] = useState("noNav");
    //Remove titles from icons when minimising 
    const [iconHead, setIconHead] = useState("sideTitle");
    const [sectionTitle, setSectionTitle] = useState(); //Minimise the navigation
    const [style, setStyle] = useState("navStyleExpand");
    const expandTitle = (style == "navStyleExpand") ? "Minimise" : "Expand"
    // const [navVis, setNavVis] = useState("");
    const doNothing = () => {
        return;
    }
    const changeMenuStyle = () => {
        if (style == "navStyleExpand") {
            setStyle("navStyleMin")
            setIconHead("displayNone");
            setIcon("sideIconMin")
            props.setBodyWidth("bodyMin")
            setSectionTitle("displayNone")
            const shelf = document.getElementsByClassName("shelf");
            for (var i = 0; i < shelf.length; i++) {
                shelf[i].classList.add("shelfVis")
            }
            setTimeout(function() {
                // Your code to be executed after 200ms goes here
                setStyle("navStyleMin navStyleMinHiddenLabel");
            }, 300); 

        }
        else {
            setStyle("navStyleExpand")
            setIconHead("sideTitle");
            setIcon("sideIcon")
            props.setBodyWidth("bodyExpand")
            setSectionTitle("")
            const shelf = document.getElementsByClassName("shelf");
            for (var i = 0; i < shelf.length; i++) {
                shelf[i].classList.remove("shelfVis")
            }

        }
    }
    var aboutCurrentlyVisible = props.introVisible ? "highlightedNavComp" : "";
    var skillsCurrentlyVisible = props.skillsVisible ? "highlightedNavComp" : "";
    var landCurrentlyVisible = props.landVisible ? "highlightedNavComp" : "";
    var portfolioCurrentlyVisible = props.portfolioVisible ? "highlightedNavComp" : "";
    var educationCurrentlyVisible = props.educationVisible ? "highlightedNavComp" : "";
    var workCurrentlyVisible = props.workVisible ? "highlightedNavComp" : "";
    var contactCurrentlyVisible = props.contactVisible ? "highlightedNavComp" : "";

    return (
        <nav id="navID" className={(!props.landVisible ? style : navVis)}>
            <div className='insideNav'>
                {SideNav(expandTitle, <FaBars></FaBars>, changeMenuStyle, iconHead, icon, '',)}
                {/* <h5 className={sectionTitle + " sideNavTitle"}><strong></strong> </h5> */}
                <hr></hr>
                {SideNav("Home", <FaHouseChimney></FaHouseChimney>, doNothing, iconHead, icon, landCurrentlyVisible, '#landingPage')}
                {SideNav("About", <IoPersonSharp></IoPersonSharp>, doNothing, iconHead, icon, aboutCurrentlyVisible, "#introPage")}
                {/* {SideNav("Skills", <FaFire></FaFire>, doNothing, iconHead, icon, skillsCurrentlyVisible, "#skillsPage")} */}
                {SideNav("Portfolio", <FaLaptopCode></FaLaptopCode>, doNothing, iconHead, icon, portfolioCurrentlyVisible, '#portfolioPage')}
                {SideNav("Education", <FaGraduationCap></FaGraduationCap>, doNothing, iconHead, icon, educationCurrentlyVisible, '#educationPage')}
                {SideNav("Work & Volunteering", <FaHeadset></FaHeadset>, doNothing, iconHead, icon, workCurrentlyVisible, '#workPage')}
                {SideNav("Contact Information", <FaAddressCard></FaAddressCard>, doNothing, iconHead, icon, contactCurrentlyVisible, "#contactPage",)}
                <hr></hr>
                {SideNav("Linkedin", <FaLinkedin></FaLinkedin>, doNothing, iconHead, icon, '')}
                {SideNav("Github", <FaGithub></FaGithub>, doNothing, iconHead, icon, '')}
            </div>
        </nav>
    )
}

const SideNav = (title, icon, action, iconHead, iconMin, isVisible, location) => {

    return (
        <div id='sideNavContainer'>
            <a href={location} className='sideNavLink'>
                <div className='hiddenLabel'>
                    <h5> {title}  </h5>
                </div>
                <li onClick={action} id='expander' className={isVisible + " hoverID hoverIcon"}>
                    <div className='divdiv'>
                        <h5 className={iconMin + " titleID"}> {icon}</h5>
                        <h5 className={iconHead + " titleID"}>{title}</h5>
                    </div>
                    <div className='sectionLabel'>
                        <h5>{action}</h5>
                    </div>
                </li>
            </a>
        </div>
    )
}
export default SideMenu;