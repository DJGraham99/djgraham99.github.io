import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import SideMenu from './components/SideMenu/SideMenu';
import LandingPage from './pages/LandingPage/LandingPage';
import IntroPage from './pages/IntroPage/IntroPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {

  function useIsVisible(ref){
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting));

      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      }
    }, [ref]);
    return isIntersecting;
  }

  const introRef = useRef();
  const skillsRef = useRef();
  const landRef = useRef();
  
  const introInView = useIsVisible(introRef);
  const skilsInView = useIsVisible(skillsRef);
  const landInView = useIsVisible(landRef);

  const [bodyWidth, setBodyWidth] = useState("bodyExpand");
  const [landVis, setLandVis] = useState("");
  const [mainVis, setMainVis] = useState("displayNone");

  function ScrollIntroView(){
    introRef.current.scrollIntoView();
  }

  function ScrollLandView(){
    landRef.current.scrollIntoView();
  } 





  return (
    <div className="App">
      <header>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      </header>
      <body id="reactBody" className={bodyWidth}>

      <SideMenu 
      setBodyWidth={setBodyWidth}
      setLandVis={setLandVis}
      introVisible={introInView ? true : false}
      skillsVisible={skilsInView ? true : false}
      landVisible={landInView ? true : false}>
      </SideMenu>

      <div id="landingPage" className={landVis + " allPages"}>
        <section ref={landRef}>
          {<LandingPage setMainVis={setMainVis} ScrollIntroView={ScrollIntroView} setLandVis={setLandVis}></LandingPage>}
        </section>
      </div>

      <div className={mainVis} id="masterDiv">
        <div className='allPages'>
          <section ref={introRef} id="introPage">
            <IntroPage setMainVis={setMainVis} ScrollLandView={ScrollLandView} setLandVis={setLandVis}></IntroPage>
          </section>
        </div>

        <div className='allPages'>
          <section ref={skillsRef} id='skillsPage'>
            {<SkillsPage></SkillsPage>}
          </section>
        </div>

      </div>

      </body>
    </div>
  );
}

export default App;
