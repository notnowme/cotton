import '../../css/feed.css';
const Feed = () => {
    return (
        <div id="background">
            <div className="popup">
                <div className="title">
                    <span className="back">
                        <i className="fa-solid fa-x"></i>
                    </span>
                    <span>오대산 월정사 전나무숲길</span>
                </div>
                <div className="img">

                </div>
                <div className="menu-items">
                    <div className="left">
                        <i className="fa-regular fa-heart"></i>
                        <i className="fa-regular fa-comment"></i>
                    </div>
                    <div className="right">
                        <i className="fa-regular fa-bookmark"></i>
                    </div>
                </div>
                <div className="likes">
                    <span>1명이 좋아합니다</span>
                </div>
                <div className="comments">
                    <div className="cmt">
                        <div className="user">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="item">
                            <span className='nick'>다꼬리</span>
                            <span className="text">
                                내용내용내용내용내용
                                내용내용내용내용내용
                                내용내용내용내용내용
                                내용내용내용내용내용
                            </span>
                        </div>
                    </div>
                    <div className="cmt">
                        <div className="user">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="item">
                            <span className='nick'>다꼬리</span>
                            <span className="text">
                                내용내용내용내용내용
                                내용내용내용내용내용
                                내용내용내용내용내용
                                내용내용내용내용내용
                            </span>
                        </div>
                    </div>
                    <div className="cmt">
                        <div className="user">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="item">
                            <span className='nick'>다꼬리</span>
                            <span className="text">
                                내용내용내용내용내용
                                내용내용내용내용내용
                                내용내용내용내용내용
                                내용내용내용내용내용
                            </span>
                        </div>
                    </div>
                    <div className="cmt">
                        <div className="user">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="item">
                            <span className='nick'>다꼬리</span>
                            <span className="text">
                                내용내용내용내용내용
                                내용내용내용내용내용
                                내용내용내용내용내용
                                내용내용내용내용내용
                            </span>
                        </div>
                    </div>
                    <div className="cmt">
                        <div className="user">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="item">
                            <span className='nick'>다꼬리</span>
                            <span className="text">
                                내용내용내용내용내용
                                내용내용내용내용내용
                                내용내용내용내용내용
                                내용내용내용내용내용
                            </span>
                        </div>
                    </div>
                    <div className="cmt">
                        <div className="user">
                            <i className="fa-solid fa-user"></i>
                        </div>
                        <div className="item">
                            <span className='nick'>다꼬리</span>
                            <span className="text">
                                내용내용내용내용내용
                                내용내용내용내용내용
                                내용내용내용내용내용
                                내용내용내용내용내용
                            </span>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="inputs">
                    <i className="fa-regular fa-pen-to-square"></i>
                    <input type="text" placeholder='댓글 달기...'/>
                    <span>게시</span>
                </div>
            </div>
        </div>
    );
};

export default Feed;