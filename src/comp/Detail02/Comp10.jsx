// import { Swiper, SwiperSlide } from "swiper/react";
import myin1 from "../../assets/comp10.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../css/course.css";
// import { Navigation, Pagination } from "swiper/modules";

const Comp10 = () => {
  return (
    <>
      <div className="info">
        <div className="infoTitle">
          <span>탭퍼블릭</span>
          <span className="infoAdress">서울 종로구</span>
        </div>
        <div className="infoContent">
          <div className="courseImgBox">
            <img className="courseImg" src={myin1} />
            <div className="courseTag">
              <span>
              #맛집#서울맛집#수도권#수제맥주#음식#음식점#치킨#탭퍼블릭
              </span>
            </div>
          </div>
          <span className="title">상세 정보</span>
          <div className="line"></div>
          <pre>
          국내 최다 60여 종의 수제 맥주를 고객이 직접 원하는 양을 따라 마실 수 있는 아시아·국내 최초 Self Pour System을 적용하였으며, 전문 셰프의 수제요리는 퀄리티가 높지만 반대로 가격은 저렴한 레스토랑 펍이다.
          </pre>
          <div className="detailInfoBox">
            {/* left ul */}
            <ul>
              <li>
                <strong>문의 및 안내</strong>
                <span>02-2158-7588</span>
              </li>
              <li>
                <strong>주소</strong>
                <span>서울특별시 종로구 종로 33</span>
              </li>
              <li>
                <strong>휴일</strong>
                <span>명절당일</span>
              </li>
            </ul>
            {/* right ul */}
            <ul>
              <li>
                <strong>영업시간</strong>
                <span>11:30 ~ 24:00</span>
              </li>
              <li>
                <strong>주차</strong>
                <span>가능</span>
              </li>
              <li>
                <strong>대표메뉴</strong>
                <span>시그니처 프라이드 치킨</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comp10;
