import MainTop from './MainTop';
import '../css/section01.css';
import { useEffect, useRef, useState } from 'react';
import Seoul from './main/Seoul';
import Gwangju from './main/Gwangju';
import Busan from './main/Busan';
const Index = () => {
    const [menu, setMenu] = useState(0);
    const [area, setArea] = useState(0);
    const [news, setNews] = useState(0);
    const menuHandle = (n) => {
        setMenu(prev => n);
    };
    const areaHandle = (n) => {
        setArea(prev => n);
    };
    const showDetail = (n) => {
        if(detail !== n && !viewDetail) {
            setViewDetail(true);
            setDetail(prev => n);
        } else if(detail !== n && viewDetail) {
            setDetail(prev => n);
        } else if(detail === n && viewDetail) {
            setDetail(prev => 99);
            setViewDetail(false);
        }
    }
    const newsHandle = (n) => {
        setNews(prev => n);
    }
    return (
        <section id="sec01">
            <MainTop />
            <div className="sec01-main">
                <ul>
                    <li className={menu === 0 ? 'sel' : ''} onClick={()=>menuHandle(0)}>인기 관광지</li>
                    <li className={menu === 1 ? 'sel' : ''} onClick={()=>menuHandle(1)}>인기 코스</li>
                </ul>
                <div className="sec01-content">
                    <div className="item">
                        <ul>
                            <li className={area === 0 ? 'sel' : ''} onClick={()=>areaHandle(0)}>서울</li>
                            <li className={area === 1 ? 'sel' : ''} onClick={()=>areaHandle(1)}>인천</li>
                            <li className={area === 2 ? 'sel' : ''} onClick={()=>areaHandle(2)}>대전</li>
                            <li className={area === 3 ? 'sel' : ''} onClick={()=>areaHandle(3)}>대구</li>
                            <li className={area === 4 ? 'sel' : ''} onClick={()=>areaHandle(4)}>광주</li>
                            <li className={area === 5 ? 'sel' : ''} onClick={()=>areaHandle(5)}>부산</li>
                            <li className={area === 6 ? 'sel' : ''} onClick={()=>areaHandle(6)}>세종</li>
                            <li className={area === 7 ? 'sel' : ''} onClick={()=>areaHandle(7)}>경기</li>
                            <li className={area === 8 ? 'sel' : ''} onClick={()=>areaHandle(8)}>강원</li>
                            <li className={area === 9 ? 'sel' : ''} onClick={()=>areaHandle(9)}>충북</li>
                            <li className={area === 10 ? 'sel' : ''} onClick={()=>areaHandle(10)}>충남</li>
                            <li className={area === 11 ? 'sel' : ''} onClick={()=>areaHandle(11)}>경북</li>
                            <li className={area === 12 ? 'sel' : ''} onClick={()=>areaHandle(12)}>경남</li>
                            <li className={area === 13 ? 'sel' : ''} onClick={()=>areaHandle(13)}>전북</li>
                            <li className={area === 14 ? 'sel' : ''} onClick={()=>areaHandle(14)}>전남</li>
                            <li className={area === 15 ? 'sel' : ''} onClick={()=>areaHandle(15)}>제주</li>
                        </ul>
                    </div>
                    <div className="desc">
                        <div className="desc-item">
                            <div className="img">

                            </div>
                            <div className="desc-text">
                                <i className="fa-regular fa-heart"></i>
                                <span className='text'>서울 강남구</span>
                                <span className='text'>가나다라마바사</span>
                            </div>
                        </div>
                        <div className="desc-item">
                            <div className="img">

                            </div>
                            <div className="desc-text">
                                <i className="fa-regular fa-heart"></i>
                                <span className='text'>서울 강남구</span>
                                <span className='text'>가나다라마바사</span>
                            </div>
                        </div>
                        <div className="desc-item">
                            <div className="img">

                            </div>
                            <div className="desc-text">
                                <i className="fa-regular fa-heart"></i>
                                <span className='text'>서울 강남구</span>
                                <span className='text'>가나다라마바사</span>
                            </div>
                        </div>
                        <div className="desc-item">
                            <div className="img">

                            </div>
                            <div className="desc-text">
                                <i className="fa-regular fa-heart"></i>
                                <span className='text'>서울 강남구</span>
                                <span className='text'>가나다라마바사</span>
                            </div>
                        </div>
                        <div className="desc-item">
                            <div className="img">

                            </div>
                            <div className="desc-text">
                                <i className="fa-regular fa-heart"></i>
                                <span className='text'>서울 강남구</span>
                                <span className='text'>가나다라마바사</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ------------------ */}
            <div className="sec01-news">
                <h1>올해의 여행 소식</h1>
                <div className="menu-bar">
                    <span className={news === 0 ? 'sel' : ''} onClick={()=>newsHandle(0)}>서울</span>
                    <span className={news === 1 ? 'sel' : ''} onClick={()=>newsHandle(1)}>광주</span>
                    <span className={news === 2 ? 'sel' : ''} onClick={()=>newsHandle(2)}>부산</span>
                    <span className={news === 3 ? 'sel' : ''} onClick={()=>newsHandle(3)}>인천</span>
                    <span className={news === 4 ? 'sel' : ''} onClick={()=>newsHandle(4)}>대전</span>
                    <span className={news === 5 ? 'sel' : ''} onClick={()=>newsHandle(5)}>대구</span>
                    <span className={news === 6 ? 'sel' : ''} onClick={()=>newsHandle(6)}>세종</span>
                    <span className={news === 7 ? 'sel' : ''} onClick={()=>newsHandle(7)}>경기</span>
                    <span className={news === 8 ? 'sel' : ''} onClick={()=>newsHandle(8)}>강원</span>
                    <span className={news === 9 ? 'sel' : ''} onClick={()=>newsHandle(9)}>충북</span>
                    <span className={news === 10 ? 'sel' : ''} onClick={()=>newsHandle(10)}>충남</span>
                    <span className={news === 11 ? 'sel' : ''} onClick={()=>newsHandle(11)}>경북</span>
                    <span className={news === 12 ? 'sel' : ''} onClick={()=>newsHandle(12)}>경남</span>
                    <span className={news === 13 ? 'sel' : ''} onClick={()=>newsHandle(13)}>전북</span>
                    <span className={news === 14 ? 'sel' : ''} onClick={()=>newsHandle(14)}>전남</span>
                    <span className={news === 15 ? 'sel' : ''} onClick={()=>newsHandle(15)}>제주</span>
                </div>
                {news === 0 ? <Seoul /> : null}
                {news === 1 ? <Gwangju /> : null}
                {news === 2 ? <Busan /> : null}
            </div>
        </section>
    )
};

export default Index;

// 서울 인천 대전 대구 광주 부산 울산 세종 경기 강원 충북 충남 경북 경남 전북 전남 제주