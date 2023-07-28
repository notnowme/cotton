import '../css/sec01.css';
import KOR from '../assets/korea.png'
import { useState, useRef, useEffect } from 'react';
function Sec01 () {
    const [tab, setTab] = useState(0);
    const ulRef = useRef(null);

    // 탭 클릭 시 sel 추가.
    const tapClick = (n) => {
        setTab(prev => n);
    }

    // 드래그 시작 시 첫 위치 기억 변수.
    const [posX, setPosX] = useState(0);

    // 슬라이드 위치 변수.
    const [left, setLeft] = useState(0);

    // 드래그 시작하면
    const dragStartHandler = e => {
        // 드래그 하면 투명 이미지 없애기
        const img = new Image();
        e.dataTransfer.setDragImage(img, 0, 0);

        // 커서 바꾸기.
        e.dataTransfer.effectAllowed = 'move';

        // 드래그 위치 바꾸기.
        setPosX(prev => e.clientX);
    };

    const dragHandler = e => {
        // 오른쪽, 왼쪽 구분해서 위치 조정.
        if(posX > e.clientX) {
            setLeft(prev => prev-1);
        } else {
            setLeft(prev => prev+1);
        }
    }
    const dragEndHandler = e => {
        // 드래그 끝났을 때 맨왼쪽이면 0, 맨오른쪽이면 컨텐츠 끝
        if(left <= -(ulRef.current.offsetWidth-400)) {
            setLeft(-960);
        } else if(left > 0) {
            setLeft(0);
        }
    }
    const dragOverHandler = e => {
        // 드래그 오버 다른 이벤트 방지.
        e.preventDefault();
    }
    const menuClick = (e) => {
        // 먼저 모든 sel 클래스를 지운 다음.
        // 클릭한 것만 sel 클래스 추가.
        const menuAll = document.querySelectorAll('.main-mid > ul > li');
        menuAll.forEach(el => el.classList.remove('sel'));
        e.target.classList.add('sel');
        console.log(e.target.innerText);
    }

    const slide = (n) => {
        if(n === 0) {
            setLeft(prev => prev+50);
        } else {
            setLeft(prev => prev-50);
        }
    }
    useEffect(()=>{
        // 지역/코스에 클릭 이벤트 추가...
        const menuAll = document.querySelectorAll('.main-mid > ul > li');
        menuAll.forEach(el => el.addEventListener('click',(e)=>menuClick(e)));
        return () => {
            // 클린업으로 클릭 이벤트 삭제...
            menuAll.forEach(el => el.removeEventListener('click',menuClick));
        }
    },[])
    return (
        <section id='sec01'>
            <div className='sec01-top'>
                <ul>
                    <li className={tab === 0 ? 'sel' : ''} onClick={()=>tapClick(0)}>
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
                            <i onClick={()=>slide(0)} className={posX > 0 ? 'fa-solid fa-circle-chevron-left nomore' : 'fa-solid fa-circle-chevron-left'}></i>
                            <i onClick={()=>slide(1)} className={posX < 0 ? "fa-solid fa-circle-chevron-right nomore" : "fa-solid fa-circle-chevron-right"}></i>
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
                        ref={ulRef}
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