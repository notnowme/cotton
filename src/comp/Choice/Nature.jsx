import mountain from "../../assets/mountain.png";
import waterfall from "../../assets/waterfall.png";
import island from "../../assets/island.png";

const Nature = () => {
  // let BtnName = "";
  // const clickButtonHandler = (e) => {
  //   BtnName = e.target.id;
  //   console.log(BtnName);
  // };
  return (
    <>
      <div>
        <h1 className="choiceQues">자연 중 어느 곳으로 가고 싶나요?</h1>
        <div className="detail2ChoiceBox">
          <div>
            <img id="mountainBtn" src={mountain} className="detailBtn" />
            <p>산</p>
          </div>
          <div>
            <img id="seaBtn" src={island} className="detailBtn " />
            <p>바다</p>
          </div>
          <div>
            <img id="valleyBtn" src={waterfall} className="detailBtn " />
            <p>계곡</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nature;
