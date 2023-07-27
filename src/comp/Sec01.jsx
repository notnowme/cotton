import '../css/sec01.css';
import KOR from '../assets/korea.png'
import { useState, useRef, useEffect } from 'react';
function Sec01 () {
    const [tab, setTab] = useState(0);

    const tapClick = (n) => {
        setTab(prev => n);
    }
    const [posX, setPosX] = useState(0);
    const [left, setLeft] = useState(0);
    const dragStartHandler = e => {
        const img = new Image();
        e.dataTransfer.setDragImage(img, 0, 0);
        e.dataTransfer.effectAllowed = 'move';
        setPosX(prev => e.clientX);
    };

    const dragHandler = e => {
        if(posX > e.clientX) {
            console.log('왼?');
            setLeft(prev => prev-1);
        } else {
            console.log('오?');
            setLeft(prev => prev+1);
        }
    }
    const dragEndHandler = e => {
        if(left <= -1000) {
            setLeft(-960);
        } else if(left > 0) {
            setLeft(0);
        }
        console.log(left);
    }
    const dragOverHandler = e => {
        e.preventDefault();
    }
    return (
        <section id='sec01'>
            <div className='sec01-top'>
                <ul>
                    <li className={tab === 0 ?'sel' : ''} onClick={()=>tapClick(0)}>
                        <div className='icon'>
                            <img src={KOR} className='img'/>
                        </div>
                        <span>
                            대한민국 지역 인기 여행지
                            <i className="fa-solid fa-chevron-right"></i>
                        </span>
                    </li>
                    <li className={tab === 1 ? 'sel' : ''} onClick={()=>tapClick(1)}>
                        <div className='icon'>
                            <i className="fa-solid fa-route"></i>
                        </div>
                        <span>
                            인기 여행 코스 추천
                            <i className="fa-solid fa-chevron-right"></i>
                        </span>
                    </li>
                </ul>
            </div>
            <div className='sec01-main'>
                <div className='main-top'>
                    <div className="title">
                        <p>
                            <span>서울</span> 인기 여행지
                        </p>
                        <div className='move'>
                            <i className={posX > 0 ? 'fa-solid fa-circle-chevron-left nomore' : 'fa-solid fa-circle-chevron-left'}></i>
                            <i className={posX <= 0 ? "fa-solid fa-circle-chevron-right nomore" : "fa-solid fa-circle-chevron-right"}></i>
                        </div>
                    </div>
                </div>
                <div className='main-mid'>
                    <ul draggable
                        onDragStart={dragStartHandler}
                        onDrag={dragHandler}
                        onDragEnd={dragEndHandler}
                        onDragOver={dragOverHandler}
                        style={{left:left}}
                    >
                        <li className='sel'>
                            <span>서울</span>
                        </li>
                        <li>
                            <span>인천</span>
                        </li>
                        <li>
                            <span>대전</span>
                        </li>
                        <li>
                            <span>대구</span>
                        </li>
                        <li>
                            <span>광주</span>
                        </li>
                        <li>
                            <span>부산</span>
                        </li>
                        <li>
                            <span>울산</span>
                        </li>
                        <li>
                            <span>세종</span>
                        </li>
                        <li>
                            <span>경기</span>
                        </li>
                        <li>
                            <span>강원</span>
                        </li>
                        <li>
                            <span>충북</span>
                        </li>
                        <li>
                            <span>충남</span>
                        </li>
                        <li>
                            <span>경북</span>
                        </li>
                        <li>
                            <span>경남</span>
                        </li>
                        <li>
                            <span>전북</span>
                        </li>
                        <li>
                            <span>전남</span>
                        </li>
                        <li>
                            <span>제주</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='sec01-btm'>
                <div className="view">
                    <div className="img">

                    </div>
                    <div className="desc">
                        <p>
                            서울숲
                            <i className="fa-regular fa-heart"></i>
                        </p>
                        <span>서울 성동구</span>
                    </div>
                </div>
                <div className="view">
                    <div className="img">

                    </div>
                    <div className="desc">
                        <p>
                            서울숲
                            <i className="fa-regular fa-heart"></i>
                        </p>
                        <span>서울 성동구</span>
                    </div>
                </div>
                <div className="view">
                    <div className="img">

                    </div>
                    <div className="desc">
                        <p>
                            서울숲
                            <i className="fa-regular fa-heart"></i>
                        </p>
                        <span>서울 성동구</span>
                    </div>
                </div>
                <div className="view">
                    <div className="img">

                    </div>
                    <div className="desc">
                        <p>
                            서울숲
                            <i className="fa-regular fa-heart"></i>
                        </p>
                        <span>서울 성동구</span>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Sec01;