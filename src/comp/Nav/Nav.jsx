import "../../css/nav.css";
import IMG from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = () => {
  const location = useLocation();
  const [scroll, setScroll] = useState();
  const [view, setView] = useState(false);
  const scrollHandle = () => {
    let scrollY = window.scrollY;
    700 < scrollY ? setView(true) : setView(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);
    return () => {
      window.removeEventListener("scroll", scrollHandle);
      setView(false);
    };
  }, []);

  return (
    <nav
      id="navbar"
      className={view || location.pathname !== "/" ? "scroll" : "scroll"}
    >
      <div className="logo">
        <img src={IMG} />
        <div className="input-group">
          <input type="search" className="inputBox" placeholder="Search" />
          <button type="button" className="search_btn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>

      <div className="nav-right">
        <ul>
          <li className={location.pathname === "/" ? "sel" : ""}>
            <Link to="/">
              <span>홈</span>
            </Link>
          </li>
          <li className={location.pathname === "/list" ? "sel" : ""}>
            <Link to="/list">
              <span>지역</span>
            </Link>
          </li>
          <li className={location.pathname === "/content" ? "sel" : ""}>
            <Link to="/content">
              <span>상세</span>
            </Link>
          </li>
          <li>
            <Link to="/">
              <span>로그인</span>
            </Link>
          </li>
        </ul>
        <div className="login">
          <button>
            <i className="fa-solid fa-user"></i>
          </button>
          <span>다꼬리 님 환영합니다.</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
