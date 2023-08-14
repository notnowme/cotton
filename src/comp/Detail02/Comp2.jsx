// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../css/course.css";
// import { Navigation, Pagination } from "swiper/modules";

const Comp2 = () => {
  return (
    <>
      <div className="info">
        <div className="infoTitle">
          <span>마루공원</span>
          <span className="infoAdress">서울 강남구</span>
        </div>
        <div className="infoContent">
          <img
            className="courseImg"
            src="https://cdn.ananti.kr/adm/2023-04-21/H73mv20XDeBxKz3TDtVk7vHhbLQZPhFp.jpg"
          />
          <div className="courseTag">
            <span>
              #관광지#근린공원#도로교통공원#도로교통체험놀이터#마루공원#일원동근린공원
            </span>
          </div>
          <span className="title">상세 정보</span>
          <div className="line"></div>
          <pre>
            강남구 일원동에 있는 마루공원은 주차가 가능한 공원으로 반려견과 함께
            산책하기 좋은 곳이다. 날씨가 좋을 때는 다수의 방문객이 공원에 설치된
            그늘막 아래쪽에서 텐트와 의자를 펼치고 쉬는 모습을 볼 수 있다. 공원
            내에는 2개의 놀이터 구역이 있는데 한 곳은 미끄럼틀과 그네가 있는
            일반 놀이터이고, 또 다른 구역은 여러 종류의 도로 교통 표지판들이
            나열되어 있어 교통안전 교육과 더불어 기차, 자동차 등을 타고 놀 수
            있는 공간으로 구성되어 있으며, 놀이터 바닥이 푹신푹신하게 되어 있어
            어린이들이 넘어져도 다치지 않고 안전하게 뛰어놀 수 있다.
          </pre>
          <div className="detailInfoBox">
            {/* left ul */}
            <ul>
              <li>
                <strong>문의 및 안내</strong>
                <span>02-3423-6240</span>
              </li>
              <li>
                <strong>주소</strong>
                <span>서울특별시 강남구 개포로109길 74</span>
              </li>
              <li>
                <strong>휴일</strong>
                <span>연중무휴</span>
              </li>
            </ul>
            {/* right ul */}
            <ul>
              <li>
                <strong>입장료</strong>
                <span>무료</span>
              </li>
              <li>
                <strong>이용시간</strong>
                <span>상시개방</span>
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

export default Comp2;
