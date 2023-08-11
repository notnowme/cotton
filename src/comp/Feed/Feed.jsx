import '../../css/feed.css';
import { feedHandle, userInfo } from '../../atoms/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useCallback, useEffect, useRef, useState } from 'react';
import Cmt from './Cmt';
//corCmt
const Feed = ({infoArr}) => {
    const [viewFeed, setViewFeed] = useRecoilState(feedHandle);
    // 리코일 변수로 저정한 팝업창 보여주는 true/false 변수. 사용법은 useState와 같음.

    const user = useRecoilValue(userInfo);
    // 리코일 변수로 저장한 유저 정보. 로그인 시 아이디, 닉네임이 저장됨.

    const closeFeed = () => {
        setViewFeed(false);
    }
    // 닫기 버튼을 누르면 팝업창 보여주기 변수를 false.
    const [cmt, setCmt] = useState([]);
    const [, updateState] = useState();
    const [aaa, setAaa] = useState({});
    const forceUpdate = useCallback(()=>updateState({}),[]);

    const getCmt = async(code) => {
        const getData = await fetch(`http://121.66.158.211:3001/callCmt?contentid=${code}`,{
            method: 'get',
            headers: {
                'Content-type':'application/json'
            }
        });
        const data = await getData.json();        
        setCmt(prev => data);
    }

    useEffect(()=>{
        getCmt(infoArr.contentid);
    },[]);

    

    
    const likeHandle = () => {
        if(!user) {
            alert('로그인 후 가능.');
            return;
        }
        alert('okok');
    }
    // 좋아요 버튼을 누르면, 로그인 여부 확인 후 실행.
    
    const textRef = useRef(null);
    const test = async() => {
        const text = textRef.current.value;
        console.log(text);
        // 텍스트.
        const submit = await fetch('http://121.66.158.211:3001/cmt', {
            method: 'post',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                user_id: 't01',
                contentid: infoArr.contentid,
                w_content: text,
            })
        });
        const a = await submit.json();
        textRef.current.innerText = '';
        getCmt(infoArr.contentid);
        this.forceUpdate();
    }
    // textarea DOM
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
                    {
                        cmt.map((data,index) => (
                            <Cmt key={index} data={data}/>
                        ))
                    }
                </div>
                <div className="line"></div>
                <div className="inputs">
                    <i className="fa-regular fa-pen-to-square"></i>
                    <input type="text" placeholder='댓글 달기...' ref={textRef}/>
                    <span onClick={test}>게시</span>
                </div>
            </div>
        </div>
    );
};

export default Feed;