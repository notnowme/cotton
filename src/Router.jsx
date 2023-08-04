import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sec01 from "./comp/Sec01";
import Nav from "./comp/Nav/Nav";
import Card from "./comp/Detail01/Card";

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Sec01 />} />
                <Route path="/list" element={<Card />} />
            </Routes>
        </BrowserRouter>
    )
};

export default Router;