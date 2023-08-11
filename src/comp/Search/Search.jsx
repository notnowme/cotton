import '../../css/search.css';

import SEOUL from '../../assets/bgSeoul.png';
import GJ from '../../assets/bgGj.png';
import BUSAN from '../../assets/bgBusan.png';
import JEJU from '../../assets/bgJeju.png';
import TAPE from '../../assets/tape.png';
import noImg from '../../assets/noImage.png';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';


const Search = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const areaCode = searchParams.get('area');
    const [theme, setTheme] = useState(0);

    const [arr, setArr] = useState([]);

    const getAreaInfo = async(code) => {
        const getData = await fetch(`http://121.66.158.211:3001/Search?areacode=${code}&tema=${theme}`,{
            method: 'get',
            headers: {
                'Content-type':'application/json'
            }
        });
        const data = await getData.json();
        console.log(data);
        setArr(prev => data);
    }

    useEffect(()=>{
        getAreaInfo(areaCode)
    },[theme])

    const themeHandle = (n) => {
        setTheme(prev => n);
    }

    useEffect(()=>{
        console.log('test');
        const area = searchParams.get('area');
        getAreaInfo(area);
        return () => {
            setArr([]);
        }
    },[areaCode])
    return (
        <>
        <div className="show-area">
            {areaCode === '1' && <img src={SEOUL} />}
            {areaCode === '5' && <img src={GJ} />}
            {areaCode === '39' && <img src={JEJU} />}
            {areaCode === '6' && <img src={BUSAN} />}
        </div>
        <div id='search'>
            <ul className="menu">
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
            <div className="container">
                {
                    arr.map((data, index) => (
                        <div key={index} className="desc-item">
                            <img src={TAPE} alt="" />
                            <div className="img">
                                <img src={data.firstimage ? data.firstimage : noImg} alt="" />
                            </div>
                            <div className="text">
                                <i className="fa-regular fa-heart"></i>
                                <span>{data.addr1}</span>
                                <span>{data.title}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
};

export default Search;