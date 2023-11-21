import { useContext } from "react";
import { CreateCont } from "./UseReduce";

const B3 = () => {
  const settext = useContext(CreateCont);
  return (
    <div>
      <br />
      <input
        type="text"
        placeholder="Text ... "
        onChange={(event) => settext.setText(event.target.value)}
      />

      <br />
      <br />
      <input
        type="text"
        placeholder="Text 1 ... "
        onChange={(event) => settext.setText1(event.target.value)}
      />

      <br />
      <br />
      <input
        type="text"
        placeholder="Text 2 ... "
        onChange={(event) => settext.setText2(event.target.value)}
      />

      <br />
      <br />
      <input
        type="text"
        placeholder="Text 3 ... "
        onChange={(event) => settext.setText3(event.target.value)}
      />
    </div>
  );
};

export default B3;
