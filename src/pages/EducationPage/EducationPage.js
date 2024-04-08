import './EducationPage.css'
import { CollapsibleContentBox } from '../../components/CollapsibleContentBox/CollapsibleContentBox'
import { FadeInSection } from "../../components/fadeIn.js"
const EducationPage = (props) => {
    return (
        <div className={'insidePage ' + props.bodyWidth}>
            <div className='innerPage'>
                <br></br>
                <FadeInSection>
                    <br></br>
                    <CollapsibleContentBox description="Computer Science MSc : Distinction "
                        secondaryDescription={"Newcastle University : Sep 2020 - Oct 2021"} defaultCollapsed={false}>
                        <br></br>

                        <h6> <strong> Modules: </strong> </h6>
                        <ul>
                            <li>  Introduction to Software Development </li>
                            <li>   Software Development Techniques and Tools </li>
                            <li>  Professional skills and Portfolio  </li>
                            <li> Software Development Advanced Techniques </li>
                            <li>  Cybersecurity  </li>
                            <li>  Advanced Programming </li>
                            <li>  Database Systems  </li>
                            <li>  Web Technologies </li>
                            <li>  Software Engineering and Team Project </li>
                            <li> Computer Networks  </li>
                            <li> Human-Computer Interaction </li>
                            <li> Project and Dissertation for MSc Computer Science  </li>

                        </ul>


                        <h6> <strong> Thesis: </strong> Northumberland Rock Art Project </h6>
                        <p> Worked with a local client to create an online website that would allow users to search a
                            database filled with rock art data and display the data in a user-friendly manner.</p>

                        <div class="tagRow">

                            <li class="tagger tag"> Pair programming </li>
                            <li class="tagger tag"> Object-orientated </li>
                            <li class="tagger tag"> CSS </li>
                            <li class="tagger tag"> HTML </li>
                            <li class="tagger tag"> PHP </li>
                            <li class="tagger tag"> Java </li>
                            <li class="tagger tag"> JavaScript </li>
                            <li class="tagger tag"> Agile </li>
                            <li class="tagger tag"> Version control </li>
                            <li class="tagger tag"> Teamwork </li>
                            <li class="tagger tag"> Communication </li>
                            <li class="tagger tag"> Problem solving </li>
                            <li class="tagger tag"> Time management </li>

                        </div>


                        <br></br>

                    </CollapsibleContentBox>

                    <br></br>
                    <CollapsibleContentBox description="Geography and Archaeology BA: 2:1 Honours "
                        secondaryDescription={"University of Nottingham : Sep 2017 - Sep 2020"} defaultCollapsed={true}>
                        <br></br>

                        <h6><strong> Topics studied: </strong></h6>
                        <ul>
                            <li>Sustainability</li>
                            <li> Human impact on nature </li>
                            <li> Societal development </li>
                            <li> Statistics </li>
                        </ul>
                        <h6> <strong> Thesis: </strong> An Investigation into the Relationship Between Roadside Emissions and Avian
                            Populations </h6>
                        <p> Third-party data was used to analyse bird populations in relation to road networks. This was
                            done
                            by creating species-diversity graphs using logistic regression and geo-spatially mapping
                            populations using GIS.</p>
                        <div class="tagRow">
                            <p class="tagger tag"> R Programming </p>
                            <p class="tagger tag"> Mathematical aptitude </p>
                            <p class="tagger tag"> Creativity </p>
                            <p class="tagger tag"> Report writing </p>
                            <p class="tagger tag"> Social awareness </p>
                            <p class="tagger tag"> Time management </p>
                            <p class="tagger tag"> Problem solving </p>

                        </div>

                        <br></br>

                    </CollapsibleContentBox>
                    <br></br>

                    <CollapsibleContentBox description="A-levels and GCSEs" defaultCollapsed={true}>
                        <br></br>

                        <p> <strong>A-Levels: </strong> Mathematics, Biology, Geography </p>
                        <p> <strong> GCSEs: </strong> 11 A*-C including Mathematics and English </p>


                        <br></br>

                    </CollapsibleContentBox>

            <br></br>
        </FadeInSection>
            </div >
        </div >
    )
}
export default EducationPage;