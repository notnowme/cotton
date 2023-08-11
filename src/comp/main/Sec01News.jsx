import Seoul from "./Seoul";
import Gwangju from "./Gwangju";
import Busan from "./Busan";

const Sec01News = ({news, newsHandle}) => {
    return (
        <div className="sec01-news">
                <h1>올해의 여행 소식</h1>
                <div className="menu-bar">
                    <span className={news === 0 ? 'sel' : ''} onClick={()=>newsHandle(0)}>서울</span>
                    <span className={news === 1 ? 'sel' : ''} onClick={()=>newsHandle(1)}>광주</span>
                    <span className={news === 2 ? 'sel' : ''} onClick={()=>newsHandle(2)}>부산</span>
                    <span className={news === 3 ? 'sel' : ''} onClick={()=>newsHandle(3)}>인천</span>
                    <span className={news === 4 ? 'sel' : ''} onClick={()=>newsHandle(4)}>대전</span>
                    <span className={news === 5 ? 'sel' : ''} onClick={()=>newsHandle(5)}>대구</span>
                    <span className={news === 6 ? 'sel' : ''} onClick={()=>newsHandle(6)}>세종</span>
                    <span className={news === 7 ? 'sel' : ''} onClick={()=>newsHandle(7)}>경기</span>
                    <span className={news === 8 ? 'sel' : ''} onClick={()=>newsHandle(8)}>강원</span>
                    <span className={news === 9 ? 'sel' : ''} onClick={()=>newsHandle(9)}>충북</span>
                    <span className={news === 10 ? 'sel' : ''} onClick={()=>newsHandle(10)}>충남</span>
                    <span className={news === 11 ? 'sel' : ''} onClick={()=>newsHandle(11)}>경북</span>
                    <span className={news === 12 ? 'sel' : ''} onClick={()=>newsHandle(12)}>경남</span>
                    <span className={news === 13 ? 'sel' : ''} onClick={()=>newsHandle(13)}>전북</span>
                    <span className={news === 14 ? 'sel' : ''} onClick={()=>newsHandle(14)}>전남</span>
                    <span className={news === 15 ? 'sel' : ''} onClick={()=>newsHandle(15)}>제주</span>
                </div>
                {news === 0 ? <Seoul /> : null}
                {news === 1 ? <Gwangju /> : null}
                {news === 2 ? <Busan /> : null}
            </div>
    )
};

export default Sec01News;