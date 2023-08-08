import shopping from "../../assets/shopping.png";
import nature from "../../assets/forest.png";
import food from "../../assets/food.png";
import actvivity from "../../assets/activity.png";
import hotPlace from "../../assets/fireworks.png";

const DetailChoice = () => {
  // let BtnName = "";
  // const clickButtonHandler = (e) => {
  //   BtnName = e.target.id;
  //   console.log(BtnName);
  // };
  return (
    <>
      <div>
        <h1 className="choiceQues">선호하는 여행지를 선택해 주세요!</h1>
        <div className="detailChoiceBox">
          <div>
            <img
              id="shoppingBtn"
              src={shopping}
              className="detailBtn"
              // onClick={clickButtonHandler}
            />
            <p>쇼핑/전시</p>
          </div>
          <div>
            <img id="natureBtn" src={nature} className="detailBtn " />
            <p>자연</p>
          </div>
          <div>
            <img id="activityBtn" src={actvivity} className="detailBtn " />
            <p>액티비티</p>
          </div>
          <br />
          <div>
            <img id="foodBtn" src={food} className="detailBtn " />
            <p>맛집</p>
          </div>
          <div>
            <img id="hotPlaceBtn" src={hotPlace} className="detailBtn " />
            <p>핫플레이스</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailChoice;
