import { useState } from 'react';
import '../../css/login.css';
import KAKAO from '../../assets/kakao_login_medium_wide.png';
import { userInfo } from '../../atoms/atom';
import { useRecoilState } from 'recoil';


const Login = ({login}) => {
    const [user, setUser] = useRecoilState(userInfo);
    const [showSign, setShowSign] = useState(false);

    const [loginShowPw, setLoginShowPw] = useState(false);
    const [showPw, setShowPw] = useState(false);
    const [showPwChk, setShowPwChk] = useState(false);

    const [loginInput, setLoginInput] = useState({
        loginId: '',
        loginPw: ''
    });
    const [signInput, setSignInput] = useState({
        signId: '',
        signName: '',
        signNick: '',
        signPw: '',
        signPwChk: '',
    });
    const { loginId, loginPw } = loginInput;
    const { signId, signName, signNick, signPw, signPwChk } = signInput;

    const loginInputHandle = e => {
        setLoginInput({
            ...loginInput,
            [e.target.name]: e.target.value
        })
    }
    const signInputHandle = e => {
        setSignInput({
            ...signInput,
            [e.target.name]: e.target.value
        })
    }

    const signHandle = (mode) => {
        console.log('o')
        if(mode === 'show') {
            setShowSign(true);
        } else if(mode === 'close') {
            setShowSign(false);
        }
    }
    const signHandle02 = (mode, e) => {
        e.stopPropagation();
        console.log('o')
        if(mode === 'show') {
            setShowSign(true);
        } else if(mode === 'close') {
            setShowSign(false);
        }
    }
    const loginShowPwHandle = () => {
        setLoginShowPw(!loginShowPw);
    }
    const showPwHandle = () => {
        setShowPw(!showPw);
    }
    const showPwChkHandle = () => {
        setShowPwChk(!showPwChk);
    }

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
        setUser(b.id);
        loginClose();
    }
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
    }
    const loginClose = () => {
        login(false);
    }
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