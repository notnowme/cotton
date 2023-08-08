import mountain from "../../assets/mountain.png";
import waterfall from "../../assets/waterfall.png";
import island from "../../assets/island.png";
import "../../css/Choice.css";
import DetailChoice from "./DetailChoice";

const Detail2Choice = () => {
  const detail2Choice = [
    [
      // index 0 -> 쇼핑
      { id: 1, img: mountain, name: "쇼핑" },
      { id: 2, img: island, name: "박물관" },
      { id: 3, img: waterfall, name: "전시회" },
    ],
    [
      // index 1 -> 자연
      { id: 1, img: mountain, name: "산" },
      { id: 2, img: island, name: "바다" },
      { id: 3, img: waterfall, name: "계곡" },
    ],
    [
      // index 2 -> 액티비티
      { id: 1, img: mountain, name: "액티비티" },
      { id: 2, img: island, name: "야외" },
    ],
    [
      // index 3 -> 음식
      { id: 1, img: mountain, name: "한식" },
      { id: 2, img: island, name: "중식" },
      { id: 3, img: waterfall, name: "일식" },
      { id: 4, img: waterfall, name: "양식" },
      { id: 5, img: waterfall, name: "카페" },
    ],
  ];

  // return (
  //   <div>
  //     <img src={mountain} />
  //     <img src={waterfall} />
  //     <img src={island} />
  //   </div>
  // );
  // return (
  //   <>
  //     {detail2Choice[1].map((data, index) => {
  //       return (
  //         <div key="natureBox" className="natureBox">
  //           {/* <img className="natureImg" key={index} src={data.img}></img> */}
  //           <DetailChoice index={index} img={data.img}></DetailChoice>
  //         </div>
  //       );
  //     })}
  //   </>
  // );
};

export default Detail2Choice;
