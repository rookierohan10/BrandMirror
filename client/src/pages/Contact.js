import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {ScrollToTop} from "../components/ScrollToTop";

export const Contact = () => {
    return (
        <>
            <ScrollToTop/>
            {/*  Navbar  */}
            <Navbar/>
            {/*  Navbar End  */}
            {/*  Body  */}
            <div className="contact" id="contact">
                <div className="contact-container">
                    <div className="contact-left">
                        <img src="images/bm_contact.png" alt="Just a cool background" className="cool-bg"/>
                        <div className="overlay"/>
                        <div className="text">
                            <span className="head">We're <span className="cali gradient-text">Always</span> here for you!</span>
                            <span className="tag">Don't be shy! If you want to ask us a question or just say something, drop us a message!</span>
                        </div>
                    </div>
                    <div className="contact-right">
                        <span className="right-head">Contact Us</span>
                        <form className="contact-form">
                            <div className="input-field">
                                <label htmlFor="name">Enter Name</label>
                                <input type="text" name="name" id="name" placeholder="e.g. Rick Sanchez"/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="email">Enter Email</label>
                                <input type="email" name="email" id="email" placeholder="e.g. rick@c137.com"/>
                            </div>
                            <div className="input-field">
                                <label htmlFor="message">Enter Message</label>
                                <textarea name="message" id="message" cols="100" rows="15"/>
                            </div>
                            <div className="btn-field">
                                <button className="click" type="button">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/*  Body End  */}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}