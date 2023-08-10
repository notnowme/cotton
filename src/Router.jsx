import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sec01 from "./comp/Sec01";
import Nav from "./comp/Nav/Nav";
import Card from "./comp/Detail01/Card";
import Content from "./comp/Detail02/Content";
import Mypage from "./comp/Mypage/Mypage";
import Feed from "./comp/Feed/Feed";
import Index from "./comp/Index";
import Login from "./comp/Login/Login";

const Router = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/list" element={<Card />} />
                <Route path='/content' element={<Content />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/feed' element={<Feed />} />
            </Routes>
            <div className="footer">
                
            </div>
        </BrowserRouter>
    )
};

export default Router;