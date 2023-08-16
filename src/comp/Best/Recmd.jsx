import { useEffect, useState } from 'react';
import '../../css/recmd.css';
import MapSeoul from './MapSeoul';

import SEOUL from '../../assets/main_map_seoul.png';
import GJ from '../../assets/main_map_gwangju.png';
import BUSAN from '../../assets/main_map_busan.png';
import JEJU from '../../assets/main_map_jeju.png';

const Recmd = () => {
    const [area, setArea] = useState(0);
    const [arr, setArr] = useState([]);

    const [hoverSeoul, setHoverSeoul] = useState(false);
    const [hoverGJ, setHoverGJ] = useState(false);
    const [hoverBusan, setHoverBusan] = useState(false);
    const [hoverJeju, setHoverJeju] = useState(false);
    const showSeoul = () => {
        setHoverSeoul(true);
    }
    const hideSeoul = () => {
        setHoverSeoul(false);
    }
    const showGj = () => {
        setHoverGJ(true);
    }
    const hideGj = () => {
        setHoverGJ(false);
    }
    const showBusan = () => {
        setHoverBusan(true);
    }
    const hideBusan = () => {
        setHoverBusan(false);
    }
    const showJeju = () => {
        setHoverJeju(true);
    }
    const hideJeju = () => {
        setHoverJeju(false);
    }
    useEffect(()=>{
        console.log(area + ' - 데이터 변경...');
        //여기다가 암튼 암튼임...

        // index가 3 미만일 때까지는
        // top 아이템에 집어 넣고...
        // 그 외에는 언더 아이템에 집어넣기...
        // {index < 3 ? () : ()} 이러면 되지 않을까요?
        // 그리고 3 안에서도 index === 0 && <img src={1위} /> 하면 되겠죠...?
        
    },[area])
    return (
        <div id='recmd'>
            <div className="maps">
                <div className="map-img">
                    {area === 0 && <img src={SEOUL} alt="" />}
                    {area === 1 && <img src={GJ} alt="" />}
                    {area === 2 && <img src={BUSAN} alt="" />}
                    {area === 3 && <img src={JEJU} alt="" />}
                </div>
                <div className={area === 0 ? 'map-seoul2 sel' : 'map-seoul2'}
                    onMouseEnter={showSeoul}
                    onMouseLeave={hideSeoul}
                    onClick={() => setArea(0)}
                >
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="map-seoul"
                    style={{ display: hoverSeoul || area === 0 ? 'block' : 'none' }}
                >
                    <div className="location">
                        <span>서울</span>
                    </div>
                </div>
                <div className={area === 1 ? 'map-gj2 sel' : 'map-gj2'}
                    onMouseEnter={showGj}
                    onMouseLeave={hideGj}
                    onClick={() => setArea(1)}
                >
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="map-gj"
                    style={{ display: hoverGJ || area === 1 ? 'block' : 'none' }}
                >
                    <div className="location">
                        <span>광주</span>
                    </div>
                </div>
                <div className={area === 2 ? 'map-busan2 sel' : 'map-busan2'}
                    onMouseEnter={showBusan}
                    onMouseLeave={hideBusan}
                    onClick={() => setArea(2)}
                >
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="map-busan"
                    style={{ display: hoverBusan || area === 2 ? 'block' : 'none' }}
                >
                    <div className="location">
                        <span>부산</span>
                    </div>
                </div>
                <div className={area === 3 ? 'map-jeju2 sel' : 'map-jeju2'}
                    onMouseEnter={showJeju}
                    onMouseLeave={hideJeju}
                    onClick={() => setArea(3)}
                >
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="map-jeju"
                    style={{ display: hoverJeju || area === 3 ? 'block' : 'none' }}
                >
                    <div className="location">
                        <span>제주</span>
                    </div>
                </div>
            </div>
            <div className="store-info">
                <div className="title">
                    <h1>맛집 랭킹 <span>10</span></h1>
                    <span>맛집을 알려드립니다!</span>
                </div>
                <div className="desc">
                    <div className="top-item">
                        <div className="items">
                            <div className="img">

                            </div>
                            <div className="text">
                                <span className='rank'>1위</span>
                                <div className="detail">
                                    <span className='store'>가게 이름</span>
                                    <span className='addr'>가게 주소</span>
                                </div>
                            </div>
                        </div>
                        <div className="items">
                            <div className="img">

                            </div>
                            <div className="text">
                                <span className='rank'>2위</span>
                                <div className="detail">
                                    <span className='store'>가게 이름</span>
                                    <span className='addr'>가게 주소</span>
                                </div>
                            </div>
                        </div>
                        <div className="items">
                            <div className="img">

                            </div>
                            <div className="text">
                                <span className='rank'>3위</span>
                                <div className="detail">
                                    <span className='store'>가게 이름</span>
                                    <span className='addr'>가게 주소</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="under-item">
                        <div className="left">
                            <div className="items">
                                <span>4위</span>
                                <div>
                                    <span className='store'>가게 이름</span>
                                    <span className='addr'>가게 주소</span>
                                </div>
                            </div>
                            <div className="items">
                                <span>5위</span>
                                <div>
                                    <span className='store'>가게 이름</span>
                                    <span className='addr'>가게 주소</span>
                                </div>
                            </div>
                            <div className="items">
                                <span>6위</span>
                                <div>
                                    <span className='store'>가게 이름</span>
                                    <span className='addr'>가게 주소</span>
                                </div>
                            </div>
                            <div className="items">
                                <span>7위</span>
                                <div>
                                    <span className='store'>가게 이름</span>
                                    <span className='addr'>가게 주소</span>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="items">
                                <span>8위</span>
                                <div>
                                    <span className='store'>가게 이름</span>
                                    <span className='addr'>가게 주소</span>
                                </div>
                            </div>
                            <div className="items">
                                <span>9위</span>
                                <div>
                                    <span className='store'>가게 이름</span>
                                    <span className='addr'>가게 주소</span>
                                </div>
                            </div>
                            <div className="items">
                                <span>10위</span>
                                <div>
                                    <span className='store'>가게 이름</span>
                                    <span className='addr'>가게 주소</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Recmd;