import '../../css/feed.css';
import { feedHandle, userInfo } from '../../atoms/atom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useCallback, useEffect, useRef, useState } from 'react';
import Cmt from './Cmt';
//corCmt
const Feed = ({infoArr, forceUpdate, setInfoArr}) => {
    const [viewFeed, setViewFeed] = useRecoilState(feedHandle);
    // 리코일 변수로 저정한 팝업창 보여주는 true/false 변수. 사용법은 useState와 같음.

    const user = useRecoilValue(userInfo);
    // 리코일 변수로 저장한 유저 정보. 로그인 시 아이디, 닉네임이 저장됨.

    const closeFeed = () => {
        setViewFeed(false);
    }
    // 닫기 버튼을 누르면 팝업창 보여주기 변수를 false.

    const [cmt, setCmt] = useState([]);
    // 댓글 정보를 저장할 변수.


    const textRef = useRef(null);
    // input DOM 지정. focus 쓰기 위함과 작성 후 비워주기 위해.

    const [input, setInput] = useState('');
    // 댓글 입력한 텍스트를 저장할 변수.

    const inputHandle = e => {
      setInput(prev => e.target.value);
    }
    // input에 변경이 생기면 글자를 저장할 함수.

    const [userDetail, setUserDetail] = useState();

    const getUserData = async(userId) => {
        const getData = await fetch();
        const data = await getData.json();
        setUserDetail(prev => data);
    }
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
    
    const likeHandle = async (code) => {
        // 유저의 fav를 가져오기...
        const getFav = await fetch(`http://121.66.158.211:3001/detail?info=${code}`, {
            method: 'get',
            headers: {
                'Content-type': 'application/json'
            }
        });
        const favData = await getFav.json();

        const result = favData[0];
        // 유저 정보

        const splitFav = result.fav.split('/');
        const filteredFav = splitFav.filter(el => el === code);

        if (filteredFav.length > 0) {
            // 좋아요 누른 상태.
            const deleteFav = splitFav.filter(el => el !== code);
            const concatFav = deleteFav.join('/');
            const submit = await fetch('http://121.66.158.211:3001/cmt', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: 't01',
                    contentid: `${concatFav}`
                })
            });
        } else {
            // 좋아요 안 누른 상태.
            const submit = await fetch('http://121.66.158.211:3001/cmt', {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user_id: 't01',
                    contentid: `${result.fav}/${code}`
                })
            });
        }
    }
    // 좋아요 버튼을 누르면, 로그인 여부 확인 후 실행.
    
    const writeCmt = async() => {
        // const text = textRef.current.value;
        // console.log(text);
        // 텍스트.
        const submit = await fetch('http://121.66.158.211:3001/cmt', {
            method: 'post',
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                user_id: 't01',
                contentid: infoArr.contentid,
                w_content: input,
            })
        });
        setInput('');
        const a = await submit.json();
        getCmt(infoArr.contentid);
        forceUpdate();
    }

    useEffect(()=>{
        getCmt(infoArr.contentid);
    },[infoArr]);

    useEffect(() => {
        if (user) {
            getUserData(user.id);
        }
    }, []);
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
                        <i className='fa-regular fa-heart'
                            onClick={()=>likeHandle(infoArr.contentid)}
                        ></i>
                        <i className="fa-regular fa-comment" onClick={()=>{textRef.current.focus()}}></i>
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
                    <input type="text" placeholder='댓글 달기...' onChange={inputHandle} value={input} ref={textRef}/>
                    <span onClick={writeCmt}>게시</span>
                </div>
            </div>
        </div>
    );
};

export default Feed;