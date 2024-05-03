import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="tag-item">
                        <span className="cali gradient-hover">Get Ahead</span>
                    </div>
                    <div className="links">
                        <div className="list">
                            <span className="header">Sitemap</span>
                            <ul>
                                <li><Link to={"/"}>Home</Link></li>
                                <li><Link to={"/about"}>About</Link></li>
                                <li><Link to={"/contact"}>Contact Us</Link></li>
                                <li><Link to={"/join"}>Join Now</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="logo">
                        <span>BrandMirror</span>
                    </div>
                    <div className="dev">
                        <span>Designed and Developed by <a href="https://www.linkedin.com/in/hemantduttahd/" rel="noreferrer" target="_blank">Hemant Dutta</a>&nbsp;<a href="https://github.com/HemantDutta" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"/></a></span>
                    </div>
                </div>
            </footer>
        </>
    )
}