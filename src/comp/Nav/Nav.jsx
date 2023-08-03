import '../../css/nav.css';
import IMG from '../../assets/logo.png';
const Nav = () => {
    return (
        <nav id='navbar'>
            <div className="logo">
                <img src={IMG} />
            </div>
            <div className="nav-right">
                <ul>
                    <li className='sel'>
                        <span>홈</span>
                    </li>
                    <li>
                        <span>지역</span>
                    </li>
                    <li>
                        <span>상세</span>
                    </li>
                    <li>
                        <span>로그인</span>
                    </li>
                </ul>
                <div className="login">
                    <button>
                        <i className="fa-solid fa-user"></i>
                    </button>
                    <span>
                        다꼬리 님 환영 못합니다.
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Nav;