import { useEffect, useState } from "react";
import "./Test.css";
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

const Test = () => {
  const [content, setContent] = useState();

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
  const scrollMenuHandle = () => {
    let scrollY = window.scrollY;
    390 < scrollY ? setView(true) : setView(false);
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
        <span className="title">오대산 월정사 전나무숲길</span>
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
          <li>
            <span>사진 보기</span>
          </li>
          <div className="line"></div>
          <li>
            <span>상세 정보</span>
          </li>
          <div className="line"></div>
          <li>
            <span>후기</span>
          </li>
        </ul>
      </div>
      <div className="content-main"></div>

      <div className="content-desc">
        <div className="map-info">
          <div className="map"></div>
        </div>
        <div className="detailSwiperBox">
          <Swiper
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={0}
            modules={[Pagination, Navigation]}
            pagination={{
              clickable: true,
            }}
            className="detailBtnSwiper"
          >
            {COURSE_DATA.map((data) => {
              return (
                <SwiperSlide key={data.id} slidesPerView={4} slidesPerGroup={4}>
                  <div className="swiper-pagination"></div>
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
          <p>
            <strong>후기</strong>
            <span>2</span>
          </p>

          <div className="cmt-input">
            {" "}
            <div className="input">
              <textarea
                name=""
                id=""
                placeholder="로그인 후 소중한 의견을 남겨주세요."
                disabled
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

export default Test;
