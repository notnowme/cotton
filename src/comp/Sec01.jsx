import "../css/sec01.css";
import KOR from "../assets/korea.png";
import { useState, useRef, useEffect } from "react";
import Sec01_Top from "./Sec01/sec01-top";
import MainMid from "./Sec01/Main-mid";
import BtmView from "./Sec01/BtmView";
import Sec01Ads from "./Sec01/Sec01Ads";
import MainTop from "./MainTop";
function Sec01() {
  const testArr = [
    {
      addr1: "서울특별시 서초구 원터길",
      addr2: "경기도 성남시ㆍ과천시ㆍ의왕시",
      areacode: 1,
      booktour: "0",
      cat1: "자연",
      cat2: "자연관광지",
      cat3: "산",
      contentid: 125452,
      contenttypeid: 12,
      createdtime: 20040200000000,
      firstimage:
        "http://tong.visitkorea.or.kr/cms/resource/41/2023841_image2_1.jpg",
      firstimage2:
        "http://tong.visitkorea.or.kr/cms/resource/41/2023841_image3_1.jpg",
      cpyrhtDivCd: "Type3",
      mapx: 127.0543676,
      mapy: 37.44168677,
      mlevel: 6,
      modifiedtime: 20220200000000,
      sigungucode: 15,
      tel: "",
      title: "청계산",
      zipcode: "6806",
    },
    {
      addr1: "서울특별시 종로구 인왕산로1길 29",
      addr2: "(사직동)",
      areacode: 1,
      booktour: "0",
      cat1: "자연",
      cat2: "자연관광지",
      cat3: "산",
      contentid: 126479,
      contenttypeid: 12,
      createdtime: 20031000000000,
      firstimage:
        "http://tong.visitkorea.or.kr/cms/resource/62/1894462_image2_1.jpg",
      firstimage2:
        "http://tong.visitkorea.or.kr/cms/resource/62/1894462_image3_1.jpg",
      cpyrhtDivCd: "Type3",
      mapx: 126.9640832,
      mapy: 37.57356706,
      mlevel: 6,
      modifiedtime: 20220300000000,
      sigungucode: 23,
      tel: "",
      title: "인왕산",
      zipcode: "3028",
    },
    {
      addr1: "서울특별시 관악구 관악로",
      addr2: "(신림동)",
      areacode: 1,
      booktour: "0",
      cat1: "자연",
      cat2: "자연관광지",
      cat3: "산",
      contentid: 126480,
      contenttypeid: 12,
      createdtime: 20040100000000,
      firstimage:
        "http://tong.visitkorea.or.kr/cms/resource/30/1857230_image2_1.jpg",
      firstimage2:
        "http://tong.visitkorea.or.kr/cms/resource/30/1857230_image3_1.jpg",
      cpyrhtDivCd: "Type3",
      mapx: 126.9540988,
      mapy: 37.44840364,
      mlevel: 6,
      modifiedtime: 20221000000000,
      sigungucode: 5,
      tel: "",
      title: "관악산",
      zipcode: "8826",
    },
    {
      addr1: "서울특별시 도봉구 도봉동",
      addr2: "",
      areacode: 1,
      booktour: "0",
      cat1: "자연",
      cat2: "자연관광지",
      cat3: "산",
      contentid: 126481,
      contenttypeid: 12,
      createdtime: 20030900000000,
      firstimage:
        "http://tong.visitkorea.or.kr/cms/resource/65/1894465_image2_1.jpg",
      firstimage2:
        "http://tong.visitkorea.or.kr/cms/resource/65/1894465_image3_1.jpg",
      cpyrhtDivCd: "Type3",
      mapx: 127.0184192,
      mapy: 37.69698701,
      mlevel: 6,
      modifiedtime: 20220400000000,
      sigungucode: 10,
      tel: "",
      title: "도봉산",
      zipcode: "1318",
    },
  ];
  const [tab, setTab] = useState(0);
  const ulRef = useRef(null);
  const [area, setArea] = useState("서울");
  const [areaDetail, setAreaDetail] = useState("인기 여행지");
  // 드래그 시작 시 첫 위치 기억 변수.
  const [posX, setPosX] = useState(0);

  // 슬라이드 위치 변수.
  const [left, setLeft] = useState(0);

  // 탭 클릭 시 sel 추가.
  const tapClick = (n) => {
    let text = "";
    let detail = "";
    if (n === 0) {
      text = "서울";
      detail = "인기 여행지";
    } else {
      text = "연인";
      detail = "인기 여행 코스";
    }
    setTab((prev) => n);
    setArea((prev) => text);
    setAreaDetail((prev) => detail);
    setLeft((prev) => 0);
  };

  // 드래그 시작하면
  const dragStartHandler = (e) => {
    // 드래그 하면 투명 이미지 없애기
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);

    // 커서 바꾸기.
    e.dataTransfer.effectAllowed = "move";

    // 드래그 위치 바꾸기.
    setPosX((prev) => e.clientX);
  };

  const dragHandler = (e) => {
    if (tab === 1) return;
    // 오른쪽, 왼쪽 구분해서 위치 조정.
    if (posX > e.clientX) {
      setLeft((prev) => prev - 1);
    } else {
      setLeft((prev) => prev + 1);
    }
  };
  const dragEndHandler = (e) => {
    if (tab === 1) return;
    // 드래그 끝났을 때 맨왼쪽이면 0, 맨오른쪽이면 컨텐츠 끝
    if (left <= -(ulRef.current.offsetWidth - 400)) {
      setLeft(-1150);
    } else if (left > 0) {
      setLeft(0);
    }
  };
  const dragOverHandler = (e) => {
    // 드래그 오버 다른 이벤트 방지.
    e.preventDefault();
  };
  const menuClick = (e) => {
    // 먼저 모든 sel 클래스를 지운 다음.
    // 클릭한 것만 sel 클래스 추가.
    const menuAll = document.querySelectorAll(".main-mid > ul > li");
    menuAll.forEach((el) => el.classList.remove("sel"));
    if (e.target.nodeName === "IMG") {
      e.target.parentElement.classList.add("sel");
      setArea((prev) => e.target.parentElement.innerText);
    } else {
      e.target.classList.add("sel");
      setArea((prev) => e.target.innerText);
    }
  };
  const test = async () => {
    const a = await fetch(
      "http://gjaischool-a.ddns.net:8447/proxy/3001/areas?info=1"
    );
    const b = a.json();
    console.log(b);
  };
  useEffect(() => {
    // 지역/코스에 클릭 이벤트 추가...
    const menuAll = document.querySelectorAll(".main-mid > ul > li");
    menuAll.forEach((el) => el.addEventListener("click", (e) => menuClick(e)));
    return () => {
      // 클린업으로 클릭 이벤트 삭제...
      menuAll.forEach((el) => el.removeEventListener("click", menuClick));
    };
  }, [tab]);
  return (
    <section id="sec01">
      <MainTop />
      <div className="sec01-container">
        <div className="sec01-top">
          <Sec01_Top tab={tab} tapClick={tapClick} KOR={KOR} />
        </div>
        <div className="sec01-main">
          <div className="main-top">
            <div className="title">
              <p>
                <span>{area}</span> {areaDetail}
              </p>
            </div>
          </div>
          <MainMid
            dragStartHandler={dragStartHandler}
            dragHandler={dragHandler}
            dragEndHandler={dragEndHandler}
            dragOverHandler={dragOverHandler}
            left={left}
            ulRef={ulRef}
            tab={tab}
          />
        </div>
        <div className="sec01-btm">
          {testArr.map((data, index) => (
            <BtmView index={index} data={data} />
          ))}
        </div>
        <Sec01Ads />
      </div>
    </section>
  );
}

export default Sec01;
