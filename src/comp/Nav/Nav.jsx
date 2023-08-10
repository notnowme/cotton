import '../../css/nav.css';
import IMG from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from '../Login/Login';
import { userInfo } from '../../atoms/atom';
import { useRecoilState } from 'recoil';
const Nav = () => {
    const [showLogin, setShowLogin] = useState(false);
    const location = useLocation();
    const [scroll, setScroll] = useState();
    const [view, setView] = useState(false);
    const [user, setUser] = useRecoilState(userInfo);
    const scrollHandle = () => {
        let scrollY = window.scrollY;
        (700 < scrollY ? setView(true) : setView(false));
    };
    const loginOpen = () => {
        setShowLogin(true);
    }

    const doLogOut = () => {
        window.sessionStorage.removeItem('id');
        setUser('');
    }
    useEffect(()=>{
        window.addEventListener('scroll', scrollHandle);
        return () => {
            window.removeEventListener('scroll',scrollHandle);
            setView(false);
        }
    },[])
    console.log(user);
    return (
        <>
        {showLogin ? <Login login={setShowLogin}/> : null}
        <nav id='navbar' className={view || location.pathname !== '/' ? 'scroll' : 'scroll'}>
            <div className="logo">
                {/* <img src={IMG} /> */}
            </div>
            <div className="nav-right">
                <ul>
                    <li className={location.pathname === '/' ? 'sel' : ''}>
                        <Link to='/'>
                            <span>홈</span>
                        </Link>
                    </li>
                    <li className={location.pathname === '/list' ? 'sel' : ''}>
                        <Link to='/list'>
                            <span>지역</span>
                        </Link>
                    </li>
                    <li className={location.pathname === '/content' ? 'sel' : ''}>
                        <Link to='/content'>
                            <span>상세</span>
                        </Link>
                    </li>
                    {user ?
                        <li onClick={doLogOut}>
                            <span>로그아웃</span>
                    </li>
                    :
                    <li onClick={loginOpen}>
                            <span>로그인</span>
                    </li>
                    }
                </ul>
                {user &&
                    <div className="login">
                        <button>
                            <i className="fa-solid fa-user"></i>
                        </button>
                        <span>
                            {user} 님 환영합니다.
                        </span>
                    </div>
                }
            </div>
        </nav>
        </>
    );
};

export default Nav;