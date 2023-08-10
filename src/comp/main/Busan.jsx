import { useEffect, useRef, useState } from 'react';

const Busan = () => {
    const [viewDetail, setViewDetail] = useState(false);
    // 화살표를 클릭하면 자세한 내용을 보여줄 여부의 true/false

    const [detail, setDetail] = useState(99);
    // 몇 번째 항목을 보여줄지 변수. 99번이면 아무것도 보여주지 않음.

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
                    <span>2023 다대포 썸머 페스타</span>
                    <i className="fa-solid fa-chevron-down"
                        onClick={() => showDetail(0)}
                    ></i>
                </div>
                <div className="desc">
                    <div className="img">
                        <img src="https://busandabom.net/images/contents/2023%20%EB%8B%A4%EB%8C%80%ED%8F%AC%20%EC%8D%B8%EB%A8%B8%20%ED%8E%98%EC%8A%A4%ED%83%80_01.jpg" alt="" />
                    </div>
                    <div className="text">
                        <ul>
                            <li>
                                <strong>기간: </strong>
                                <span>2023.7.29(토) ~ 2023.9.24(일)</span>
                            </li>
                            <li>
                                <strong>장소: </strong>
                                <span>다대포 해변공원 / 해수욕장</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={detail === 1 ? 'news-item' : 'news-item close'}>
                <div className="title">
                    <span>각양각색 컬러나라 x science@NIGHT</span>
                    <i className="fa-solid fa-chevron-down"
                        onClick={() => showDetail(1)}
                    ></i>
                </div>
                <div className="desc">
                    <div className="img">
                        <img src="https://busandabom.net/images/contents/%EA%B5%AD%EB%A6%BD%EB%B6%80%EC%82%B0%EA%B3%BC%ED%95%99%EA%B4%80%20%EA%B0%81%EC%96%91%EA%B0%81%EC%83%89%20%EC%BB%AC%EB%9F%AC%EB%82%98%EB%9D%BC%20x%20science@NIGHT_01.jpg" alt="" />
                    </div>
                    <div className="text">
                        <ul>
                            <li>
                                <strong>기간: </strong>
                                <span>2023.8.5(토) ~ 2023.8.26(토)</span>
                            </li>
                            <li>
                                <strong>장소: </strong>
                                <span>국립부산과학관 1층 김진재홀, 로비</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={detail === 2 ? 'news-item' : 'news-item close'}>
                <div className="title">
                    <span>딱! 부산 서구에서 오다가다 청년 버스킹</span>
                    <i className="fa-solid fa-chevron-down"
                        onClick={() => showDetail(2)}
                    ></i>
                </div>
                <div className="desc">
                    <div className="img">
                        <img src="https://busandabom.net/images/contents/%EB%94%B1!%20%EB%B6%80%EC%82%B0%20%EC%84%9C%EA%B5%AC%EC%97%90%EC%84%9C%20%EC%98%A4%EB%8B%A4%EA%B0%80%EB%8B%A4%20%EC%B2%AD%EB%85%84%20%EB%B2%84%EC%8A%A4%ED%82%B9_01.jpg" alt="" />
                    </div>
                    <div className="text">
                        <ul>
                            <li>
                                <strong>기간: </strong>
                                <span>2023.8.18(금) ~ 2023.8.26(토)</span>
                            </li>
                            <li>
                                <strong>장소: </strong>
                                <span>송도오션파크(힐링의광장) , 구덕운동장(열린마당)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Busan;