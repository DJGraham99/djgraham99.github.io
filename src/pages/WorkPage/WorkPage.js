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
                <br></br> <br></br>

                <div className='container lloydsContainer'>
                    <div>
                        <h4 className='lloydsGreen'> <strong> Lloyds Banking Group </strong></h4>
                    </div>
                    <p> FDAHKASJDASDSK </p>
                </div>

<br></br> <br></br>
                <h5> <strong> Previous Experience </strong> </h5>
                <br></br> <br></br>
                <CollapsibleContentBox description="Lab Assistant : 2021 - May 2022" 
                secondaryDescription={"Newcastle Hospitals NHS Foundation Trust"} defaultCollapsed={false}>
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