import { useEffect, useRef, useState } from 'react';

const Seoul = () => {
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
                    <span>2023 한강페스티벌 - 여름</span>
                    <i className="fa-solid fa-chevron-down"
                        onClick={() => showDetail(0)}
                    ></i>
                </div>
                <div className="desc">
                    <div className="img">
                        <img src="https://festival.seoul.go.kr/files/2023/07/64b9da3b7aa387.27924375.jpg" alt="" />
                    </div>
                    <div className="text">
                        <ul>
                            <li>
                                <strong>기간: </strong>
                                <span>2023.8.4(금) ~ 8.20(일)</span>
                            </li>
                            <li>
                                <strong>장소: </strong>
                                <span>한강 수상 및 8개 한강공원 일대</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={detail === 1 ? 'news-item' : 'news-item close'}>
                <div className="title">
                    <span>2023 물총축제</span>
                    <i className="fa-solid fa-chevron-down"
                        onClick={() => showDetail(1)}
                    ></i>
                </div>
                <div className="desc">
                    <div className="img">
                        <img src="https://func.seoul.go.kr/upload/campaign/STORYINFESTIVAL/2/20230728162003.jpg" alt="" />
                    </div>
                    <div className="text">
                        <ul>
                            <li>
                                <strong>기간: </strong>
                                <span>2023.8.12(토) ~ 2023.8.13(일)</span>
                            </li>
                            <li>
                                <strong>장소: </strong>
                                <span>서울시 마포구 증산로 87 문화비축기지 내 문화마당</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={detail === 2 ? 'news-item' : 'news-item close'}>
                <div className="title">
                    <span>서울프린지페스티벌 2023</span>
                    <i className="fa-solid fa-chevron-down"
                        onClick={() => showDetail(2)}
                    ></i>
                </div>
                <div className="desc">
                    <div className="img">
                        <img src="https://www.seoulfringefestival.net:5632/images/poster2023_1.png" alt="" />
                    </div>
                    <div className="text">
                        <ul>
                            <li>
                                <strong>기간: </strong>
                                <span>2023.8.8(화) ~ 2023.8.27(일)</span>
                            </li>
                            <li>
                                <strong>장소: </strong>
                                <span>서울시 마포구 , 서대문구 일대 실내외 공간</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Seoul;