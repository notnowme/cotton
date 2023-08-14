// import { Swiper, SwiperSlide } from "swiper/react";

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
          <span>대모산공원</span>
          <span className="infoAdress">서울 강남구</span>
        </div>

        {/* content img swiper */}
        {/* <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          modules={[Pagination, Navigation]}
          className="contentSwiper"
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
        >
          <SwiperSlide className="compSlide">
            <img src="https://cdn.ananti.kr/adm/2023-04-21/H73mv20XDeBxKz3TDtVk7vHhbLQZPhFp.jpg" />
          </SwiperSlide>
          <SwiperSlide className="compSlide">
            <img src="https://cdn.ananti.kr/adm/2023-08-02/f2F2jtl5YiWNivsC3S2I67iFMYVhCctE.jpg" />
          </SwiperSlide>
          <SwiperSlide className="compSlide">
            <img src="https://cdn.ananti.kr/plf/ui/img/hilton/ht_seaside_2304.jpg" />
          </SwiperSlide>
        </Swiper> */}
        <div className="infoContent">
          <img
            className="courseImg"
            src="https://cdn.ananti.kr/adm/2023-04-21/H73mv20XDeBxKz3TDtVk7vHhbLQZPhFp.jpg"
          />
          <div className="courseTag">
            <span>
              #강남#공원#관광지#대모산공원#도심공원#산책길#산책하기#산책하기좋은곳#자연좋은곳#자연환경#휴식공간#휴식여행#휴식처
            </span>
          </div>
          <span className="title">상세 정보</span>
          <div className="line"></div>
          <pre>
            국수봉이라고도 불렸던 높이 293m의 나지막한 산으로 산 모양이 늙은
            할미와 같다 하여 할미산으로 불리다가 태종의 천릉을 모신 후 어명으로
            대모산으로 고쳤다고 한다. 예부터 전해 내려오는 구천에 의하면 산
            모양이 여승이 앉은 모습과 같다고 하는 설과 여자의 앞가슴 모양과 같다
            하여 대모산이라는 설이 있으며 이산에는 불국사(약사절)를 비롯하여
            수질 좋은 약수터가 있고 산 입구에는 각종 희귀나무로 가꾸어진 자연
            학습장이 있어 학생들의 야외 교육장 및 주민들의 산책로로 사랑받고
            있다.
          </pre>
          <div className="detailInfoBox">
            {/* left ul */}
            <ul>
              <li>
                <strong>문의 및 안내</strong>
                <span>02-3423-6283</span>
              </li>
              <li>
                <strong>주소</strong>
                <span>서울특별시 강남구 광평로10길 30-71</span>
              </li>
              <li>
                <strong>휴일</strong>
                <span>연중개방</span>
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
                <strong>이용시간</strong>
                <span>00:00 ~ 24:00</span>
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
