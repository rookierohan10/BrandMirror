import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {useForm} from "react-hook-form";
import {useState} from "react";
import axios from "axios";
import {ScrollToTop} from "../components/ScrollToTop";
import {Popup} from "../components/Popup";

export const Join = () => {

    //States
    const [conErr, setConErr] = useState(false);

    //Sign Up States
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [brand, setBrand] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");

    //Sign in States
    const [inEmail, setInEmail] = useState("");
    const [inPassword, setInPassword] = useState("");

    //Popup states
    const [msg, setMsg] = useState("");
    const [head, setHead] = useState("");
    const [title, setTitle] = useState("");
    const [toggle, setToggle] = useState(false);

    //Form Validator
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {register: register2, handleSubmit: handleSubmit2, formState: {errors: errors2}} = useForm();

    //Popup Setter
    function popUpSetter(msg, head, title) {
        setMsg(msg);
        setHead(head);
        setTitle(title);
        setToggle(!toggle);
    }

    //Sign Up Submit
    function signUpHandler() {
        if (password !== cPassword) setConErr(true);
        else {
            setConErr(false);
            axios.post("http://localhost:5000/sign-up", {
                name: name,
                brand: brand,
                email: email,
                password: password
            }).then((res) => {
                if (res.data === "success") {
                    document.getElementById("upForm").reset();
                    popUpSetter("You have signed up successfully!", "gradient-text", "Nicely Done!");
                    formSwitcher("in");
                } else if (res.data === "fail") {
                    popUpSetter("Something went wrong! Please try again.", "err", "Whoops!");
                } else if (res.data === "exists") {
                    popUpSetter("The email you're trying to use already exists!", "err", "Already exists!");
                }
            });
        }
    }

    //Sign in Submit
    function signInHandler() {
        axios.post("http://localhost:5000/sign-in", {
            email: inEmail,
            pass: inPassword
        }).then((res) => {
            if (res.data === "success") {
                document.getElementById("inForm").reset();
                popUpSetter("Logged in successfully", "gradient-text", "Welcome back!");
            } else if (res.data === "!exist") {
                popUpSetter("No account found for the provided email!", "err", "Account not found!");
            } else if (res.data === "!pass") {
                popUpSetter("Wrong password! Try again...", "err", "Incorrect Password!");
            }
        });
    }

    //Form Switcher
    function formSwitcher(x) {
        let inButton = document.getElementById("signIn");
        let upButton = document.getElementById("signUp");
        let upForm = document.getElementById("upForm");
        let inForm = document.getElementById("inForm");
        let head = document.getElementById("join-head");

        if (x === "in") {
            head.innerText = "Welcome Back";
            upButton.classList.remove("active");
            inButton.classList.add("active");
            upForm.classList.remove("active");
            setTimeout(() => {
                upForm.style.display = "none";
                inForm.style.display = "flex";
                setTimeout(() => {
                    inForm.classList.add("active");
                }, 50)
            }, 200)

        } else if (x === "up") {
            head.innerText = "Take the first step";
            upButton.classList.add("active");
            inButton.classList.remove("active");
            inForm.classList.remove("active");
            setTimeout(() => {
                inForm.style.display = "none";
                upForm.style.display = "flex";
                setTimeout(() => {
                    upForm.classList.add("active");
                }, 50)
            }, 200)
        }
    }

    return (
        <>
            <ScrollToTop/>
            <Popup head={head} msg={msg} title={title} toggle={toggle}/>
            {/*  Navbar  */}
            <Navbar/>
            {/*  Navbar End  */}
            {/*  Body  */}
            <div className="join" id="join">
                <div className="join-container">
                    <div className="header">
                        <span className="head" id="join-head">Take the first step</span>
                        <span className="tag">into the world of <span className="cali gradient-text">Brand Image Analysis</span> with BrandMirror</span>
                    </div>
                    <div className="form-container">
                        <div className="form-switcher">
                            <button type="button" className="active" id="signUp" onClick={() => {
                                formSwitcher("up")
                            }}>Sign&nbsp;Up
                            </button>
                            <button type="button" id="signIn" onClick={() => {
                                formSwitcher("in")
                            }}>Sign&nbsp;In
                            </button>
                        </div>
                        <form onSubmit={handleSubmit(signUpHandler)} className="sign-up-form active" id="upForm">
                            <div className="input-field">
                                <label htmlFor="name">Enter Name</label>
                                <input {...register("name", {required: {value: true, message: "Please fill this field"}, minLength: {value: 2, message: "Please fill it properly 🥲"}, maxLength: {value: 35, message: "Maximum 35 characters allowed"}})} type="text" name="name" id="name" placeholder="e.g. Elon Musk" onChange={(e) => {
                                    setName(e.target.value)
                                }}/>
                                {errors.name && <p className="err">{errors.name.message} 👆</p>}
                            </div>
                            <div className="input-field">
                                <label htmlFor="bName">Enter Brand Name</label>
                                <input {...register("bName", {required: {value: true, message: "Please fill this field"}, minLength: {value: 2, message: "Please fill it properly 🥲"}, maxLength: {value: 35, message: "Maximum 35 characters allowed"}})} type="text" name="bName" id="bName" placeholder="e.g. Tesla" onChange={(e) => {
                                    setBrand(e.target.value)
                                }}/>
                                {errors.bName && <p className="err">{errors.bName.message} 👆</p>}
                            </div>
                            <div className="input-field">
                                <label htmlFor="email">Enter Email</label>
                                <input {...register("email", {required: {value: true, message: "Please fill this field"}, pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Please enter a valid email 🙏"}})} type="email" name="email" id="email" placeholder="e.g. elon@gmail.com" onChange={(e) => {
                                    setEmail(e.target.value)
                                }}/>
                                {errors.email && <p className="err">{errors.email.message} 👆</p>}
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Enter Password</label>
                                <input {...register("password", {required: {value: true, message: "Please fill this field"}, pattern: {value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g, message: "Password must contain 8 characters including at least 1 number and 1 letter"}})} type="password" name="password" id="password" onChange={(e) => {
                                    setPassword(e.target.value)
                                }}/>
                                {errors.password && <p className="err">{errors.password.message} 👆</p>}
                            </div>
                            <div className="input-field">
                                <label htmlFor="cPassword">Confirm Password</label>
                                <input {...register("cPassword", {required: true})} type="password" name="cPassword" id="cPassword" onChange={(e) => {
                                    setCPassword(e.target.value)
                                }}/>
                                {conErr && <p className="err" id="cErr">Password and Confirm Password do not match ✖️</p>}
                            </div>
                            <div className="btn-field">
                                <button type="submit" className="click">Register</button>
                            </div>
                        </form>
                        <form onSubmit={handleSubmit2(signInHandler)} className="sign-up-form" id="inForm">
                            <div className="input-field">
                                <label htmlFor="inEmail">Enter Email</label>
                                <input {...register2("inEmail", {required: {value: true, message: "Please fill this field"}, pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, message: "Please enter a valid email 🙏"}})} type="text" name="inEmail" id="inEmail" placeholder="Email" onChange={(e) => {
                                    setInEmail(e.target.value)
                                }}/>
                                {errors2.inEmail && <p className="err">{errors2.inEmail.message} 👆</p>}
                            </div>
                            <div className="input-field">
                                <label htmlFor="inPassword">Enter Password</label>
                                <input {...register2("inPassword", {required: {value: true, message: "Please fill this field"}})} type="password" name="inPassword" id="inPassword" onChange={(e) => {
                                    setInPassword(e.target.value)
                                }}/>
                                {errors2.inPassword && <p className="err">{errors2.inPassword.message} 👆</p>}
                            </div>
                            <div className="btn-field">
                                <button type="submit" className="click">Login</button>
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