import '../../css/feed.css';
import { feedHandle, userInfo } from '../../atoms/atom';
import { useRecoilState, useRecoilValue } from 'recoil';

const Feed = ({infoArr}) => {
    const [viewFeed, setViewFeed] = useRecoilState(feedHandle);
    const user = useRecoilValue(userInfo);
    const closeFeed = () => {
        setViewFeed(false);
    }
    const likeHandle = () => {
        if(!user) {
            alert('로그인 후 가능.');
            return;
        }
        alert('okok');
    }
    return (
        <div id="background">
            <div className="popup">
                <div className="title">
                    <span className="back" onClick={closeFeed}>
                        <i className="fa-solid fa-x"></i>
                    </span>
                    <span>{infoArr.title}</span>
                </div>
                <div className="img">
                    <img src={infoArr.firstimage} alt="" />
                </div>
                <div className="menu-items">
                    <div className="left">
                        <i className="fa-regular fa-heart"
                            onClick={likeHandle}
                        ></i>
                        <i className="fa-regular fa-comment"></i>
                        <i className="fa-regular fa-paper-plane"></i>
                    </div>
                    <div className="right">
                        <i className="fa-regular fa-map"></i>
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
                                #{infoArr.addr1} #{infoArr.cat2} #{infoArr.cat3}
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
                                내용내용내용내용내용
                                내용내용내용내용내용
                            </span>
                        </div>
                    </div>
                </div>
                <div className="line"></div>
                <div className="inputs">
                    <i className="fa-regular fa-pen-to-square"></i>
                    <textarea type="text" placeholder='댓글 달기...'/>
                    <span>게시</span>
                </div>
            </div>
        </div>
    );
};

export default Feed;