import Spots from "./Spots";
import {Seoul, Gwangju, Busan, Incheon, Gwangwon, Gyeongi, Daegu, Daejeon, Sejong} from '../../datas/info';
import { useEffect, useState } from "react";

const Sec01News = ({news, newsHandle}) => {
    const [viewDetail, setViewDetail] = useState(false);
    // 축제 정보를 보여주기 위한 true/false

    const [detail, setDetail] = useState(99);
    // 몇 번째 정보를 보여주기 위한 변수 저장.

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
    // 어느 지역 정보를 보여주기 위한 변수 저장.

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
        return () => {
            // useEffect 안의 return은 클린업 함수... 자세히는 아직 모름.
            setDetail(99);
            setViewDetail(false);
            // 지역 버튼 누를 때마다 변경되므로
            // 변경될 때마다 초기값으로 해두기.
        }
    },[news]);

    const areaArr = [
        '서울', '광주', '부산', '인천', '대전',
        '대구', '세종', '경기', '강원', '충북',
        '충남', '경북', '경남', '전북', '전남',
        '제주'
    ];
    // 메뉴 버튼을 그리기 위한 지역들 배열로 저장.
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
                        <Spots
                            key={index}
                            data={data}
                            index={index}
                            detail={detail}
                            showDetail={showDetail}
                        />
                    ))
                }
            </div>
    )
};

export default Sec01News;