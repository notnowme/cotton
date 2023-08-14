import '../../css/search.css';

import SEOUL from '../../assets/bgSeoul.png';
import GJ from '../../assets/bgGj.png';
import BUSAN from '../../assets/bgBusan.png';
import JEJU from '../../assets/bgJeju.png';
import TAPE from '../../assets/tape.png';
import noImg from '../../assets/noImage.png';

import imgShop from '../../assets/shopping.png'
import imgForest from '../../assets/forest.png'
import imgAct from '../../assets/activity.png'
import imgFood from '../../assets/food.png'

import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Feed from '../Feed/Feed';
import { feedHandle, userInfo } from '../../atoms/atom';
import { useRecoilState, useRecoilValue } from 'recoil';


const Search = () => {
    const location = useLocation();
    // url을 읽어오기 위한 기능.

    const searchParams = new URLSearchParams(location.search);
    // 쿼리 값을 찾아주는 기능.

    const areaCode = searchParams.get('area');
    // url?area=1 일 경우 1이란 값을 저장해줌.

    const [theme, setTheme] = useState(0);
    // 어느 테마를 보여주기 위한 변수 저장.

    const [arr, setArr] = useState([]);
    // 관광지 정보들을 저장하기 위한 변수.

    const [infoArr, setInfoArr] = useState([]);
    // 관광지 정보(단일)을 저장하기 위한 변수.

    const [viewFeed, setViewFeed] = useRecoilState(feedHandle);
    // 팝업창을 띄위기 위한 true/false 리코일 전역 변수.

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
    };
    // 서버와 통신해서 관광지 정보를 받아옴.

    useEffect(()=>{
        getAreaInfo(areaCode)
    },[theme]);
    // 테마 코드가 변경될 때마다 서버와 통신해서 정보를 갱신함.

    const themeHandle = (n) => {
        setTheme(prev => n);
    }
    // 버튼을 누르면 테마의 값이 바뀜. 0,1,2,3

    const getDetailData = async(code) => {
        setViewFeed(true);
        const getData = await fetch(`http://121.66.158.211:3001/detail?info=${code}`,{
            method: 'get',
            headers: {
                'Content-type':'application/json'
            }
        });
        const data = await getData.json();
        console.log(data);
        setInfoArr(prev => data[0]);
    };
    // 관광지를 클릭하면
    // 팝업창을 띄우고
    // 서버와 통신해서 정보를 받아옴.

    useEffect(()=>{
        const area = searchParams.get('area');
        setTheme(0);
        getAreaInfo(area);
        return () => {
            setArr([]);
        }
    },[areaCode])
    // 주소가 변경될 때마다 (url?area=1 이 area=2가 되는 경우)
    // 기본값으로 보여줄 테마를 0번(쇼핑)으로 해두는 역할.
    // 그리고 서버와 통신해서 정보를 갱신함.

    useEffect(()=>{
        const area = searchParams.get('area');
        let areaName = '';
        switch(area) {
            case '1':
                areaName = '서울';
                break;
            case '5':
                areaName = '광주'
                break;
            case '39':
                areaName = '제주'
                break;
            case '6':
                areaName = '부산'
                break;
        }
        const title = document.getElementsByTagName('title')[0];
        title.innerHTML = `${areaName} 지역 | COTTON CANDY`;
    },[areaCode]);
    // 위에 제목을 바꾸기 위한 함수.
    return (
        <>
        {viewFeed ? <Feed infoArr={infoArr} setInfoArr={setInfoArr}/> : null}
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
                    <div className="img">
                        <img src={imgShop} />
                    </div>
                    쇼핑
                </li>
                <li className={theme === 1 ? 'sel' : ''}
                    onClick={()=>themeHandle(1)}
                >
                    <div className="img">
                        <img src={imgForest} />
                    </div>
                    자연
                </li>
                <li className={theme === 2 ? 'sel' : ''}
                    onClick={()=>themeHandle(2)}
                >
                    <div className="img">
                        <img src={imgAct} />
                    </div>
                    액티비티
                </li>
                <li className={theme === 3 ? 'sel' : ''}
                    onClick={()=>themeHandle(3)}
                >
                    <div className="img">
                        <img src={imgFood} />
                    </div>
                    맛집
                </li>
            </ul>
            <div className="container">
                {
                    arr.map((data, index) => (
                        <div key={index} className="desc-item" onClick={()=>getDetailData(data.contentid)}>
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