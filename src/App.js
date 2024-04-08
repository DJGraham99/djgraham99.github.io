import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import SideMenu from './components/SideMenu/SideMenu';
import LandingPage from './pages/LandingPage/LandingPage';
import IntroPage from './pages/IntroPage/IntroPage';
import SkillsPage from './pages/SkillsPage/SkillsPage';
import EducationPage from './pages/EducationPage/EducationPage';
import WorkPage from './pages/WorkPage/WorkPage';
import ContactPage from './pages/ContactPage/ContactPage';
import plantBackground from './images/plantBackground.jpg'
import { useState, useEffect, useRef, React } from 'react';
import { FadeInSection } from './components/fadeIn';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or any asynchronous operation
    setTimeout(() => {
      setLoading(false); // Hide the loading screen after some time (simulated delay)
    }, 300); // Simulated delay of 3 seconds
  }, []);

  function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIntersecting(entry.isIntersecting)
      }, { threshold: 0.05 });
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      }
    }, [ref]);
    return isIntersecting
  }

  const introRef = useRef();
  // const skillsRef = useRef();
  const landRef = useRef();
  const portfolioRef = useRef();
  const educationRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  const introInView = useIsVisible(introRef);
  // const skilsInView = useIsVisible(skillsRef);
  const landInView = useIsVisible(landRef);
  const portfolioInView = useIsVisible(portfolioRef);
  const educationInView = useIsVisible(educationRef);
  const workInView = useIsVisible(workRef);
  const contactInView = useIsVisible(contactRef);

  const [bodyWidth, setBodyWidth] = useState("bodyExpand");
  // const [bodyOverride, setBodyOverride] = useState("");
  // const [landVis, setLandVis] = useState("");
  // const [mainVis, setMainVis] = useState("");



  function ScrollIntroView() {
    introRef.current.scrollIntoView();
  }

  function ScrollLandView() {
    landRef.current.scrollIntoView();
  }

  // function ScrollSkillsView() {
  //   skillsRef.current.scrollIntoView();
  // }
  function ScrollEducationView() {
    educationRef.current.scrollIntoView();
  }

  function ScrollWorkView() {
    workRef.current.scrollIntoView();
  }

  function scrollContactView() {
    contactRef.current.scrollIntoView();
  }

  function LoadingScreen() {
    return (
      <div className="loading-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      {loading && <LoadingScreen />} {/* Render loading screen conditionally */}
      <div className={`content ${loading ? 'hidden' : ''}`}>
      <header>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
      </header>
      <body id="reactBody">

        <SideMenu
          setBodyWidth={setBodyWidth}
          // setLandVis={setLandVis}
          introVisible={introInView ? true : false}
          // skillsVisible={skilsInView ? true : false}
          landVisible={landInView ? true : false}
          portfolioVisible={portfolioInView ? true : false}
          educationVisible={educationInView ? true : false}
          workVisible={workInView ? true : false}
          contactVisible={contactInView ? true : false}
          ScrollIntroView={ScrollIntroView}
          // ScrollSkillsView={ScrollSkillsView}
          ScrollEducationView={ScrollEducationView}
          ScrollWorkView={ScrollWorkView}
          scrollContactView={scrollContactView}>
        </SideMenu>


        <div id="landingPage">
          <section ref={landRef}>
            {<LandingPage
              // setMainVis={setMainVis}
              ScrollIntroView={ScrollIntroView}
            // setLandVis={setLandVis}
            >
            </LandingPage>}
          </section>
        </div>

          <div id="masterDiv">
            <div className={'allPages'}>
              <section ref={introRef} id="introPage">
                <IntroPage
                bodyWidth={bodyWidth}
                  // setMainVis={setMainVis} 
                  ScrollLandView={ScrollLandView}
                // setLandVis={setLandVis}>
                >
                </IntroPage>
              </section>
            </div>
            
            {/* <div className={'allPages'}>
              <section ref={skillsRef} id='skillsPage'>
                {<SkillsPage
                  bodyWidth={bodyWidth}
                  >

                </SkillsPage>}
              </section>
            </div> */}
            <div className={'allPages'}>
              <section ref={portfolioRef} id='portfolioPage'>
                {<PortfolioPage
                  bodyWidth={bodyWidth}>
                </PortfolioPage>}
              </section>
            </div>
            <div className={'allPages'}>
              <section ref={educationRef} id='educationPage'>
                {<EducationPage
                  bodyWidth={bodyWidth}>
                </EducationPage>}
              </section>
            </div>
            <div className={'allPages'}>
              <section ref={workRef} id='workPage'>
                {<WorkPage
                  bodyWidth={bodyWidth}>
                </WorkPage>}
              </section>
            </div>
            <div className={'allPages'}>
              <section ref={contactRef} id='contactPage'>
                {<ContactPage
                  bodyWidth={bodyWidth}>
                </ContactPage>}
              </section>
            </div>

          </div>

      </body>
      </div>
    </div>
  );
}

export default App;
