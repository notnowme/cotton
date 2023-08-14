// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";

import Spot01 from "./Spot01";
import Feed from '../Feed/Feed';
import { useState } from "react";
import { feedHandle } from '../../atoms/atom';
import { useRecoilState } from 'recoil';
const Sec01Main = ({menu, menuHandle, area, areaHandle, theme, themeHandle, arr, forceUpdate}) => {
    const [viewFeed, setViewFeed] = useRecoilState(feedHandle);
    // 팝업창 보여주기 위한 리코일로 전역 변수.

    const [infoArr, setInfoArr] = useState([]);
    // 관광지 정보를 담을 변수.

    const areaArr = [
        '서울', '인천', '대전', '대구', '광주',
        '부산', '세종', '경기', '강원', '충북',
        '충남', '경북', '경남', '전북', '전남',
        '제주'
    ];
    // 지역 버튼들을 map으로 작성하기 위해 배열에다가 저장해둠.
    // map을 쓸 때는 key를 지정해 줘야 함.

    return (
    <>
    {viewFeed ? <Feed infoArr={infoArr} forceUpdate={forceUpdate}/> : null}
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
                                    <li key={index} className={area === index ? 'sel' : ''} onClick={()=>areaHandle(index)}>{data}</li>
                                ))
                            }
                        </ul>
                        {menu === 1 &&
                            <ul className='theme'>
                                <li className={theme === 0 ? 'sel' : ''}
                                    onClick={()=>themeHandle(0)}
                                >
                                    쇼핑
                                </li>
                                <li className={theme === 1 ? 'sel' : ''}
                                    onClick={()=>themeHandle(1)}
                                >
                                    자연
                                </li>
                                <li className={theme === 2 ? 'sel' : ''}
                                    onClick={()=>themeHandle(2)}
                                >
                                    액티비티
                                </li>
                                <li className={theme === 3 ? 'sel' : ''}
                                    onClick={()=>themeHandle(3)}
                                >
                                    맛집
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