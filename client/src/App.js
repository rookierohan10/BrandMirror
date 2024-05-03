import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {Join} from "./pages/Join";
import {Contact} from "./pages/Contact";
import {About} from "./pages/About";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/join"} element={<Join/>}/>
                    <Route path={"/contact"} element={<Contact/>}/>
                    <Route path={"/about"} element={<About/>}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
