import './WorkPage.css'
import { CollapsibleContentBox } from '../../components/CollapsibleContentBox/CollapsibleContentBox'
import { FadeInSection } from "../../components/fadeIn.js"
const WorkPage = (props) => {
    return (
        <div className={'insidePage ' + props.bodyWidth}>
             <div className='innerPage'>
            <FadeInSection>
                <br></br>
                {/* <h1 className='topOfPageTitleBlack'> Work & Volunteering </h1> */}
                <br></br>
                <h5> <strong> Current Employment </strong> </h5>
                <h6>For examples of work done and key deliverables in these jobs see my <a href='#portfolioPage'>
                    Portfolio. </a></h6>
                <br></br> 
                <div className='lloydsContainer'> 
                <div  className='lloydsHeader'>
                <h4> <strong>LLoyds Banking Group </strong> </h4>
                <h5> Graduate Software Engineering Program </h5>
                </div>
             
                
                <CollapsibleContentBox description="Full stack developer : May 2023 - Present" 
                secondaryDescription={"IP&I General Insurance"} defaultCollapsed={false}>
                            <br></br>
                            <h6> <strong> Responsibilities: </strong></h6>
                            <br></br>

                            <h6> <strong> API Uplift </strong></h6>
                            <ul>
                                <li> Refactor and upgrade legacy API's. Upgrade Node versions and reduce vulnerabilities
                                    by upgrading all dependencies. </li>
                                <li> Work with senior colleagues to produce architecture and designs that make future upgrades simpler and more efficient. </li>
                                <li> Utilise Jenkins, SonarQube, NexusIQ to evaluate code for code smells and vulnerabilities. </li>
                                <li> Ensure coding standards by improving test coverage and creating integration tests for APIs. </li>
                                <li> Test each API improvement using PostMan to hit all endpoints. </li>
                                <li> Give demos of work completed to wider GI team. </li>
                            </ul>

                            <br></br>
                            <h6> <strong> CWA Uplift </strong></h6>
                            <ul>
                                <li> Utilise internal frameworks to upgrade legacy applications to utilise shared modern practices. </li>
                                <li> Utilise internal design system to create brand relevant designs and components.
                                </li>
                                <li> Upgrade Node, WebPack and React versions. </li>
                                <li> Upgrade all dependencies to latest viable versions. </li>
                                <li> Utilise Jenkins, SonarQube, NexusIQ to evaluate code for code smells and vulnerabilities. </li>
                                <li> Ensure coding standards by improving test coverage and creating Selenium automation tests for APIs. </li>
                                <li> Give demos of work completed to wider GI team. </li>
                            </ul>
                            <br></br>
                            <h6> <strong> Miscellaneous </strong></h6>
                            <li> Create log monitoring dashboards using Dynatrace. Use this data to create thresholds and alerts that notify when there are irregularities.</li>
                            <li> Work between teams and utilise variables to create dynamic email templates. </li>
                            <li> Utilise JIRA to keep track of and maintain work tickets. </li>
                            <br></br>
                            {/* <div>
                                <p class="tagger tag"> Communication </p>
                                <p class="tagger tag"> Attention to detail </p>
                                <p class="tagger tag"> Cataloguing data </p>
                                <p class="tagger tag"> Teamwork </p>
                                <p class="tagger tag"> Time management </p>
                                <p class="tagger tag"> Trustworthiness </p>
                            </div> */}
                            {/* <br></br> */}

      </CollapsibleContentBox>
      <br></br>
      <CollapsibleContentBox description="Quality Engineer: September 2022 - May 2023" 
                secondaryDescription={"Credit Worthiness"} defaultCollapsed={true}>
                            <br></br>
                            <h6> <strong> Responsibilities: </strong></h6>
                            <br></br>

                            <h6> <strong> Application Automation </strong></h6>
                            <ul>
                                <li> Implement Cypress framework into team, designing and trialing different implementations for wider adoption. </li>
                                <li> Design and implement complex automation scripts. </li>
                                <li> Ensure testing standards, using a multitude of devices and settings. </li>
                                <li> Work between teams to setup test data and prepare colleagues for changes. </li>
                                <li> Deploy feature/deployment branches into testing environments using UCD. </li>
                                <li> Identification, isolation and recording of any bugs or issues. </li>
                        
                            </ul>
                            <br></br>
                            <h6> <strong> Miscellaneous </strong></h6>
                            <ul>
                            <li> Attend weekly QE meetups to discuss standards and potential improvements. </li>
                                <li> Assist preparing and documenting releases and EOTRs. </li>
                                <li> Monitor user clicks and data using Adobe Analytics, looking for potential issues after releases. </li>
                            </ul>
<br></br>
                            <h6> <strong> Key deliverables: </strong></h6>
                            <ul>
                            <li> Designed and implemented a web application to monitor test data using JavaScript and Cypress. This could be used by
                                QEs and developers in all teams to monitor the status of test data.
                            </li>
                                <li> Designed and implemented an API mocking system for both automation and manual testing. </li>
                                <li> Involved in 7 successful releases. </li>
                            </ul>

      </CollapsibleContentBox>
      </div>

<br></br> <br></br>
                <h5> <strong> Previous Experience </strong> </h5>
                <br></br> <br></br>
                <CollapsibleContentBox description="Lab Assistant : 2021 - May 2022" 
                secondaryDescription={"Newcastle Hospitals NHS Foundation Trust"} defaultCollapsed={true}>
                    <br></br>
                            <h6><strong>Responsibilities: </strong></h6>
                            <ul>
                                <li> Preparation and recording of COVID-19 samples. </li>
                                <li> Utilise software to monitor the analysis of samples. </li>
                            </ul>

                            <div>
                                <p class="tagger tag"> Communication </p>
                                <p class="tagger tag"> Attention to detail </p>
                                <p class="tagger tag"> Cataloguing data </p>
                                <p class="tagger tag"> Teamwork </p>
                                <p class="tagger tag"> Time management </p>
                                <p class="tagger tag"> Trustworthiness </p>
                            </div>
                            <br></br>

      </CollapsibleContentBox>
<br></br>
      <CollapsibleContentBox description="Teaching Volunteer : 2018 - 2019" 
                secondaryDescription={"Nottingham Classics Out-and-about"} defaultCollapsed={true}>
                    <br></br>
                    <h6><strong>Responsibilities: </strong></h6>
                            <ul>
                                <li> Prepared lesson resources tailored to specific ages. </li>
                                <li> Carried out lessons to local primary school children about Latin and Ancient Rome. </li>
                            </ul>

                            <div>
                                <p class="tagger tag"> Communication </p>
                                <p class="tagger tag"> Creativity </p>
                                <p class="tagger tag"> Audience Design </p>
                            </div>

                            <br></br>

      </CollapsibleContentBox>

                <br></br>

                <CollapsibleContentBox description="School Volunteer : 2018 - 2019" 
                secondaryDescription={"Immigration Education Nottingham "} defaultCollapsed={true}>
                    <br></br>
                            <h6><strong>Responsibilities: </strong></h6>
                            <ul>
                                <li>Carried out presentations at secondary schools regarding topics surrounding immigration and diversity.</li>
                                <li>Prepared resources in order to engage with the audience.</li> </ul>

                            <div>
                                <p class="tagger tag"> Communication </p>
                                <p class="tagger tag"> Teamwork </p>
                                <p class="tagger tag"> Resource preparation </p>
                            </div>


                            <br></br>

      </CollapsibleContentBox>
<br></br>
      <CollapsibleContentBox description="Delivery Driver : 2017 - 2018 " 
                secondaryDescription={"Premier Takeaway, Morpeth Spice"} defaultCollapsed={true}>
                    <br></br>
                    <h6><strong>Responsibilities: </strong></h6>
                            <ul>
                                <li> Transported money and food between client and business. </li>
                                <li> Communicate information between customers, front of house and kitchen workers. </li>
                                <li> Resolve any issues customers may have. </li>
                                <li> Calculate wages at the end of each night. </li>
                            </ul>

                            <div>
                                <p class="tagger tag"> Attention to detail </p>
                                <p class="tagger tag"> Trustworthiness </p>
                                <p class="tagger tag"> Communication </p>
                                <p class="tagger tag"> Time management </p>
                                <p class="tagger tag"> Mathematical aptitude </p>
                            </div>

                            <br></br>

      </CollapsibleContentBox>
      <br></br>
      <CollapsibleContentBox description="Volunteer Archaeologist : May - June 2017" 
                secondaryDescription={"Cameron Archaeology "} defaultCollapsed={true}>
                    <br></br>
                    <h6><strong>Responsibilities: </strong></h6>
                            <ul>
                                <li> Mapped archaeological excavation sites. </li>
                                <li> Processed archaeological finds ensuring all details are recorded. </li>
                            </ul>
                            <div>
                                <p class="tagger tag"> Attention to detail </p>
                                <p class="tagger tag"> Teamwork </p>
                                <p class="tagger tag"> Cataloguing data </p>
                            </div>

                            <br></br>

      </CollapsibleContentBox>
                <br></br>
            </FadeInSection>
</div>
        </div>
    )
}
export default WorkPage;