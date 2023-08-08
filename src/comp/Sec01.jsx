import '../css/sec01.css';
import KOR from '../assets/korea.png'
import { useState, useRef, useEffect } from 'react';
import Sec01_Top from './Sec01/sec01-top';
import MainMid from './Sec01/Main-mid';
import BtmView from './Sec01/BtmView';
import Sec01Ads from './Sec01/Sec01Ads';
import MainTop from './MainTop';
import Content01 from './Test/Content01';
function Sec01 () {
    const [tab, setTab] = useState(0);
    const ulRef = useRef(null);
    const [area, setArea] = useState('서울');
    const [areaDetail, setAreaDetail] = useState('인기 여행지');
    // 드래그 시작 시 첫 위치 기억 변수.
    const [posX, setPosX] = useState(0);

    // 슬라이드 위치 변수.
    const [left, setLeft] = useState(0);

    // 탭 클릭 시 sel 추가.
    const tapClick = (n) => {
        let text = '';
        let detail = '';
        if(n === 0) {
            text = '서울';
            detail = '인기 여행지';
        } else {
            text = '연인';
            detail = '인기 여행 코스';
        }
        setTab(prev => n);
        setArea(prev => text);
        setAreaDetail(prev => detail);
        setLeft(prev => 0);
    }


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
        if(tab === 1) return;
        // 오른쪽, 왼쪽 구분해서 위치 조정.
        if(posX > e.clientX) {
            setLeft(prev => prev-1);
        } else {
            setLeft(prev => prev+1);
        }
    }
    const dragEndHandler = e => {
        if(tab === 1) return;
        // 드래그 끝났을 때 맨왼쪽이면 0, 맨오른쪽이면 컨텐츠 끝
        if(left <= -(ulRef.current.offsetWidth-400)) {
            setLeft(-1150);
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
        if(e.target.nodeName === 'IMG') {
            e.target.parentElement.classList.add('sel');
            setArea(prev => e.target.parentElement.innerText);
        } else {
            e.target.classList.add('sel');
            setArea(prev => e.target.innerText);
        }
    }
    const [areaData, setAreaData] = useState([]);
    const getAreaData = async(n, code) => {
        const getData = await fetch(`http://121.66.158.211:3001/${code}?info=${n}`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
        const data = await getData.json();
        setAreaData(data);
    };
    useEffect(()=>{
        // 처음 접속했을 때 서울을 기본값으로 보여주기.
        getAreaData(1, 'areas');

        return () => {
            // 클린업해둬?
            setAreaData([]);
        }
    },[]);

    useEffect(()=>{
        // tab 바뀌는 것에 의존해서 서울 기본 값 혹은 연인 기본 값.
        if(tab === 0) {
            getAreaData(1);
            console.log('ss')
        } else {
            getAreaData('A001', 'ranCos');
            //현재 없으므로 임시로 서울.
            console.log('bb')
        }
        return () => {
            setAreaData([]);
            //일단 클린업?
        }
    },[tab]);

    useEffect(()=>{
        let num = 1;
        switch(area) {
            case "서울":
                num = 1;
                break;
            case "부산":
                num = 6;
                break;
            case "광주":
                num = 5;
                break;
            case "제주":
                num = 39;
                break;
        }
        getAreaData(num, 'areas');
        return () => {
            setAreaData([]);
            //일단 클린업?
        }
    },[area]);
    
//#017858
//#25ac84
    const getAreaCodeData = (area) => {
        let num = 1;
        switch(area) {
            case "서울":
                num = 1;
                break;
            case "부산":
                num = 1;
                break;
            case "광주":
                num = 1;
                break;
            case "제주도":
                num = 1;
                break;
        }
        getAreaData(num);
    };
    useEffect(()=>{
        // 지역/코스에 클릭 이벤트 추가...
        const menuAll = document.querySelectorAll('.main-mid > ul > li');
        menuAll.forEach(el => el.addEventListener('click',(e)=>menuClick(e)));
        return () => {
            // 클린업으로 클릭 이벤트 삭제...
            menuAll.forEach(el => el.removeEventListener('click',menuClick));
        }
    },[tab])
    return (
        <section id='sec01'>
            <MainTop />
            {/* <Content01 /> */}
        <div className="sec01-container">
            <div className='sec01-top'>
                <Sec01_Top
                    tab={tab}
                    tapClick={tapClick}
                    KOR={KOR}
                />
            </div>
            <div className='sec01-main'>
                <div className='main-top'>
                    <div className="title">
                        <p>
                            <span>{area}</span> {areaDetail}
                        </p>
                    </div>
                </div>
                <MainMid
                    dragStartHandler={dragStartHandler}
                    dragHandler={dragHandler}
                    dragEndHandler={dragEndHandler}
                    dragOverHandler={dragOverHandler}
                    left={left}
                    ulRef={ulRef}
                    tab={tab}
                />
            </div>
            { tab === 0 ?
                <div className='sec01-btm'>
                    {
                        areaData.map((data, index) => (
                            <BtmView key={index} index={index} data={data} tab={0} />
                        ))
                    }
                </div>
                :
                <div className='sec01-btm'>
                    {
                        areaData.map((data, index) => (
                            <BtmView key={index} index={index} data={data} tab={1} />
                        ))
                    }
                </div>
            }
            <Sec01Ads />
        </div>
        </section>
    )
};

export default Sec01;