// import { Swiper, SwiperSlide } from "swiper/react";
import myin1 from "../../assets/comp09.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../css/course.css";
// import { Navigation, Pagination } from "swiper/modules";

const Comp9 = () => {
  return (
    <>
      <div className="info">
        <div className="infoTitle">
          <span>대성한정식</span>
          <span className="infoAdress">서울 인사동</span>
        </div>
        <div className="infoContent">
          <div className="courseImgBox">
            <img className="courseImg" src={myin1} />
            <div className="courseTag">
              <span>
              #가성비맛집#인사동#한정식#점심맛집#집밥맛집#게장#새우장#낙지볶음#한정식
              </span>
            </div>
          </div>
          <span className="title">상세 정보</span>
          <div className="line"></div>
          <pre>
          인사동에서 저렴하게 맛 볼 수 있는 한정식집, 어머니의 손맛이 느껴지는 여러가지 반찬들을 하나씩 맛 보다 보면 어느새 집에 도착해있는듯한 기분이 든다.
          </pre>
          <div className="detailInfoBox">
            {/* left ul */}
            <ul>
              <li>
                <strong>문의 및 안내</strong>
                <span>02-734-4407</span>
              </li>
              <li>
                <strong>주소</strong>
                <span>서울 종로구 인사동3길 10 금좌빌딩</span>
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
                <span>11:30~21:00</span>
              </li>
              <li>
                <strong>주차</strong>
                <span>없음</span>
              </li>
              <li>
                <strong>대표메뉴</strong>
                <span>새우장정식, 간장게장정식</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comp9;
