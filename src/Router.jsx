import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sec01 from "./comp/Sec01";
import Nav from "./comp/Nav/Nav";
import Card from "./comp/Detail01/Card";
import Content from "./comp/Detail02/Content";

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Sec01 />} />
                <Route path="/list" element={<Card />} />
                <Route path='/content' element={<Content />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router;