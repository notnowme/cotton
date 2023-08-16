// import { Swiper, SwiperSlide } from "swiper/react";
import huninneung1 from "../../assets/huninneung3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../css/course.css";
// import { Navigation, Pagination } from "swiper/modules";

const Comp1 = () => {
  return (
    <>
      <div className="info">
        <div className="infoTitle">
          <span>헌인릉 생태경관보전지역(오리나무림)</span>
          <span className="infoAdress">서울 서초구</span>
        </div>
        <div className="infoContent">
          <div className="courseImgBox">
            <img className="courseImg" src={huninneung1} />
            <div className="courseTag">
              <span>
                #관광지#나들이#당일치기여행#생태관광#수도권#오리나무림#자연#자연&숲#자연좋은곳#헌인릉생태경관보전지역#힐링
              </span>
            </div>
          </div>
          <span className="title">상세 정보</span>
          <div className="line"></div>
          <pre>
            헌인릉 아래쪽으로 17,000여 평에 오리나무가 군락을 이루고 있는데, 이
            숲은 2005년에 서울시에서 생태경관 보전지역으로 지정하였다. 헌인릉
            주변 오리나무숲 일대는 지하수가 풍부하고 토심이 깊어 서울에서는
            둔촌동 생태경관보전지역과 더불어 오리나무 군집을 형성하고 있다.
            오리나무림, 노란물봉선 등이 있는 생태경관보전지역으로 오색딱다구리가
            관찰된다.
          </pre>
          <div className="detailInfoBox">
            {/* left ul */}
            <ul>
              <li>
                <strong>문의 및 안내</strong>
                <span>02-445-0347</span>
              </li>
              <li>
                <strong>주소</strong>
                <span>서울특별시 서초구 헌인릉길 34</span>
              </li>
              <li>
                <strong>휴일</strong>
                <span>매주 월요일</span>
              </li>
            </ul>
            {/* right ul */}
            <ul>
              <li>
                <strong>입장료</strong>
                <span>만 25세 ~ 64세</span>
                <span>개인 1,000원 / 단체(10인 이상) 800원</span>
              </li>
              <li>
                <strong>이용시간</strong>
                <span>2~5월, 9~10월 09:00~18:00</span>
                <span>6~8월 09:00~18:30</span>
                <span>11~1월 09:00~17:30</span>
                <span>*매표는 마감 1시간 전까지</span>
              </li>
              <li>
                <strong>주차</strong>
                <span>주차 가능</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comp1;
