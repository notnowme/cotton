// import { Swiper, SwiperSlide } from "swiper/react";
import myin1 from "../../assets/myin3.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../css/course.css";
// import { Navigation, Pagination } from "swiper/modules";

const Comp8 = () => {
  return (
    <>
      <div className="info">
        <div className="infoTitle">
          <span>카페인신현리 아티장가든</span>
          <span className="infoAdress">서울 용산구</span>
        </div>
        <div className="infoContent">
          <div className="courseImgBox">
            <img className="courseImg" src={myin1} />
            <div className="courseTag">
              <span>
              #가성비맛집#데이트코스#맛집제보#분위기좋은#뷰가좋아요#비주얼맛집#음식#크래프트비어#스페셜티#스페셜커피
              </span>
            </div>
          </div>
          <span className="title">상세 정보</span>
          <div className="line"></div>
          <pre>
          카페인신현리 아티장 가든은 다채로운 푸드와 크래프트 비어, 그리고 스페셜 티 커피를 만날 수 있는 곳으로 싱그러운 초록이 가득하다.
          </pre>
          <div className="detailInfoBox">
            {/* left ul */}
            <ul>
              <li>
                <strong>문의 및 안내</strong>
                <span>02-393-5849</span>
              </li>
              <li>
                <strong>주소</strong>
                <span>서울특별시 용산구 한강대로 405 서울역(철도역)</span>
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
                <span>11:00 ~ 22:00</span>
              </li>
              <li>
                <strong>주차</strong>
                <span>주차가능</span>
              </li>
              <li>
                <strong>대표메뉴</strong>
                <span>랜치 샐러드 / 크래프트 치즈 플레이드</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comp8;
