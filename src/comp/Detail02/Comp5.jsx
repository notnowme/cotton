// import { Swiper, SwiperSlide } from "swiper/react";
import myin1 from "../../assets/myin3.jpg";

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
          <span>명인등심 청담본점</span>
          <span className="infoAdress">서울시 강남구</span>
        </div>
        <div className="infoContent">
          <div className="courseImgBox">
            <img className="courseImg" src={myin1} />
            <div className="courseTag">
              <span>
                #강남한우맛집#된장찌개맛집#등심맛집#명인등심#음식#청담동맛집
              </span>
            </div>
          </div>
          <span className="title">상세 정보</span>
          <div className="line"></div>
          <pre>
            명인등심 청담본점은 지하철 7호선 청담역 13번 출구 청담근린공원을
            지나 청담동 행정복지센터 맞은편에 있다. 이곳은 2009년 청담동 호텔
            뒷골목에서 장사를 시작한 1++등급을 취급하는 한우전문점이다. 주차는
            전용 주차장이 있어 발레파킹 서비스도 받을 수 있다. 내부는 룸과 홀로
            구성되어 있다. 대표 메뉴는 한우 특등심, 명인 갈비탕(청담 한정 점심
            메뉴)이다. 한우등심주물럭, 한우육사시미(화, 수, 목 한정), 한우육회,
            시골된장죽도 있다. 점심 특선은 한우등심불고기한상, 한우등심국밥 등을
            주문할 수 있다. 기본 반찬으로 명이나물, 나박김치, 양파샐러드,
            보쌈김치, 고추장아찌 기본 반찬이 제공된다. 콜키지 프리서비스는
            1병까지 할 수 있다. 식당 인근에 청담명품거리, 청담동거리,
            압구정로데오거리 등이 있어 연계 관광을 할 수 있다.
          </pre>
          <div className="detailInfoBox">
            {/* left ul */}
            <ul>
              <li>
                <strong>문의 및 안내</strong>
                <span>0507-1437-7828</span>
              </li>
              <li>
                <strong>주소</strong>
                <span>서울특별시 강남구 도산대로100길 13</span>
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
                <a href="https://www.instagram.com/myeongin_deungsim/">
                  https://www.instagram.com/myeongin_deungsim/
                </a>
              </li>
              <li>
                <strong>영업시간</strong>
                <span>11:30 ~ 22:00</span>
              </li>
              <li>
                <strong>주차</strong>
                <span>주차 가능</span>
                <span>발렛주차(3,000원)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comp1;
