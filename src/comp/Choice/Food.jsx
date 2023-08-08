import cafe from "../../assets/cafe.png";
import korean from "../../assets/korean.png";
import chinese from "../../assets/chinese.png";
import japanese from "../../assets/japanese.png";
import italian from "../../assets/italian.png";

const Food = () => {
  // let BtnName = "";
  // const clickButtonHandler = (e) => {
  //   BtnName = e.target.id;
  //   console.log(BtnName);
  // };
  return (
    <>
      <div>
        <h1 className="choiceQues">어떤 맛집에 가고 싶나요?</h1>
        <div className="detail2ChoiceBox">
          <div>
            <img id="kFoodBtn" src={korean} className="detailBtn" />
            <p>한식</p>
          </div>
          <div>
            <img id="cFoodBtn" src={chinese} className="detailBtn " />
            <p>중식</p>
          </div>
          <div>
            <img id="jFoodBtn" src={japanese} className="detailBtn " />
            <p>일식</p>
          </div>
          <div>
            <img id="iFoodBtn" src={italian} className="detailBtn " />
            <p>양식</p>
          </div>
          <div>
            <img id="cafeBtn" src={cafe} className="detailBtn " />
            <p>카페</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Food;
