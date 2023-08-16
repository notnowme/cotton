// import { Swiper, SwiperSlide } from "swiper/react";
import joganae1 from "../../assets/joganae1.jpg";

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
          <span>조가네남원추어탕본점</span>
          <span className="infoAdress">서울 서초구</span>
        </div>
        <div className="infoContent">
          <div className="courseImgBox">
            <img className="courseImg" src={joganae1} />
            <div className="courseTag">
              <span>#강남 # 맛집 #강남맛집 #음식</span>
            </div>
          </div>
          <span className="title">상세 정보</span>
          <div className="line"></div>
          <pre>
            조가네 남원추어탕 본점은 신분당선 청계산입구역 2번 출구 부근에 있다.
            매장이 있는 상가건물에 자체 주차장이 있어 자동차로 이용하기
            편리하다. 이곳은 20년 역사의 추어탕 맛집으로 이 지역은 물론 청계산
            등산객들에게도 소문난 맛집으로 TV 맛집 프로그램에 소개되었다.
            추어탕을 주문하면 밑반찬으로 나오는 낙지젓은 따로 판매할 정도 식감이
            좋아 인기가 있다. 대표 메뉴로는 추어탕, 통 추어탕, 우렁 추어탕, 전복
            추어탕이 있다. 그 외 추어튀김, 간장게장, 솔잎 두부, 조가네 정식도
            많이 나간다. 주변에 청계산이 있어 식사 전후에 산책이나 등산하기에
            좋다.
          </pre>
          <div className="detailInfoBox">
            {/* left ul */}
            <ul>
              <li>
                <strong>문의 및 안내</strong>
                <span>02-571-7037</span>
              </li>
              <li>
                <strong>주소</strong>
                <span>서울특별시 서초구 청계산로 241</span>
              </li>
              <li>
                <strong>휴일</strong>
                <span>연중무휴</span>
              </li>
            </ul>
            {/* right ul */}
            <ul>
              <li>
                <strong>홈페이지</strong>
                <a href="http://parks.seoul.go.kr/parks/">
                  http://parks.seoul.go.kr/parks/
                </a>
              </li>
              <li>
                <strong>영업시간</strong>
                <span>10:00 ~ 21:00 </span>
                <span>(16:00~17:00 브레이크타임/ 20:30 라스트오더)</span>
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
