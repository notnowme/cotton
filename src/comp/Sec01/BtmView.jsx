import { useState } from 'react';
import TAPE from '../../assets/tape.png';

const View = ({index, data, tab}) => {
    console.log(data);
    return (
        <>
        {tab === 0 ?
            <div className="view">
                {/* <div className="tape">
                    <img src={TAPE} />
                </div> */}
                <div className="img">
                    <img src={data.firstimage} />
                </div>
                <div className="desc">
                    <p>
                        {data.title}
                        <i className="fa-regular fa-heart"></i>
                    </p>
                    <span>{data.addr1}</span>
                </div>
            </div>
         :
            <div className="view">
                {/* <div className="tape">
                    <img src={TAPE} />
                </div> */}
                <div className="img">
                    <img src={data.firstimage} />
                </div>
                <div className="desc">
                    <p>
                        {data.title}
                        <i className="fa-regular fa-heart"></i>
                    </p>
                    <span>{data.addr1}</span>
                </div>
            </div>
        }
        </>
    )
};

export default View;