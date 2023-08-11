import '../../css/newLogin.css';
import COTTON from '../../assets/icon_gr.png';
import BG from '../../assets/loginBg.png';

const NewLogin = () => {
    return (
        <div id="background">
            <div id="newLogin-container">
                <div className="newLogin">
                    {/* <img src={BG} alt="" /> */}
                    <div className="login-form">
                        <div className="input-fields">
                            <input type="text"
                                placeholder='아이디를 입력해 주세요.'
                            />
                        </div>
                        <div className="input-fields">
                        <input type="text"
                                placeholder='비밀번호를 입력해 주세요.'
                            />
                        </div>
                        <div className="action-fields">
                            <span>로그인</span>
                            <button>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                            <div className="sug">

                            </div>
                        </div>
                    </div>
                    {/* <div className="login-form">
                        <div className="input-fields">
                            <input type="text"
                                placeholder='아이디를 입력해 주세요.'
                            />
                        </div>
                        <div className="input-fields">
                        <input type="text"
                                placeholder='이름을 입력해 주세요.'
                            />
                        </div>
                        <div className="input-fields">
                        <input type="text"
                                placeholder='닉네임을 입력해 주세요.'
                            />
                        </div>
                        <div className="input-fields">
                        <input type="text"
                                placeholder='비밀번호를 입력해 주세요.'
                            />
                        </div>
                        <div className="input-fields">
                        <input type="text"
                                placeholder='비밀번호를 한 번 더 입력해 주세요.'
                            />
                        </div>
                        <div className="action-fields">
                            <span>회원가입</span>
                            <button>
                                <i className="fa-solid fa-user-plus"></i>
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
};

export default NewLogin;