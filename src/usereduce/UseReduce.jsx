import { createContext, useState } from "react";
import A1 from "./A1";
import B1 from "./B1";

export const CreateCont = createContext();

const UseReduce = () => {
  const [text, setText] = useState("Kamoliddin");
  const [text1, setText1] = useState("Kamoliddin Islamov");
  const [text2, setText2] = useState("Kamoliddin Web Dasturchisi");
  const [text3, setText3] = useState("Kamoliddin Levil Seniyor Darajada");
  return (
    <CreateCont.Provider
      value={{
        text,
        setText,
        text1,
        setText1,
        text2,
        setText2,
        text3,
        setText3,
      }}
    >
      <A1 />
      <B1 />
    </CreateCont.Provider>
  );
};

export default UseReduce;
