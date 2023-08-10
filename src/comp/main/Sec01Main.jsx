// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import Spot01 from "./Spot01";
import Feed from '../Feed/Feed';
import { useState } from "react";
import { feedHandle } from '../../atoms/atom';
import { useRecoilState } from 'recoil';
const Sec01Main = ({menu, menuHandle, area, areaHandle, theme, themeHandle, arr}) => {

    const [viewFeed, setViewFeed] = useRecoilState(feedHandle);
    const [infoArr, setInfoArr] = useState([]);
    return (
    <>
    {viewFeed ? <Feed infoArr={infoArr}/> : null}
        <div className="sec01-main">
                <ul>
                    <li className={menu === 0 ? 'sel' : ''} onClick={()=>menuHandle(0)}>인기 관광지</li>
                    <li className={menu === 1 ? 'sel' : ''} onClick={()=>menuHandle(1)}>인기 테마 코스</li>
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
                        {menu === 1 &&
                            <ul className='theme'>
                                <li className={theme === 0 ? 'sel' : ''}
                                    onClick={()=>themeHandle(0)}
                                >
                                    테마1
                                </li>
                                <li className={theme === 1 ? 'sel' : ''}
                                    onClick={()=>themeHandle(1)}
                                >
                                    테마2
                                </li>
                                <li className={theme === 2 ? 'sel' : ''}
                                    onClick={()=>themeHandle(2)}
                                >
                                    테마3
                                </li>
                                <li className={theme === 3 ? 'sel' : ''}
                                    onClick={()=>themeHandle(3)}
                                >
                                    테마4
                                </li>
                            </ul>
                        }
                    </div>
                    <div className="desc">
                        <div className='desc-container'>
                            <Swiper
                                slidesPerView={4}
                                spaceBetween={10}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                {
                                    arr.map((data, index) => (
                                        <SwiperSlide key={index}>
                                            <Spot01 data={data} setViewFeed={setViewFeed} setInfoArr={setInfoArr}/>
                                        </SwiperSlide>
                                    ))
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Sec01Main;