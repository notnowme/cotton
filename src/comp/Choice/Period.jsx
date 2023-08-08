import "../../css/Choice.css";
import dayImg from "../../assets/day.png";
import oneNight from "../../assets/oneNight.png";
import twoNight from "../../assets/twoNight.png";

const Period = () => {
  return (
    <>
      <h1 className="choiceQues">여행 기간을 선택해 주세요!</h1>
      <div className="periodBtnBox">
        <div>
          <img src={dayImg} className="periodBtn dayBtn" />
          <p>당일 여행</p>
        </div>
        <div>
          <img src={oneNight} className="periodBtn oneNightBtn" />
          <p>1박 2일 여행</p>
        </div>
        <div>
          <img src={twoNight} className="periodBtn twoNightBtn" />
          <p>2박 3일 여행</p>
        </div>
      </div>
    </>
  );
};

export default Period;
