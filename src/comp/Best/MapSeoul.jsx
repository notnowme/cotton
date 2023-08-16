import SEOUL from '../../assets/main_map_seoul.png';
import { useState } from 'react';

const MapSeoul = () => {
    const [hover, setHover] = useState(false);
    const showLocation = () => {
        setHover(true);
    }
    const hideLocation = () => {
        setHover(false);
    }
    return (
        <div className="maps">
            <div className="map-img">
                <img src={SEOUL} alt="" />
            </div>
            <div className="map-seoul2"
                onMouseEnter={showLocation}
                onMouseLeave={hideLocation}
            ></div>
            <div className="map-seoul"
                style={{ display: hover ? 'block' : 'none' }}
            >
                <div className="location">
                    <span>서울</span>
                </div>
            </div>
        </div>
    )
};

export default MapSeoul;