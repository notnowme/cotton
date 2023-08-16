// import { Swiper, SwiperSlide } from "swiper/react";
import myin1 from "../../assets/comp07.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../css/course.css";
// import { Navigation, Pagination } from "swiper/modules";

const Comp7 = () => {
  return (
    <>
      <div className="info">
        <div className="infoTitle">
          <span>자하싸리집</span>
          <span className="infoAdress">서울 종로구</span>
        </div>
        <div className="infoContent">
          <div className="courseImgBox">
            <img className="courseImg" src={myin1} />
            <div className="courseTag">
              <span>
              #음식#맛집#보양#염소#한옥#장독대#염소수육#돌백숙#식사후산책
              </span>
            </div>
          </div>
          <span className="title">상세 정보</span>
          <div className="line"></div>
          <pre>
          자하싸리집은 서울특별시 종로구 구기동에 있는 아주 오래된 보양탕 전문점이다.
          특히 염소 보양식으로 유명하다.
          매장은 한옥처럼 꾸며져 있고 대청마루 뒤에 장독대가 있어 맛에
          믿음이 간다. 음식 재료인 쌀, 김치, 고춧가루 모두 국내산만 사용한다.
          대표 메뉴는 전골, 수육, 염소 수육, 염소 전골, 염소탕이 있고
          추가로 돌백숙, 무침, 탕이 인기다.
          주차장은 마당 앞에 있고 주변에 후창공원, 감나무골공원, 참샘골 공원이 있어
          식사 전후에 둘러보기 좋다.
          </pre>
          <div className="detailInfoBox">
            {/* left ul */}
            <ul>
              <li>
                <strong>문의 및 안내</strong>
                <span>02-379-9911</span>
              </li>
              <li>
                <strong>주소</strong>
                <span>서울특별시 종로구 진흥로 463 싸리집</span>
              </li>
              <li>
                <strong>휴일</strong>
                <span>연중무휴</span>
              </li>
            </ul>
            {/* right ul */}
            <ul>
              <li>
                <strong>영업시간</strong>
                <span>11:30 ~ 21:30</span>
              </li>
              <li>
                <strong>주차</strong>
                <span>있음</span>
              </li>
              <li>
                <strong>대표메뉴</strong>
                <span>무침,수육,전골,탕</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comp7;
