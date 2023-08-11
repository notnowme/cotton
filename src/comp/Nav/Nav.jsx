import "../../css/nav.css";
import IMG from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "../Login/Login";
import { userInfo } from "../../atoms/atom";
import { useRecoilState } from "recoil";
const Nav = () => {
  const [showLogin, setShowLogin] = useState(false);
  const location = useLocation();
  const [scroll, setScroll] = useState();
  const [view, setView] = useState(false);
  const [user, setUser] = useRecoilState(userInfo);
  const navigate = useNavigate();
  const scrollHandle = () => {
    let scrollY = window.scrollY;
    700 < scrollY ? setView(true) : setView(false);
  };
  const loginOpen = () => {
    setShowLogin(true);
  };

  const doLogOut = () => {
    window.sessionStorage.removeItem("id");
    setUser("");
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);
    return () => {
      window.removeEventListener("scroll", scrollHandle);
      setView(false);
    };
  }, []);
  const [input, setInput] = useState('');
  const inputHandle = e => {
    setInput(prev => e.target.value);
  }
  const doSearch = (e) => {
    if(e.key === 'Enter') {
      if(input === '서울') {
        navigate('/search?area=1');
      } else if(input === '광주') {
        navigate('/search?area=5');
      } else if(input === '제주') {
        navigate('/search?area=39');
      } else if(input === '부산') {
        navigate('/search?area=6');
      }
      setInput(prev => '');
    }

  }
  return (
    <>
      {showLogin ? <Login login={setShowLogin} /> : null}
      <nav
        id="navbar"
        className={view || location.pathname !== "/" ? "scroll" : "scroll"}
      >
        <div className="logo">
          <img src={IMG} />
          <div className="input-group">
            <input
              type="search"
              className="inputBox"
              placeholder="지역을 검색해 보세요"
              onChange={inputHandle}
              onKeyDown={doSearch}
              name='search'
              value={input}
            />
            <button type="button" className="search_btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
        <div className="nav-right">
          <ul>
            <Link to="/">
              <li className={location.pathname === "/" ? "sel" : ""}>
                
                  <span>홈</span>
              </li>
            </Link>
              <Link to="/search?area=1">
            <li className={location.pathname === "/search" ? "sel" : ""}>
                <span>지역</span>
            </li>
              </Link>
              <Link to="/content">
            <li className={location.pathname === "/content" ? "sel" : ""}>
                <span>상세</span>
            </li>
              </Link>
            {user ? (
              <li onClick={doLogOut}>
                <span>로그아웃</span>
              </li>
            ) : (
              <li onClick={loginOpen}>
                  <span>로그인</span>
              </li>
            )}
          </ul>
          {user && (
            <div className="login">
              <button>
                <i className="fa-solid fa-user"></i>
              </button>
              <span>{user} 님 환영합니다.</span>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
