import { useState } from 'react';
import '../../css/login.css';

const Login = () => {
    const [showSign, setShowSign] = useState(false);

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
    return (
        <div id="background">
            <div id="login-container">
                <div className="login">
                        <h1>로그인</h1>
                    <form action="">
                        <div className="input-filed">
                            <span>아이디</span>
                            <input type="text" />
                        </div>
                        <div className="input-filed">
                            <span>비밀번호</span>
                            <input type="text" />
                        </div>
                        <button>로그인</button>
                    </form>
                </div>
                <div className={showSign ? 'sign show' : 'sign'} onClick={()=>signHandle('show')}>
                        <i className="fa-solid fa-x" onClick={(e)=>signHandle02('close',e)}></i>
                        <h1>회원가입</h1>
                    <form action="">
                        <div className="input-filed">
                            <span>아이디</span>
                            <input type="text" />
                        </div>
                        <div className="input-filed">
                            <span>비밀번호</span>
                            <input type="text" />
                        </div>
                        <button>로그인</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;