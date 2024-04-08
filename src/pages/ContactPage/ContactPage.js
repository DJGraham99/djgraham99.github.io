import './ContactPage.css'
import { FadeInSection } from "../../components/fadeIn.js"
const ContactPage = (props) => {
    return (
        <div className={'insidePage ' + props.bodyWidth}>
            <div className='innerPage'>
                <FadeInSection>
                    <div class="contactInfoDiv container">
                        {/* <h4 className='contactTitle'> <i class="far fa-address-book"></i> Contact Information </h4> */}
                        
                        <div className='contactInfoColour'>
                            <p> Contact Number: <b> 07387382553 </b></p>
                            <p> Email Address: <b>dylanjosephgraham@gmail.com</b></p>

                            <form action="https://formspree.io/f/mbjqejdp" method="POST">
                                <label id="emailInput">
                                    <input type="email" name="_replyto" placeholder="Your Email Address" />
                                </label>
                                <br /> <br />
                                <label id="messageInput">
                                    <textarea name="message" placeholder="Your Message"></textarea>
                                </label>
                                <br />
                                <button type="submit" id="emailbtn"><strong>SEND</strong></button>
                            </form>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    )
}
export default ContactPage;