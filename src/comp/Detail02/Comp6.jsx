// import { Swiper, SwiperSlide } from "swiper/react";
import myin1 from "../../assets/myin3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../css/course.css";
// import { Navigation, Pagination } from "swiper/modules";

const Comp6 = () => {
  return (
    <>
      <div className="info">
        <div className="infoTitle">
          <span>굴다리식당</span>
          <span className="infoAdress">서울 마포구</span>
        </div>
        <div className="infoContent">
          <div className="courseImgBox">
            <img className="courseImg" src={myin1} />
            <div className="courseTag">
              <span>
                #음식#김치찌개#서울#돼지고기#맛집#제육볶음#생오겹
              </span>
            </div>
          </div>
          <span className="title">상세 정보</span>
          <div className="line"></div>
          <pre>
          공덕역 9번 출구에서 걸어서 5분 정도면 닿는 김치찌개로 유명한 음식점이다.
          공덕 오거리에서 30년이 넘는 전통을 가지고 운영한다.
          많은 TV 프로그램에 소개되었으며 대표메뉴 역시 김치찌개이다.
          김치찌개 말고도 같이 먹을 수 있는 제육볶음, 계란말이 등도 같이 판매하고 있다.
          매일 오전 8시부터 오후 10시까지 영업하며 연중무휴이다.
          전용 주차 공간이 없어서 부근의 유료주차장을 이용해야 한다.
          대중교통 접근성이 좋아 대중교통을 이용하는 편이 좋다.
          오래된 느낌을 주는 매장 분위기가 특징이다.
          1km 안에 경의선광장, 경의선공원이 있어서 식사 후 산책하기 좋다.
          </pre>
          <div className="detailInfoBox">
            {/* left ul */}
            <ul>
              <li>
                <strong>문의 및 안내</strong>
                <span>02-706-0323</span>
              </li>
              <li>
                <strong>주소</strong>
                <span>서울특별시 마포구 도화길 44-2</span>
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
                <span>08:00 - 22:00</span>
              </li>
              <li>
                <strong>주차</strong>
                <span>없음</span>
              </li>
              <li>
                <strong>대표메뉴</strong>
                <span>김치찌개</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comp6;
