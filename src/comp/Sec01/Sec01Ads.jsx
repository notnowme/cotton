import '../../css/Sec01Ads.css';
import IMG from '../../assets/area_main.jpg'
import area01 from '../../assets/area01.png'
import area02 from '../../assets/area02.png'
import area03 from '../../assets/area03.jpg'
import area04 from '../../assets/area04.jpg'

const Sec01Ads = () => {
    return (
        <div className="sec01Ads">
            <div className="Ads-top">
                <div className="top-left">
                    <img src={IMG} alt="" />
                </div>
                <div className="top-right">
                    <span>오늘의 여행 소식</span>
                    <ul>
                        <li>
                            <span>
                                2023 부산 바다 축제
                            </span>
                            <span>
                                2023. 08. 01 ~ 2023. 08. 06
                            </span>
                        </li>
                        <li>
                            <span>
                                2023 서울 축제 지도 - 여름편
                            </span>
                            <span>
                                2023. 08. 11 ~ 2023. 08. 27
                            </span>
                        </li>
                        <li>
                            <span>
                                광주 추억의 충장 축제
                            </span>
                            <span>
                                2023. 10. 05 ~ 2023. 10. 09
                            </span>
                        </li>
                        <li>
                            <span>
                                2023 제주 감귤 박람회
                            </span>
                            <span>
                                2023. 11. 30 ~ 2023. 12. 04
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="Ads-btm">
                <div className="item">
                    <img src={area01} />
                </div>
                <div className="item">
                    <img src={area02} />
                </div>
                <div className="item">
                    <img src={area03} />
                </div>
                <div className="item">
                    <img src={area04} />
                </div>
            </div>
        </div>
    );
};

export default Sec01Ads;