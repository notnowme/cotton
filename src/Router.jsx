import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sec01 from "./comp/Sec01";
import Nav from "./comp/Nav/Nav";
import Card from "./comp/Detail01/Card";
import Content from "./comp/Detail02/Content";
import Mypage from "./comp/Mypage/Mypage";
import Feed from "./comp/Feed/Feed";
import Index from "./comp/Index";
import Login from "./comp/Login/Login";
import Choice from './comp/Choice'
import Fav from "./comp/fav/Fav";
import Search from "./comp/Search/Search";
import NewLogin from "./comp/Login/NewLogin";
import Footer from "./comp/Footer/Footer";

const Router = () => {
    // BrowserRouter는 일반적인 url 방식, HashRouter는 localhost/#/url처럼 #이 붙음.
    // BrowserRouter 안에 감싸주고 path='/주소' element={<컴포넌트>} 하면 라우팅이 됨. 
    return (
        <BrowserRouter>
            <Nav />
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/list" element={<Card />} />
                <Route path='/content' element={<Content />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/feed' element={<Feed />} />
                <Route path='/choice' element={<Choice />} />
                <Route path='/fav' element={<Fav />} />
                <Route path='/search' element={<Search />} />
                <Route path='/login' element={<NewLogin />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
};

export default Router;