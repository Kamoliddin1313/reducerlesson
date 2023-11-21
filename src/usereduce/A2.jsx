import { useContext } from "react";
import { CreateCont } from "./UseReduce";

const A2 = () => {
  const text = useContext(CreateCont);
  return (
    <div>
      <h1>Text :{text.text}</h1>
      <h1>Text 1 :{text.text1}</h1>
      <h1>Text 2 :{text.text2}</h1>
      <h1>Text 3 :{text.text3}</h1>
    </div>
  );
};

export default A2;
