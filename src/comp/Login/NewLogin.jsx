import '../../css/newLogin.css';
import { userInfo } from '../../atoms/atom';
import { useRecoilState } from 'recoil';
import KAKAO from '../../assets/kakao.png'
import GOOGLE from '../../assets/google.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewLogin = ({login}) => {
    const navigate = useNavigate();
    // 페이지 이동을 위한 기능.

    const [showLogin, setShowLogin] = useState(true);
    //로그인/회원가입 전환할 변수 true/false.

    const [user, setUser] = useRecoilState(userInfo);
    // 리코일로 저장한 유저 정보를 담을 변수.

    const [showPw, setShowPw] = useState(false);
    // 비밀번호 입력을 보여줄 true/false.
    
    const [showPwChk, setShowPwChk] = useState(false);
    // 비밀번호 확인 입력을 보여줄 true/fase.

    const [loginInput, setLoginInput] = useState({
        loginId: '',
        loginPw: ''
    });
    // 로그인 쪽 input 변수.

    const [signInput, setSignInput] = useState({
        signId: '',
        signName: '',
        signNick: '',
        signPw: '',
        signPwChk: '',
    });
    // 회원가입 쪽 input 변수.

    const { loginId, loginPw } = loginInput;
    const { signId, signName, signNick, signPw, signPwChk } = signInput;
    // 비구조화 할당으로 input에서 변수를 가져옴.

    const loginInputHandle = e => {
        setLoginInput({
            ...loginInput,
            [e.target.name]: e.target.value
        })
    };
    // 로그인 쪽 input 글자 입력 시 입력된 값을 loginInput에 저장하는 함수.

    const signInputHandle = e => {
        setSignInput({
            ...signInput,
            [e.target.name]: e.target.value
        })
    };
    // 회원가입 쪽 input 글자 입력 시 입력된 값을 loginInput에 저장하는 함수.

    const loginShowPwHandle = () => {
        setLoginShowPw(!loginShowPw);
    }
    const showPwHandle = () => {
        setShowPw(!showPw);
    }
    const showPwChkHandle = () => {
        setShowPwChk(!showPwChk);
    }
    // 눈 아이콘을 누르면 type을 text/password로 변경해서
    // 비밀번호 보여줄지 말지 하는 함수.
    // 느낌표만 붙여서 토글만 하면 될 듯.

    const doLogin = async(e) => {
        e.preventDefault();
        // form 자체의 액션을 없앰 (페이지 자동 새로고침 등.)

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
        // 비동기 통신으로 post 방식으로 서버에 값을 보냄.

        const result = await login.json();
        // 서버에서 보내준 응답을 json 형식으로 바꿔서 저장.

        let session = window.sessionStorage;
        session.setItem("id",result.id);
        session.setItem("nick",result.nick);
        // 브라우저 세션?에다가 로그인 한 아이디와 닉네임을 저장.
        // 브라우저 탭이 유지되는 동안에는 세션 값이 사라지지 않음.
        // 임시로 로그인 구현.

        setUser({
            id: result.id,
            nick: result.nick
        });
        // 로그인 성공하면 각 값들을 변수에 저장.

        loginClose();
        // 로그인 창 닫기.
    };

    const doSign = async(e) => {
        e.preventDefault();
        // form 자체의 액션을 없앰 (페이지 자동 새로고침 등.)

        // const sign = await fetch('http://121.66.158.211:3001/Join', {
        //     method: 'post',
        //     headers: {
        //         "Content-Type":"application/json"
        //     },
        //     body: JSON.stringify({
        //         id: signId,
        //         pw: signPw,
        //         name: signName,
        //         nick: signNick,
        //     })
        // });
        // 비동기 통신으로 post 방식으로 서버에 값을 보냄.

        alert('가입 성공');

        loginClose();
        // 로그인 창 닫기.

        navigate('/fav');
        // 취향 선택 페이지로 이동.
    };
    const doSNS = (e, sns) => {
        e.preventDefault();
        console.log(`${sns}로 로그인 하기.`);

    }
    const loginClose = () => {
        login(false);
    };
    // 로그인 팝업 창을 닫는 함수.
    return (
        <div id="background">
            <div id="newLogin-container">
                <div className="newLogin">
                    <div className="tab">
                        <span className={showLogin ? 'sel' : ''} onClick={()=>setShowLogin(true)}>로그인</span>
                        <span className={showLogin ? '' : 'sel'} onClick={()=>setShowLogin(false)}>회원가입</span>
                    </div>
                    <div className="menu">
                        <i className="fa-solid fa-x"
                            onClick={loginClose}
                        ></i>
                    </div>
                    <form className={showLogin ? '' : 'no'}>
                        <div className="input-field">
                            <span>아이디</span>
                            <input type="text"
                                placeholder='아이디를 입력하세요.'
                                name='loginId'
                                value={loginId}
                                onChange={loginInputHandle}
                            />
                        </div>
                        <div className="input-field">
                            <span>비밀번호</span>
                            <input type="text"
                                placeholder='비밀번호를 입력하세요.'
                                name='loginPw'
                                value={loginPw}
                                onChange={loginInputHandle}
                            />
                        </div>
                        <button onClick={(e)=>doLogin(e)}>
                            로그인
                        </button>
                        <div className="line">
                            <span>or</span>
                        </div>
                        <button className='kakao' onClick={(e)=>doSNS(e, 'kakao')}>
                            <img src={KAKAO} alt="" />
                            카카오 로그인
                        </button>
                        <button className='apple' onClick={(e)=>doSNS(e, 'apple')}>
                            <i className="fa-brands fa-apple"></i>
                            애플 로그인
                        </button>
                        <button className='google' onClick={(e)=>doSNS(e, 'google')}>
                            <img src={GOOGLE} alt="" />
                            구글 로그인
                        </button>
                    </form>
                    <form className={showLogin ? 'no' : ''}>
                        <div className="input-field">
                            <span>아이디</span>
                            <input type="text"
                                placeholder='아이디를 입력하세요.'
                                name='signId'
                                value={signId}
                                onChange={signInputHandle}
                            />
                        </div>
                        <div className="input-field">
                            <span>이름</span>
                            <input type="text"
                                placeholder='이름을 입력하세요.'
                                name='signName'
                                value={signName}
                                onChange={signInputHandle}
                            />
                        </div>
                        <div className="input-field">
                            <span>닉네임</span>
                            <input type="text"
                                placeholder='닉네임을 입력하세요.'
                                name='signNick'
                                value={signNick}
                                onChange={signInputHandle}
                            />
                        </div>
                        <div className="input-field">
                            <span>비밀번호</span>
                            <input type="text"
                                placeholder='비밀번호를 입력하세요.'
                                name='signPw'
                                value={signPw}
                                onChange={signInputHandle}
                            />
                        </div>
                        <div className="input-field">
                            <span>비밀번호 확인</span>
                            <input type="text"
                                placeholder='비밀번호 한 번 더 입력하세요.'
                                name='signPwChk'
                                value={signPwChk}
                                onChange={signInputHandle}
                            />
                        </div>
                        <button onClick={(e)=>doSign(e)}>
                            회원가입
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default NewLogin;