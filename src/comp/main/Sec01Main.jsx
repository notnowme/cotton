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
    const areaArr = [
        '서울', '인천', '대전', '대구', '광주',
        '부산', '세종', '경기', '강원', '충북',
        '충남', '경북', '경남', '전북', '전남',
        '제주'
    ]
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
                            {
                                areaArr.map((data,index) => (
                                    <li className={area === index ? 'sel' : ''} onClick={()=>areaHandle(index)}>{data}</li>
                                ))
                            }
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