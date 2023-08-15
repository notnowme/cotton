import "../../css/nav.css";
import IMG from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NewLogin from "../Login/NewLogin";
import { userInfo } from "../../atoms/atom";
import { useRecoilState } from "recoil";
const Nav = () => {
  const [showLogin, setShowLogin] = useState(false);
  // 로그인 창을 보여주기 위한 true/false

  const location = useLocation();
  // url을 가져오기 위한 기능.

  const navigate = useNavigate();
  // 페이지 이동을 위한 기능.

  const [user, setUser] = useRecoilState(userInfo);
  // 로그인 하면 유저 정보를 담을 리코일 전역 변수.

  const loginOpen = () => {
    setShowLogin(true);
  };
  // 로그인 창을 열어주는 함수.

  const doLogOut = () => {
    window.sessionStorage.removeItem("id");
    window.sessionStorage.removeItem("nick");
    setUser([{id: '', nick:''}]);
  };
  // 로그아웃 함수.
  // 로그아웃을 하면 브라우저 세션을 지워주고
  // user 리코일 전역 변수를 비워줌.

  const [input, setInput] = useState('');
  // 검색창 input 밸류 값 넣을 변수.

  const inputHandle = e => {
    setInput(prev => e.target.value);
  }
  // input이 변경되면 텍스트를 저장할 함수.

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
  // 엔터를 치면
  // input 밸류 값을 비교해서 각 지역에 맞는 페이지로 이동.

  const goHome = () => {
    navigate('/');
  };
  // 홈으로 가는 함수.


  // useEffect(() => {
  //   const title = document.getElementsByTagName('title')[0];
  //   switch (location.pathname) {
  //     case '/':
  //       title.innerHTML = '메인 :: COTTON CANDY'
  //       break;
  //     case '/search':
  //       title.innerHTML = '지역 :: COTTON CANDY'
  //       break;
  //     case '/content':
  //       title.innerHTML = '코스 상세 :: COTTON CANDY'
  //       break;
  //     case '/mypage':
  //       title.innerHTML = '마이페이지 :: COTTON CANDY'
  //       break;
  //     case '/fav':
  //       title.innerHTML = '취향 선택 :: COTTON CANDY'
  //       break;
  //   };
  // }, [location.pathname])
  ////////////////////////////////////////////////////////////
  // nav 창 변경하기 위한 것들인데
  // 안 쓸 거 같음.
  // 살짝 아까워서 안 지움.
  const [scroll, setScroll] = useState();
  const [view, setView] = useState(false);

  const scrollHandle = () => {
    let scrollY = window.scrollY;
    700 < scrollY ? setView(true) : setView(false);
  };

  useEffect(() => {
    console.log(user[0].id)
    window.addEventListener("scroll", scrollHandle);
    return () => {
      window.removeEventListener("scroll", scrollHandle);
      setView(false);
    };
  }, []);
  ////////////////////////////////////////////////////////////


  return (
    <>
      {showLogin ? <NewLogin login={setShowLogin} /> : null}
      <nav
        id="navbar"
        className={view || location.pathname !== "/" ? "scroll" : "scroll"}
      >
        <div className="logo">
          <img src={IMG} onClick={goHome}/>
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
                  {location.pathname === "/" && <i className="fa-solid fa-caret-up"></i>}
              </li>
            </Link>
              <Link to="/search?area=1">
            <li className={location.pathname === "/search" ? "sel" : ""}>
                <span>지역</span>
                {location.pathname === "/search" && <i className="fa-solid fa-caret-up"></i>}
            </li>
              </Link>
              <Link to="/content">
            <li className={location.pathname === "/content" ? "sel" : ""}>
                <span>상세</span>
                {location.pathname === "/content" && <i className="fa-solid fa-caret-up"></i>}
            </li>
              </Link>
            {user[0].id ? (
              <li onClick={doLogOut}>
                <span>로그아웃</span>
              </li>
            ) : (
              <li onClick={loginOpen}>
                  <span>로그인</span>
              </li>
            )}
          </ul>
          {user[0].id && (
            <div className="login">
              <button>
                <i className="fa-solid fa-user"></i>
              </button>
              <span>{user[0].id} 님 환영합니다.</span>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
