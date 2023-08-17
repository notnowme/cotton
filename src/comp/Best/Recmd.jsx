import { useEffect, useState } from 'react';
import '../../css/recmd.css';
import MapSeoul from './MapSeoul';

import SEOUL from '../../assets/main_map_seoul.png';
import GJ from '../../assets/main_map_gwangju.png';
import BUSAN from '../../assets/main_map_busan.png';
import JEJU from '../../assets/main_map_jeju.png';

import gj01 from '../../assets/gj-01.jpg';
import gj02 from '../../assets/gj-02.jpg';
import gj03 from '../../assets/gj-03.jpg';

import busan01 from '../../assets/busan-01.png';
import busan02 from '../../assets/busan-02.png';
import busan03 from '../../assets/busan-03.png';

import jeju01 from '../../assets/jeju-01.png';
import jeju02 from '../../assets/jeju-02.png';
import jeju03 from '../../assets/jeju-03.png';

import seoul01 from '../../assets/seoul-01.png';
import seoul02 from '../../assets/seoul-02.png';
import seoul03 from '../../assets/seoul-03.png';

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
    const getHot = async(num) => {
        // 0 서울
        // 1 광주
        // 2 제주
        // 3 부산
        const getData = await fetch(`http://121.66.158.211:3001/hotPlace`,
            {
                method: 'post',
                headers: {
                    'Content-type':'application/json'
                },
                body: JSON.stringify({
                    code: num.toString()
                })
            }
        );
        const result = await getData.json();
        setArr(prev => result);
    }
    useEffect(()=>{
        console.log(area + ' - 데이터 변경...');
        //여기다가 암튼 암튼임...
        getHot(area);

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
                    {area === 3 && <img src={BUSAN} alt="" />}
                    {area === 2 && <img src={JEJU} alt="" />}
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
                <div className={area === 3 ? 'map-busan2 sel' : 'map-busan2'}
                    onMouseEnter={showBusan}
                    onMouseLeave={hideBusan}
                    onClick={() => setArea(3)}
                >
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="map-busan"
                    style={{ display: hoverBusan || area === 3 ? 'block' : 'none' }}
                >
                    <div className="location">
                        <span>부산</span>
                    </div>
                </div>
                <div className={area === 2 ? 'map-jeju2 sel' : 'map-jeju2'}
                    onMouseEnter={showJeju}
                    onMouseLeave={hideJeju}
                    onClick={() => setArea(2)}
                >
                    <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="map-jeju"
                    style={{ display: hoverJeju || area === 2 ? 'block' : 'none' }}
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
                        {
                            arr.map((data, index) => (
                                index < 3 && (
                                    <div className="items" key={index}>
                                        <div className="img">
                                            
                                            { area === 0 && index === 0 && <img src={seoul01} /> }
                                            { area === 0 && index === 1 && <img src={seoul02} /> }
                                            { area === 0 && index === 2 && <img src={seoul03} /> }

                                            { area === 1 && index === 0 && <img src={gj01} /> }
                                            { area === 1 && index === 1 && <img src={gj02} /> }
                                            { area === 1 && index === 2 && <img src={gj03} /> }

                                            { area === 2 && index === 0 && <img src={jeju01} /> }
                                            { area === 2 && index === 1 && <img src={jeju02} /> }
                                            { area === 2 && index === 2 && <img src={jeju03} /> }

                                            { area === 3 && index === 0 && <img src={busan01} /> }
                                            { area === 3 && index === 1 && <img src={busan02} /> }
                                            { area === 3 && index === 2 && <img src={busan03} /> }
                                        </div>
                                        <div className="text">
                                            <span className='rank'>{index+1}위</span>
                                            <div className="detail">
                                                <span className='store'>{data.name}</span>
                                                <span className='addr'>{data.addr}</span>
                                            </div>
                                        </div>
                                    </div>

                                )
                            ))
                        }
                    </div>
                    <div className="under-item">
                        <div className="left">
                            {
                                arr.map((data, index) => (
                                    index >= 3 && index < 7 && (
                                        <div className="items" key={index}>
                                            <span>{index + 1}위</span>
                                            <div>
                                                <span className='store'>{data.name}</span>
                                                <span className='addr'>{data.addr}</span>
                                            </div>
                                        </div>
                                    )
                                ))
                            }
                        </div>
                        <div className="right">
                            {
                                arr.map((data, index) => (
                                    index >= 7 && (
                                        <div className="items" key={index}>
                                            <span>{index + 1}위</span>
                                            <div>
                                                <span className='store'>{data.name}</span>
                                                <span className='addr'>{data.addr}</span>
                                            </div>
                                        </div>
                                    )
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Recmd;