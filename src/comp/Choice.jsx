import "../css/Choice.css";
import { useState } from "react";
import { MAIN_DATA } from "./Choice/MAIN_DATA";
import PersonNum from "./Choice/PersonNum";
import Period from "./Choice/Period";
import StartPrefer from "./Choice/StartPrefer";
import Detail from "./Choice/DetailChoice";
import Food from "./Choice/food";

const Choice = () => {
  const [content, setContent] = useState();

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    startPrefer: <StartPrefer />,
    period: <Period />,
    personNum: <PersonNum />,
    detail: <Detail />,
    detail2: <Food />,
  };

  return (
    <div className="choiceMainBox">
      <div className="choiceTitleBox">
        <h1>⭐Choose your Preference⭐</h1>
      </div>
      <div className="choiceBox">
        {content ? (
          <div>{selectComponent[content]}</div>
        ) : (
          <div>
            <StartPrefer />
          </div>
        )}
        <div className="btnBox">
          {MAIN_DATA.map((data) => {
            return (
              <button
                onClick={handleClickButton}
                name={data.name}
                key={data.id}
                className="choiceBtn"
              >
                {data.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Choice;
