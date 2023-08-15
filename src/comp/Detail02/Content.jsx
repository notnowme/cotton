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
  const [reply, setReply] = useState([
    {
      name: '다꼬리',
      date: '2023. 01. 17',
      content: '눈 안내린 겨울에 방문했는데 바닥도 조금 폭신한 느낌에 전나무향? 이 물씬 났어요 힐링으로 최고!',
    },
    {
      name: '꼬리선',
      date: '2023. 01. 17',
      content: '다꼬리 따라갔는데 정말 좋았어요! 다음엔 혼자 가볼래요ㅎㅎ',
    },
  ]);

  const [imgNum, setImgNum] = useState(0);
  const handleClickButton = (e, n) => {
    const { name } = e.target;
    setContent(name);
    setImgNum(prev => n);
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

  const iframes = (text) => {
    return {
      __html: `<iframe src="${text}" width="100%" height="100%"></iframe>`
    };
  }
  const [mapNum, setMapNum] = useState(0);
  const [mapHtml, setMapHtml] = useState('TmapDrive.html');
  const mapChange = (n) => {
    setMapNum(prev => n);
    switch (n) {
      case 0:
        setMapHtml(prev => 'TmapDrive.html');
        break;
      case 1:
        setMapHtml(prev => 'TmapWalk.html');
        break;
      case 2:
        setMapHtml(prev => 'TmapCCTV.html');
        break;
    }
  }
  const [textArea, setTextArea] = useState('');
  const textareaHandle = e => {
    setTextArea(prev => e.target.value);
  }
  const writeReply = () => {
    const replys = {
      name: '다꼬리2',
      date: new Intl.DateTimeFormat('ko', { dateStyle: 'medium' }).format(new Date()),
      content: textArea
    };
    setReply(prev => [...prev, replys]);
    setTextArea('');
  }
  useEffect(() => {
    const title = document.getElementsByTagName('title')[0];
    title.innerHTML = '코스 상세 | COTTON CANDY';
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
      {/* <div className="content-main"></div> */}

      <div className="content-desc">
        {/* map info */}
        <div className="map-info">
          <div className="courseInfo">
            <div className="course-container">
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
          </div>
          {/* insert map API */}
          <div className="toggle-map">
            <li className={mapNum === 0 ? 'sel' : ''}
              onClick={() => mapChange(0)}
            >
              <i className="fa-solid fa-location-dot"></i>
              <span>일반</span>
            </li>
            <li className={mapNum === 1 ? 'sel' : ''}
              onClick={() => mapChange(1)}
            >
              <i className="fa-solid fa-person-walking"></i>
              <span>도보</span>
            </li>
            <li className={mapNum === 2 ? 'sel' : ''}
              onClick={() => mapChange(2)}
            >
              <i className="fa-solid fa-video"></i>
              <span>CCTV</span>
            </li>
          </div>
          <div className="map"
            dangerouslySetInnerHTML={iframes(mapHtml)}
          ></div>
          {/* <div className="mapInfoBox"
          >
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
          </div> */}
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
            {COURSE_DATA.map((data, index) => {
              return (
                <SwiperSlide key={data.id} slidesPerView={4} slidesPerGroup={4}>
                  <img
                    onClick={(e) => handleClickButton(e, index)}
                    name={data.name}
                    key={data.id}
                    className={imgNum === index ? 'compSlideBtn sel' : 'compSlideBtn'}
                    src={data.img}
                  >
                  </img>
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
            <span>{reply.length}</span>
          </p>

          <div className="cmt-input">
            {" "}
            <div className="input">
              <textarea
                name=""
                id=""
                value={textArea}
                onChange={textareaHandle}
                placeholder={"소중한 의견을 남겨 주세요."}
              />
              <button onClick={writeReply}>작성하기</button>
            </div>
          </div>
          <div className="cmt-box">
            {reply.map((data, index) => (
              <div className="cmt-view" key={index}>
                <div className="cmt-img">
                  <i className="fa-solid fa-user"></i>
                </div>
                <div className="cmt-item">
                  <div className="cmt-user">
                    <div className="name">
                      <span>{data.name}</span>
                    </div>
                    <div className="date">
                      <span>{data.date}</span>
                    </div>
                  </div>
                  <div className="reply">
                    <p>
                      {data.content}
                    </p>
                    <hr></hr>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
