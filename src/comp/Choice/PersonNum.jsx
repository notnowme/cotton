import alone from "../../assets/alone.png";
import couple from "../../assets/couple.png";
import family from "../../assets/family.png";
import group from "../../assets/group.png";

const PersonNum = () => {
  return (
    <>
      <h1 className="choiceQues">인원 수를 선택해 주세요!</h1>
      <div className="periodBtnBox">
        <div>
          <img src={alone} className="personBtn alone" />
          <p>나 홀로</p>
        </div>
        <div>
          <img src={couple} className="personBtn couple" />
          <p>친구</p>
        </div>
        <div>
          <img src={family} className="personBtn family" />
          <p>가족</p>
        </div>
        <div>
          <img src={group} className="personBtn group" />
          <p>단체</p>
        </div>
      </div>
    </>
  );
};

export default PersonNum;
