import * as React from 'react'; import {
    useState
} from 'react'; import './SideMenu.css';
import {
    FaBars, FaFolderOpen, FaHouseChimney, FaAddressCard, FaGithub, FaGraduationCap, FaChartColumn, FaLinkedin, FaPersonHiking,
    FaLaptopCode
} from "react-icons/fa6";

import shelfI from "../../images/shelfE.png";
import beam from "../../images/woodBeam2.png";
const SideMenu = (props) => {

    const [icon, setIcon] = useState("sideIcon");
    //Remove titles from icons when minimising 
    const [iconHead, setIconHead] = useState("sideTitle");
    const [sectionTitle, setSectionTitle] = useState(); //Minimise the navigation
    const [style, setStyle] = useState("navStyleExpand");
    const [plant, setPlant] = useState("plant")
    const doNothing = () => {
        return;
    }
    const changeMenuStyle = () => {
        if (style == "navStyleExpand") {
            setPlant("");
            setStyle("navStyleMin")
            setIconHead("displayNone");
            setIcon("sideIconMin")
            props.setBodyWidth("bodyMin")
            setSectionTitle("displayNone")
            
        }
        else {
            setStyle("navStyleExpand")
            setIconHead("sideTitle");
            setIcon("sideIcon")
            props.setBodyWidth("bodyExpand")
            setSectionTitle("")
            setPlant("plant")
        }
    }
    var aboutCurrentlyVisible = props.introVisible ? "highlightedNavComp" : "";
    var skillsCurrentlyVisible = props.skillsVisible ? "highlightedNavComp" : "";
    var landCurrentlyVisible = props.landVisible ? "highlightedNavComp" : "";

    
    return (
        <nav id="navID" className={style + " " + plant}>
            <img className='beam1 beam' src={beam}>
            </img>
            {/* <img className='beam2 beam' src={beam}>
            </img>
            <img className='beam3 beam' src={beam}>
            </img>
            <img className='beam4 beam' src={beam}>
            </img> */}
            {SideNav("Minimise", <FaBars></FaBars>, changeMenuStyle, iconHead, icon, '')}
            <h5 className={sectionTitle+ " sideNavTitle"}><strong>Sections:</strong> </h5>
            {SideNav("Home", <FaHouseChimney></FaHouseChimney>, doNothing, iconHead, icon, landCurrentlyVisible)}
            {SideNav("About", <FaPersonHiking></FaPersonHiking>, doNothing, iconHead, icon, aboutCurrentlyVisible, "#introPage")}
            {SideNav("Skills", <FaChartColumn></FaChartColumn>, doNothing, iconHead, icon, skillsCurrentlyVisible, "#skillsPage")}
            {SideNav("Portfolio", <FaFolderOpen></FaFolderOpen>, doNothing, iconHead, icon, '')}
            {SideNav("Education", <FaGraduationCap></FaGraduationCap>, doNothing, iconHead, icon, '')}
            {SideNav("Work & Volunteering", <FaLaptopCode></FaLaptopCode>, doNothing, iconHead, icon, '')}
            {SideNav("Contact Information", <FaAddressCard></FaAddressCard>, doNothing, iconHead, icon, '')}

            <h5 className={sectionTitle+ " sideNavTitle"}> <strong>External links:</strong></h5>
            {SideNav("Linkedin", <FaLinkedin></FaLinkedin>, doNothing, iconHead, icon, '')}
            {SideNav("Github", <FaGithub></FaGithub>, doNothing, iconHead, icon, '')}
        </nav>
        )
}

const SideNav = (title, icon, action, iconHead, iconMin, isVisible, location) => {
    return(
        <div>
        <a href={location}>
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
        <div className='shelfDiv'>
        <img src={shelfI}></img>
        </div>
        </div>
    )
}
export default SideMenu;