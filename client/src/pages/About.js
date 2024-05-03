import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {ScrollToTop} from "../components/ScrollToTop";

export const About = () => {
    return (
        <>
            <ScrollToTop/>
            {/*  Navbar  */}
            <Navbar/>
            {/*  Navbar End  */}
            <div className="about-page" id="about">
                <div className="about-page-container">
                    <div className="header">
                        <span className="tag">About BrandMirror</span>
                        <span className="head">Unveiling <span className="cali gradient-text">Your Brand's Story</span> with Passion, Innovation, and a Touch of <span className="cali gradient-text">Web Scraping Magic!</span></span>
                        <div className="desc">
                            <span className="desc-item">BrandMirror simplifies brand analysis for startups and small businesses. We kick off the process with advanced web scraping technology, delving into diverse online sources like social media and news articles. This data is then seamlessly fed into our robust Natural Language Processing (NLP) algorithms, providing a comprehensive overview of your brand's online presence and sentiment.</span>
                            <span className="desc-item">Once the analysis is complete, the results are presented in an easy-to-understand format on your dashboard. Whether you're evaluating the success of a recent marketing campaign or tracking your brand's evolution over time, BrandMirror empowers you with actionable insights. The best part? No need for expensive software—our mission is to make brand analysis accessible to all, especially young and small startups.</span>
                        </div>
                    </div>
                    <div className="img-grid">
                        <div className="grid-item"><img src="images/bm_ab_gr_1.jpg" alt="Grid Image 1"/></div>
                        <div className="grid-item"><img src="images/bm_ab_gr_2.jpg" alt="Grid Image 2"/></div>
                        <div className="grid-item"><img src="images/bm_ab_gr_3.jpg" alt="Grid Image 3"/></div>
                        <div className="grid-item"><img src="images/bm_ab_gr_4.jpg" alt="Grid Image 4"/></div>
                    </div>
                    <div className="tag-line">
                        <span className="cali gradient-text">Get Ahead</span>
                    </div>
                </div>
            </div>
            {/*  Footer  */}
            <Footer/>
            {/*  Footer End  */}
        </>
    )
}