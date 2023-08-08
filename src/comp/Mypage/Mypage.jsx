import '../../css/mypage.css'

const Mypage = () => {
    return (
        <div id="Mypage">
            <h1>마이 페이지</h1>
            <div className="container">
                <div className="left">
                    <div className="icon">
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className="name">
                        <p>반가워요!</p>
                        <p className='name'>다꼬리 님</p>
                    </div>
                </div>
                <div className="right">
                    <div className="act">
                        <h1>나의 활동</h1>
                        <ul className="items">
                            <li>
                                <i className="fa-solid fa-star"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Mypage;