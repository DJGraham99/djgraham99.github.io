import './PortfolioPage.css'
import CardComponent from '../../components/CardComponent/CardComponent.js'
import { FadeInSection } from "../../components/fadeIn.js"
import { useState } from 'react';
import lerna from '../../images/lerna.png'
import apiimage from '../../images/apiimage.png'
import LloydsHomeInsurance from '../../images/LloydsHomeInsurance.png'
import { CollapsibleContentBox } from '../../components/CollapsibleContentBox/CollapsibleContentBox.js';
import cypress from "../../images/cypress.png"
import webApp from "../../images/webApp.png"
import individualPanelPage from "../../images/individualPanelPage2.png"
import cavalloCheckout from "../../images/cavalloCheckout.JPG"
import UGCScreen from "../../images/UGCScreen.JPG"

const PortfolioPage = (props) => {
    return (
        <div className={'insidePage ' + props.bodyWidth}>
            <div className='innerPage'>
                <FadeInSection>
                    <br /> <br />
                    <CollapsibleContentBox description="Lloyds Banking Group Projects" defaultCollapsed={false} id={"lloydsCollap"}>
                        <br />
                        <div className='cardDiv'>
                            <div className='row'>
                                <div className='col-sm-12 col-md-4'>
                                    <CardComponent
                                        title="API Monorepository"
                                        subtitle="IP&I General Insurance"
                                        image={lerna}
                                        description="Design and implementation of a Lerna monorepository architecture for all GI APIs."
                                    />
                                </div>
                                <div className='col-sm-12 col-md-4'>
                                    <CardComponent
                                        title="Cypress architecture and automation scripts"
                                        subtitle="Credit Worthiness"
                                        image={cypress}
                                        description="Assisting the creation of Cypress architecture. Designing and implementing complex automation scripts."
                                    />
                                </div>
                                <div className='col-sm-12 col-md-4'>
                                    <CardComponent
                                        title="CWA Digital Uplift"
                                        subtitle="IP&I General Insurance"
                                        image={LloydsHomeInsurance}
                                        description="Upgrading of web applications within GI. Included React, WebPack, Node and internal framework upgrades."
                                    />
                                </div>
                                <div className='col-sm-12 col-md-4'>
                                    <CardComponent
                                        title="API Digital Uplift"
                                        subtitle="IP&I General Insurance"
                                        image={apiimage}
                                        description="Upgrading of each API. This involves upgrading dependencies, minimising vulnerabilties and testing capabilities."
                                    />
                                </div>

                                <div className='col-sm-12 col-md-4'>
                                    <CardComponent
                                        title="Test data web application"
                                        subtitle="Credit Worthiness"
                                        image={webApp}
                                        description="Design and implementation of a web application to track and search test data used by developers and QE."
                                    />
                                </div>
                            </div>
                        </div>
                        <br />
                    </CollapsibleContentBox>
                    <br></br> <br></br>
                    <CollapsibleContentBox description="University & Personal Projects" defaultCollapsed={false} id={"UniCollap"}>
                        <br />
                        <div className='row'>
                        <div className='col-sm-12 col-md-4'>
                            <CardComponent
                                title="Rock art web application and database"
                                subtitle="Computer Science MSc - Dissertation study"
                                image={individualPanelPage}
                                description="Design and implementation of a web application for a local client."
                            />
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <CardComponent
                                title="Cavallo online shop"
                                subtitle="Computer Science MSc - Best practices"
                                image={cavalloCheckout}
                                description="Work within an Agile team to produce an online web store."
                            />
                        </div>
                        <div className='col-sm-12 col-md-4'>
                            <CardComponent
                                title="University grade calculator"
                                subtitle="Personal Project"
                                image={UGCScreen}
                                description="Developed during University to keep track of my grades."
                            />
                        </div>
                        </div>
                        <br />
                    </CollapsibleContentBox>
                    <br /> <br />
                </FadeInSection>
            </div>
        </div >
    )
}



export default PortfolioPage;