import { useState } from "react";
import { MAIN_DATA } from "./MAIN_DATA";
import First from "./First";
// import Second from './Second';

const Test = () => {
  const [content, setContent] = useState();

  const handleClickButton = (e) => {
    const { name } = e.target;
    setContent(name);
  };

  const selectComponent = {
    first: <First />,
    // second: <Second />
  };

  console.log(content);

  return (
    <div>
      <div>
        {MAIN_DATA.map((data) => {
          return (
            <button onClick={handleClickButton} name={data.name} key={data.id}>
              {data.text}
            </button>
          );
        })}
      </div>
      {content && <div>{selectComponent[content]}</div>}
    </div>
  );
};

export default Test;
