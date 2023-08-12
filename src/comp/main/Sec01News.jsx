import SpotItem from "./Seoul";
// import Gwangju from "./Gwangju";
// import Busan from "./Busan";
import {Seoul, Gwangju, Busan, Incheon, Gwangwon, Gyeongi, Daegu, Daejeon, Sejong} from '../../datas/info';
import { useEffect, useState } from "react";

const Sec01News = ({news, newsHandle}) => {
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
    };

    const [arr, setArr] = useState(Seoul);

    useEffect(()=>{
        switch(news) {
            case 0:
                setArr(prev => Seoul);
                break;
            case 1:
                setArr(prev => Gwangju);
                break;
            case 2:
                setArr(prev => Busan);
                break;
            case 3:
                setArr(prev => Incheon);
                break;
            case 4:
                setArr(prev => Daejeon);
                break;
            case 5:
                setArr(prev => Daegu);
                break;
            case 6:
                setArr(prev => Sejong);
                break;
            case 7:
                setArr(prev => Gyeongi);
                break;
            case 8:
                setArr(prev => Gwangwon);
                break;
        }
    },[news])
    const areaArr = [
        '서울', '광주', '부산', '인천', '대전',
        '대구', '세종', '경기', '강원', '충북',
        '충남', '경북', '경남', '전북', '전남',
        '제주'
    ]
    return (
        <div className="sec01-news">
                <h1>올해의 여행 소식</h1>
                <div className="menu-bar">
                    {areaArr.map((data, index) => (
                        <span key={index}
                            className={news === index ? 'sel' : ''}
                            onClick={()=>newsHandle(index)}
                        >
                            {data}
                        </span>
                    ))}
                </div>
                {
                    arr.map((data,index) => (
                        <SpotItem
                            key={index}
                            data={data}
                            index={index}
                            detail={detail}
                            setDetail={setDetail}
                            setViewDetail={setViewDetail}
                            viewDetail={viewDetail}
                            showDetail={showDetail}
                        />
                    ))
                }
            </div>
    )
};

export default Sec01News;