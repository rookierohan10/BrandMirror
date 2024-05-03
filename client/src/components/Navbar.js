import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";

export const Navbar = () => {

    //Navigator
    let navi = useNavigate();

    //Nav Menu Toggle
    function navMenuToggle() {
        let menu = document.getElementById("menu");
        let ham = document.getElementById("ham");

        if (menu.classList.contains("open")) {
            ham.classList.remove("fa-xmark");
            ham.classList.add("fa-bars");
            menu.classList.remove("open");
            setTimeout(() => {
                menu.style.display = "none";
            }, 400)
        } else {
            menu.style.display = "flex";
            ham.classList.remove("fa-bars");
            ham.classList.add("fa-xmark");
            setTimeout(() => {
                menu.classList.add("open");
            }, 50)
        }
    }

    //Nav hide on scroll
    let scrollY = window.scrollY;
    useEffect(() => {
        const hideNav = function () {
            let nav = document.getElementById("nav");
            if (window.scrollY > scrollY) {
                nav.classList.add("hide");
            } else {
                nav.classList.remove("hide");
            }
            scrollY = window.scrollY;
        }

        window.addEventListener("scroll", hideNav);

        return () => {
            window.removeEventListener("scroll", hideNav);
        }
    }, [])

    return (
        <>
            <nav id="nav">
                <div className="navbar-container">
                    <div className="navbar-left">
                        <div className="brand" onClick={()=>{navi("/")}}>
                            <span className="gradient-text">BrandMirror</span>
                            <span>BrandMirror</span>
                        </div>
                    </div>
                    <div className="navbar-right">
                        <div className="nav-contact" onClick={()=>{navi("/contact")}}>
                            <div className="text">
                                <span>Contact</span>
                                <span className="gradient-text">Contact</span>
                            </div>
                            <i className="fa-solid fa-arrow-right"/>
                        </div>
                        <div className="ham-menu" onClick={navMenuToggle}>
                            <i className="fa-solid fa-bars" id="ham"/>
                        </div>
                        <div className="menu" id="menu">
                            <Link to={"/join"}>Join Now&nbsp;<i className="fa-solid fa-arrow-right"/></Link>
                            <Link to={"/"}>Home&nbsp;<i className="fa-solid fa-arrow-right"/></Link>
                            <Link to={"/about"}>About&nbsp;<i className="fa-solid fa-arrow-right"/></Link>
                            <Link to={"/contact"}>Contact Us&nbsp;<i className="fa-solid fa-arrow-right"/></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}