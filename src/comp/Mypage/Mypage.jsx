import { useEffect } from 'react';
import '../../css/mypage.css'
import { useState } from 'react';

const Mypage = () => {

    // const [userInfo, setUserInfo] = useState();
    // const [cmtInfo, setCmtInfo] = useState([]);
    const [fav, setFav] = useState(0);
    const [cmt, setCmt] = useState([]);

    const getCmt = async() => {
        const getData = await fetch(`http://121.66.158.211:3001/userCmt?user_id=t01`,{
            method: 'get',
            headers: {
                'Content-type':'application/json'
            }
        });
        const data = await getData.json();
        console.log(data);     
        setCmt(prev => data);
    }

    useEffect(()=>{
        getCmt();
    },[])
    // const getUserData = async(id) => {
    //     const getData = await fetch(`url?=${id}`);

    //     const result = await getData.json();

    //     setUserInfo(result[0]);
    // }

    // 서버에서 유저 id로 검색해서 정보를 받아옴.
    // user_id, user_nick, user_fav, user_date(가입날짜?)

    // const getCmtData = async(id) => {
    //     const getData = await fetch(`url?=${id}`);

    //     const result = await getData.json();

    //     setCmtInfo(result);
    // };

    // 서버에서 유저 id로 검색해서 댓글 정보를 받아옴.
    // cmt 테이블이 있었나?
    // 댓글에 있는 거 다?

    // useEffect(()=>{
    //     const splited = userInfo.fav.split('/');
    //     setFav(prev => splited.length);
    // },[]);

    // 이 페이지 왔을 때 일단 한 번만 정보를 받아오면 될 듯?
    // fav는 '123/456/789' 형태로 저장 중이니
    // split('/')로 하면 배열로 되고 그걸 length 하면 몇 개인지 나올 듯...

    useEffect(()=>{
        const title = document.getElementsByTagName('title')[0];
        title.innerHTML = '마이페이지 | COTTON CANDY';
    },[]);
    // 위에 제목을 바꾸기 위한 함수.
    return (
        <div id="Mypage">
            <div className="mypage-top">
                <div className="mypage-icon">
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className="mypage-modify">
                    <span>프로필 수정</span>
                </div>
            </div>
            <div className="mypage-main">
                <div className='mypage-name'>
                    <span>안녕하세요! <strong>다꼬리</strong> 님</span>
                </div>
                <div className="mypage-activity">
                    <div className="mypage-item">
                        <div className="icon">
                            <i className="fa-regular fa-heart"></i>
                        </div>
                        <div className='text'>
                            <span>좋아요</span>
                        </div>
                        <div className="count">
                            <span>{fav}</span>
                        </div>
                    </div>
                    <div className="mypage-item">
                        <div className="icon">
                            <i className="fa-regular fa-bookmark"></i>
                        </div>
                        <div className='text'>
                            <span>즐겨찾기</span>
                        </div>
                        <div className="count">
                            <span>0</span>
                        </div>
                    </div>
                    <div className="mypage-item">
                        <div className="icon">
                            <i className="fa-regular fa-comment"></i>
                        </div>
                        <div className='text'>
                            <span>나의 후기</span>
                        </div>
                        <div className="count">
                            <span>{cmt.length}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Mypage;