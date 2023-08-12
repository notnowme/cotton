import { useEffect, useState, useRef } from "react";
import "../../css/content.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { userInfo } from "../../atoms/atom";
import { useRecoilState } from "recoil";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Content = () => {
  const [user, setUser] = useRecoilState(userInfo);
  const [scroll, setScroll] = useState();
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
      <div className={view ? "content-nav scroll" : "content-nav"}>
        <ul>
          <li onClick={()=>{picRef.current.scrollIntoView({behavior: 'smooth'})}}>
            <span>사진 보기</span>
          </li>
          <div className="line"></div>
          <li onClick={()=>{contentRef.current.scrollIntoView({behavior: 'smooth', })}}>
            <span>상세 정보</span>
          </li>
          <div className="line"></div>
          <li onClick={()=>{replyRef.current.scrollIntoView({behavior: 'smooth'})}}>
            <span>후기</span>
          </li>
        </ul>
      </div>
      <div className="content-main" ref={picRef}>
        <div className="img">
          <Swiper
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
            <SwiperSlide className="contentSlide">
              <img src="https://cdn.ananti.kr/adm/2023-04-21/H73mv20XDeBxKz3TDtVk7vHhbLQZPhFp.jpg" />
            </SwiperSlide>
            <SwiperSlide className="contentSlide">
              <img src="https://cdn.ananti.kr/adm/2023-08-02/f2F2jtl5YiWNivsC3S2I67iFMYVhCctE.jpg" />
            </SwiperSlide>
            <SwiperSlide className="contentSlide">
              <img src="https://cdn.ananti.kr/plf/ui/img/hilton/ht_seaside_2304.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="content-desc" ref={contentRef}>
        <span className="title">상세 정보</span>
        <div className="line"></div>
        <pre>
          오대산 월정사의 일주문부터 금강교까지 이어지는 약 1km의 숲길이다.
          전나무 1,700여 그루가 하늘 높이 뻗은 숲길은 천년고찰 월정사를 대표하는
          관광명소다. 이 숲길을 걸으려 월정사를 찾는 여행자도 많다. 피톤치드
          향이 몸과 마음을 맑게 하는 숲길은 언제나 아름답지만, 겨울에는 푸른
          전나무 위에 하얀 눈이 내려앉아 더욱 근사하다. 오대산 월정사
          전나무숲길은 드라마 도깨비 촬영지로도 잘 알려져 있다. 눈 내린 전나무
          숲에서 도깨비(공유 분)와 도깨비 신부(김고은 분)가 사랑을 확인하는
          장면이 이곳에서 촬영됐다. 숲길의 시작은 약 1,000년 전 월정사 앞에 심은
          전나무 아홉 그루였다고 전해진다. 전나무는 예로부터 절 주위에 흔히 심은
          나무였는데, 곧고 빠르게 자라는 데다 방화의 역할도 하기 때문이다. 숲길
          끝에 자리한 월정사는 1400년 역사의 유서 깊은 고찰이다. 울창한 산을
          배경에 둔 산사는 평창 월정사 팔각 구층석탑 등 다수의 국보와 보물을
          지녔다.
        </pre>
        <div className="info">
          <ul>
            <li>
              <strong>문의 및 안내</strong>
              <span>033-123-4567</span>
            </li>
            <li>
              <strong>주소</strong>
              <span>강원특별자치도 평창군 진부면 오대산로 374-8</span>
            </li>
            <li>
              <strong>정보 1</strong>
              <span>ㄱㄴㄷㄹ</span>
            </li>
            <li>
              <strong>정보 2</strong>
              <span>ㅁㅂㅅㅇ</span>
            </li>
          </ul>
        </div>
        <div className="map-info">
          <div className="map"></div>
        </div>
        <div className="cmt" ref={replyRef}>
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
                placeholder={userInfo ? '로그인 후 소중한 의견을 남겨 주세요.' : '소중한 의견을 남겨 주세요.'}
                disabled={userInfo ? true : false}
              />
              <button>로그인</button>
            </div>
          </div>
          {/* <div className="cmt-view">
            <div className="cmt-item">
              <div className="userImg">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="line"></div>
              <div className="name">
                <span>다꼬리</span>
              </div>
              <div className="reply">
                <p>
                  눈 안내린 겨울에 방문했는데 바닥도 조금 폭신한 느낌에
                  전나무향? 이 물씬 났어요 힐링으로 최고!
                </p>
              </div>
              <div className="date">
                <span>2023. 01. 17</span>
              </div>
            </div>
            <div className="cmt-item">
              <div className="userImg">
                <i className="fa-solid fa-user"></i>
              </div>
              <div className="line"></div>
              <div className="name">
                <span>꼬리선</span>
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
              </div>
              <div className="date">
                <span>2023. 01. 17</span>
              </div>
            </div>
          </div> */}
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
