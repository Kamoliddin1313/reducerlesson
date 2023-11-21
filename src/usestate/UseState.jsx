import { useState } from "react";
import A1 from "./A1";
import B1 from "./B1";

const UseState = () => {
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");

  return (
    <div>
      <A1 text1={text1} text2={text2} text3={text3} text4={text4} />
      <B1
        onChekInputValue1={(event) => setText1(event.target.value)}
        onChekInputValue2={(event) => setText2(event.target.value)}
        onChekInputValue3={(event) => setText3(event.target.value)}
        onChekInputValue4={(event) => setText4(event.target.value)}
      />
    </div>
  );
};

export default UseState;
