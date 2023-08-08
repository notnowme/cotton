import { useEffect, useRef, useState } from 'react';

const Gwangju = () => {
    const [viewDetail, setViewDetail] = useState(false);
    const [detail, setDetail] = useState(99);
    const showDetail = (n) => {
        if (detail !== n && !viewDetail) {
            setViewDetail(true);
            setDetail(prev => n);
        } else if (detail !== n && viewDetail) {
            setDetail(prev => n);
        } else if (detail === n && viewDetail) {
            setDetail(prev => 99);
            setViewDetail(false);
        }
    }
    return (
        <div className="news-desc">
            <div className={detail === 0 ? 'news-item' : 'news-item close'}>
                <div className="title">
                    <span>2023 ACC 월드뮤직페스티벌</span>
                    <i className="fa-solid fa-chevron-down"
                        onClick={() => showDetail(0)}
                    ></i>
                </div>
                <div className="desc">
                    <div className="img">
                        <img src="https://dmgj.kr/upload/event/20230718153330061.webp" alt="" />
                    </div>
                    <div className="text">
                        <ul>
                            <li>
                                <strong>기간: </strong>
                                <span>2023.8.25(금) ~ 2023.8.27(일)</span>
                            </li>
                            <li>
                                <strong>장소: </strong>
                                <span>국립아시아문화전당 예술극장 및 아시아문화광장 등</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={detail === 1 ? 'news-item' : 'news-item close'}>
                <div className="title">
                    <span>2023 Beer Fest Gwangju</span>
                    <i className="fa-solid fa-chevron-down"
                        onClick={() => showDetail(1)}
                    ></i>
                </div>
                <div className="desc">
                    <div className="img">
                        <img src="https://dmgj.kr/upload/event/20230316134343605.webp" alt="" />
                    </div>
                    <div className="text">
                        <ul>
                            <li>
                                <strong>기간: </strong>
                                <span>2023.8.9(수) ~ 2023.8.12(토)</span>
                            </li>
                            <li>
                                <strong>장소: </strong>
                                <span>김대중컨벤션센터 전시장 및 야외광장</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={detail === 2 ? 'news-item' : 'news-item close'}>
                <div className="title">
                    <span>예술숲콘서트</span>
                    <i className="fa-solid fa-chevron-down"
                        onClick={() => showDetail(2)}
                    ></i>
                </div>
                <div className="desc">
                    <div className="img">
                        <img src="https://dmgj.kr/upload/event/20230530111848_1.webp" alt="" />
                    </div>
                    <div className="text">
                        <ul>
                            <li>
                                <strong>기간: </strong>
                                <span>2023.6.3(토) ~ 2023.9.9(토)</span>
                            </li>
                            <li>
                                <strong>장소: </strong>
                                <span>1층 상상홀</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Gwangju;