import { useEffect, useState, useRef } from "react";
import { userInfo } from "../../atoms/atom";
import { useRecoilState } from "recoil";
import "../../css/content.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { COURSE_DATA } from "./COURSE_DATA";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
import Comp5 from "./Comp5";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

const Content = () => {
  const [content, setContent] = useState();
  const [user, setUser] = useRecoilState(userInfo);

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };
  const selectComponent = {
    Comp1: <Comp1 />,
    Comp2: <Comp2 />,
    Comp3: <Comp3 />,
    Comp4: <Comp4 />,
    Comp5: <Comp5 />,
  };

  const [view, setView] = useState(false);
  const picRef = useRef(null);
  const contentRef = useRef(null);
  const replyRef = useRef(null);
  const scrollMenuHandle = () => {
    let scrollY = window.scrollY;
    370 < scrollY ? setView(true) : setView(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollMenuHandle);
    return () => {
      window.removeEventListener("scroll", scrollMenuHandle);
      setView(false);
    };
  }, []);

  return (
    <div id="content">
      {/* content title */}
      <div className="content-top">
        <span className="title">ddddddddddd</span>
        <span className="addr">강원 평창군</span>
        <span className="desc">전나무 숲에서 즐기는 피톤치드 산림욕</span>
        <div className="menu">
          <div className="left">
            <p>
              <i className="fa-regular fa-heart"></i>
              <span>11</span>
            </p>
            <p>
              <i className="fa-regular fa-eye"></i>
              <span>40</span>
            </p>
            <p>
              <i className="fa-regular fa-paper-plane"></i>
              <span>share</span>
            </p>
          </div>
          <div className="right"></div>
        </div>
      </div>
      {/* content nav */}
      <div className={view ? "content-nav scroll" : "content-nav"}>
        <ul>
          <li
            onClick={() => {
              picRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>사진 보기</span>
          </li>
          <div className="line"></div>
          <li
            onClick={() => {
              contentRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>상세 정보</span>
          </li>
          <div className="line"></div>
          <li
            onClick={() => {
              replyRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>후기</span>
          </li>
        </ul>
      </div>
      <div className="content-main"></div>

      <div className="content-desc">
        {/* map info */}
        <div className="map-info">
          <div className="courseInfo">
            <ul>
              <li>
                <i className="fa-regular fa-calendar"></i>
                <div>
                  <span>일정</span>
                  <strong>당일 여행</strong>
                </div>
              </li>
              <li>
                <i className="fa-solid fa-tags"></i>
                <div>
                  <span>태그</span>
                  <strong>#서울힐링여행 #추천코스</strong>
                </div>
              </li>
            </ul>
            {/* right ul */}
            <ul>
              <li>
                <i className="fa-solid fa-leaf"></i>
                <div>
                  <span>테마</span>
                  <strong>힐링 코스</strong>
                </div>
              </li>
            </ul>
          </div>
          {/* insert map API */}
          <div className="map"></div>
          <div className="mapInfoBox">
            {/* left ul */}
            <ul>
              <li>
                <strong>총 거리</strong>
                <span>n km</span>
              </li>
              <li>
                <strong>총 시간</strong>
                <span>n hours</span>
              </li>
            </ul>
            {/* right ul */}
            <ul>
              <li>
                <strong>총 요금</strong>
                <span>n 원</span>
              </li>
              <li>
                <strong>예상 택시 요금</strong>
                <span>n 원</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="detailSwiperBox">
          <Swiper
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            navigation={true}
            className="detailBtnSwiper"
          >
            {COURSE_DATA.map((data) => {
              return (
                <SwiperSlide key={data.id} slidesPerView={4} slidesPerGroup={4}>
                  <img
                    onClick={handleClickButton}
                    name={data.name}
                    key={data.id}
                    className="compSlideBtn"
                    src={data.img}
                  ></img>
                </SwiperSlide>
              );
            })}
          </Swiper>
          {content ? (
            <div className="compBox">{selectComponent[content]}</div>
          ) : (
            <div className="compBox">
              <Comp1 />
            </div>
          )}
        </div>

        <div className="cmt">
          <p className="cmtTitle">
            <strong>Comment</strong>
            <span>2</span>
          </p>

          <div className="cmt-input">
            {" "}
            <div className="input">
              <textarea
                name=""
                id=""
                placeholder={
                  user
                    ? "로그인 후 소중한 의견을 남겨 주세요."
                    : "소중한 의견을 남겨 주세요."
                }
                disabled={user ? true : false}
              />
              <button>로그인</button>
            </div>
          </div>
          <div className="cmt-box">
            <div className="cmt-view">
              <div className="cmt-img">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="cmt-item">
                <div className="cmt-user">
                  <div className="name">
                    <span>다꼬리</span>
                  </div>
                  <div className="date">
                    <span>2023. 01. 17</span>
                  </div>
                </div>
                <div className="reply">
                  <p>
                    눈 안내린 겨울에 방문했는데 바닥도 조금 폭신한 느낌에
                    전나무향? 이 물씬 났어요 힐링으로 최고!
                  </p>
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="cmt-view">
              <div className="cmt-img">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="cmt-item">
                <div className="cmt-user">
                  <div className="name">
                    <span>꼬리선</span>
                  </div>
                  <div className="date">
                    <span>2023. 01. 17</span>
                  </div>
                </div>
                <div className="reply">
                  <p>
                    눈 안내린 겨울에 방문했는데 바닥도 조금 폭신한 느낌에
                    전나무향? 이 물씬 났어요 힐링으로 최고! 글자 많은 것도 확인
                    글자 많은 것도 확인 글자 많은 것도 확인 글자 많은 것도 확인
                    글자 많은 것도 확인 글자 많은 것도 확인 글자 많은 것도 확인
                    글자 많은 것도 확인 글자 많은 것도 확인 글자 많은 것도 확인
                    글자 많은 것도 확인 글자 많은 것도 확인 글자 많은 것도 확인
                    글자 많은 것도 확인 글자 많은 것도 확인 글자 많은 것도 확인
                    글자 많은 것도 확인 글자 많은 것도 확인 글자 많은 것도 확인
                    글자 많은 것도 확인 글자 많은 것도 확인
                  </p>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
