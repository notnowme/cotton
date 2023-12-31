import { useState } from 'react';
import '../../css/login.css';
import KAKAO from '../../assets/kakao_login_medium_wide.png';
import { userInfo } from '../../atoms/atom';
import { useRecoilState } from 'recoil';


const Login = ({login}) => {
    const [user, setUser] = useRecoilState(userInfo);
    // 리코일 변수로 저장한 유저 정보를 담을 변수.

    const [showSign, setShowSign] = useState(false);
    // 회원가입 부분을 보여줄 true/false 변수.

    const [loginShowPw, setLoginShowPw] = useState(false);
    // 로그인 팝업을 보여줄 true/false 변수.

    const [showPw, setShowPw] = useState(false);
    // 비밀번호 입력을 보여줄 true/false 변수.

    const [showPwChk, setShowPwChk] = useState(false);
    // 비밀번호 확인 입력을 보여줄 true/false 변수.

    const [loginInput, setLoginInput] = useState({
        loginId: '',
        loginPw: ''
    });
    // 로그인 쪽 input 변수들.

    const [signInput, setSignInput] = useState({
        signId: '',
        signName: '',
        signNick: '',
        signPw: '',
        signPwChk: '',
    });
    // 회원가입 쪽 input 변수들.

    const { loginId, loginPw } = loginInput;
    const { signId, signName, signNick, signPw, signPwChk } = signInput;
    // 비구조화 할당으로 각각 변수를 뽑아옴.

    const loginInputHandle = e => {
        setLoginInput({
            ...loginInput,
            [e.target.name]: e.target.value
        })
    };
    // 로그인 쪽 input의 변경이 있을 시 그 값들을 loginInput에 저장.

    const signInputHandle = e => {
        setSignInput({
            ...signInput,
            [e.target.name]: e.target.value
        })
    };
    // 회원가입 쪽 input의 변경이 있을 시 그 값들을 signInput에 저장.

    // name 값이 일치하면 그걸 저장하는 것.

    const signHandle = (mode) => {
        if(mode === 'show') {
            setShowSign(true);
        } else if(mode === 'close') {
            setShowSign(false);
        }
    };
    // 로그인 팝업창의 오른쪽을 누르면 회원가입 부분 보여주는 변수를 변경.

    const signHandle02 = (mode, e) => {
        e.stopPropagation();
        if(mode === 'show') {
            setShowSign(true);
        } else if(mode === 'close') {
            setShowSign(false);
        }
    };
    // 이벤트 버블링을 방지하기 위해 stopPropagation을 씀.
    // 나머진 위와 비슷함.

    const loginShowPwHandle = () => {
        setLoginShowPw(!loginShowPw);
    }
    const showPwHandle = () => {
        setShowPw(!showPw);
    }
    const showPwChkHandle = () => {
        setShowPwChk(!showPwChk);
    }
    // 비밀번호 입력 칸을 보여줄지 말지.
    // 결국 true/false 토글밖에 없으므로 !만 쓰면 될 듯.

    const doLogin = async() => {
        const login = await fetch('http://121.66.158.211:3001/Login', {
            method: 'post',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id: loginId,
                pw: loginPw,
            })
        });
        const b = await login.json();
        let session = window.sessionStorage;
        session.setItem("id",b.id);
        session.setItem("nick",b.nick);
        setUser({
            id: b.id,
            nick: b.nick
        });
        loginClose();
    };
    // async-await으로 비동기로 서버와 통신.
    // 로그인에 성공해서 서버에서 받아온 id, nick을 로컬 세션에 저장.
    // 이것으로 회원 기능을 만들 것.

    const doSign = async(e) => {
        e.stopPropagation();
        const sign = await fetch('http://121.66.158.211:3001/Join', {
            method: 'post',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                id: signId,
                pw: signPw,
                name: signName,
                nick: signNick,
            })
        });
        console.log(sign);
    };
    // async-await으로 비동기로 서버와 통신.
    // 회원가입 폼에서 입력받은 값을 서버로 넘김.
    // 서버에서 회원가입 처리.

    const loginClose = () => {
        login(false);
    };
    // 로그인 팝업창을 닫는 함수.

    return (
        <div id="background">
            <div id="login-container">
                <div className="login">
                    <div className='form'>
                    <i className="fa-solid fa-x"
                        onClick={loginClose}
                    ></i>
                        <h1>로그인</h1>
                        <div className="input-filed">
                            <span>아이디</span>
                            <input type="text"
                                name='loginId'
                                value={loginId}
                                onChange={loginInputHandle}
                            />
                        </div>
                        <div className="input-filed">
                            <i className={loginShowPw ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}
                                onClick={loginShowPwHandle}
                            ></i>
                            <span>비밀번호</span>
                            <input type={loginShowPw ? 'text' : 'password'}
                            // true면 보이게 할 것이므로 input type을 text.
                            // false면 보이지 않게 할 것이므로 type을 password.
                                name='loginPw'
                                value={loginPw}
                                onChange={loginInputHandle}
                            />
                        </div>
                        <button onClick={doLogin}
                            className={loginId && loginPw.length >= 4 ? 'fullfilled' : ''}
                        >
                            로그인
                        </button>
                    </div>
                    <div className="sns">
                    <img src={KAKAO} alt="" />
                    </div>
                </div>
                <div className={showSign ? 'sign show' : 'sign'} onClick={()=>signHandle('show')}>
                        <i className="fa-solid fa-x" onClick={(e)=>signHandle02('close',e)}></i>
                        <h1>회원가입</h1>
                    <div className='form'>
                        <div className="input-filed">
                            <span>아이디</span>
                            <input type="text"
                                name='signId'
                                value={signId}
                                onChange={signInputHandle}
                            />
                        </div>
                        <div className="input-filed">
                            <span>이름</span>
                            <input type="text"
                                name='signName'
                                value={signName}
                                onChange={signInputHandle}
                            />
                        </div>
                        <div className="input-filed">
                            <span>닉네임</span>
                            <input type="text"
                                name='signNick'
                                value={signNick}
                                onChange={signInputHandle}
                            />
                        </div>
                        <div className="input-filed">
                            <i className={showPw ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}
                                onClick={showPwHandle}
                            ></i>
                            <span>비밀번호</span>
                            <input type={showPw ? 'text' : 'password'}
                                name='signPw'
                                value={signPw}
                                onChange={signInputHandle}
                            />
                        </div>
                        <div className="input-filed">
                        <i className={showPwChk ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}
                                onClick={showPwChkHandle}></i>
                            <span>비밀번호 확인</span>
                            <input type={showPwChk ? 'text' : 'password'}
                            name='signPwChk'
                            value={signPwChk}
                            onChange={signInputHandle}/>
                        </div>
                        <button onClick={(e)=>doSign(e)}>가입하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;