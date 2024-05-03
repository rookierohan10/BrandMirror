import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {useNavigate} from "react-router-dom";
import {ScrollToTop} from "../components/ScrollToTop";

export const Home = () => {

    //Navigator
    let navi = useNavigate();

    return (
        <>
            <ScrollToTop/>
            {/*  Header  */}
            <Navbar/>
            {/*  Header End  */}
            {/*  Body  */}
            <div className="home" id="home">
                {/*  Hero  */}
                <section className="hero" id="hero">
                    <div className="hero-container">
                        <div className="hero-left">
                            <span className="header">Get Ahead</span>
                            <span className="tag"> of your competition with BrandMirror: Unveiling Your <span className="gradient-text cali">Brand's Digital Reflection</span> for Strategic Growth and Informed Decision-Making.</span>
                        </div>
                        <div className="hero-right">
                            <button type="button" onClick={() => {
                                navi("/join")
                            }}>Get Started
                            </button>
                        </div>
                    </div>
                </section>
                {/*  Hero End  */}
                {/*  About  */}
                <section className="about" id="about">
                    <div className="about-container">
                        <div className="header">
                            <span className="gradient-text">About</span>
                            <span className="gradient-hover cali">Who are we?</span>
                        </div>
                        <div className="about-grid">
                            <span className="about-item text">We, the founders of BrandMirror, are <span className="cali gradient-text">three friends</span> driven by a shared passion to revolutionize brand analysis. United in our dedication, we bring diverse skills to empower brands with advanced web scraping and NLP technologies.</span>
                            <div className="about-item img">
                                <img src="images/BM_ab1.webp" alt="Hello!"/>
                            </div>
                            <span className="about-item text">BrandMirror? It all started in an NLP lecture. One founder - tech news - web scraping. Boom! Idea: let's decode <span className="cali gradient-text">brands' digital vibes</span>. And just like that, BrandMirror was born – where NLP and web scraping make brand magic happen! </span>
                            <div className="about-item img">
                                <img src="images/BM_ab2.jpg" alt="How are you doing?"/>
                            </div>
                            <span className="about-item text">Our mission? To provide an <span className="cali gradient-text">affordable alternative</span>, steering clear of expensive software, utilizing the prowess of NLP and web scraping to make brand analysis seamless.</span>
                        </div>
                    </div>
                </section>
                {/*  About End  */}
                {/*  Services  */}
                <section className="services" id="services">
                    <div className="services-container">
                        <div className="header">
                            <span className="gradient-text">Services</span>
                            <span className="gradient-hover cali">What do we do?</span>
                        </div>
                        <div className="services-flex">
                            <div className="service-item">
                                <div className="item-img">
                                    <img src="/images/bm_sr_ws.png" alt="Web Scraping"/>
                                </div>
                                <div className="item-content">
                                    <span className="content-head">Web Scraping</span>
                                    <span className="content-det">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi earum esse exercitationem laborum mollitia nemo quae vero. Id, modi?</span>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="item-img">
                                    <img src="/images/bm_sr_sa.png" alt="Sentiment Analysis"/>
                                </div>
                                <div className="item-content">
                                    <span className="content-head">Sentiment Analysis</span>
                                    <span className="content-det">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi earum esse exercitationem laborum mollitia nemo quae vero. Id, modi?</span>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="item-img">
                                    <img src="/images/bm_sr_vs.png" alt="Visualization"/>
                                </div>
                                <div className="item-content">
                                    <span className="content-head">Visualization</span>
                                    <span className="content-det">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi earum esse exercitationem laborum mollitia nemo quae vero. Id, modi?</span>
                                </div>
                            </div>
                            <div className="service-item">
                                <div className="item-img">
                                    <img src="/images/bm_sr_db.png" alt="Result Storage"/>
                                </div>
                                <div className="item-content">
                                    <span className="content-head">Result Storage</span>
                                    <span className="content-det">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi earum esse exercitationem laborum mollitia nemo quae vero. Id, modi?</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Services End  */}
                {/*  Team  */}
                <section className="team" id="team">
                    <div className="team-container">
                        <div className="header">
                            <span className="gradient-text">Our Team</span>
                            <span className="gradient-hover cali">Meet the Team</span>
                        </div>
                        <div className="team-flex">
                            <div className="team-item"></div>
                        </div>
                    </div>
                </section>
                {/*  Team End  */}
            </div>
            {/*  Body End  */}
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}