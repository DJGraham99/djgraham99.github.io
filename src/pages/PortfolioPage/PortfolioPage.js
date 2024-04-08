import './PortfolioPage.css'
import { FadeInSection } from "../../components/fadeIn.js"
const PortfolioPage = (props) => {
    return (
        <div className={'insidePage ' + props.bodyWidth}>
            <div className='innerPage'>
                <FadeInSection>
                   PORTFOLIO PAGE YIPPEE
                </FadeInSection>
            </div>
        </div>
    )
}
export default PortfolioPage;