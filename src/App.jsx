import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import UseReduce from "./usereduce/UseReduce";
import UseState from "./usestate/UseState";
import { useState } from "react";

function App() {
  const values = useSelector((state) => state);
  const [valueQiymat, setValueQiymat] = useState("");
  console.log(values);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>Use State </h1>
      <UseState />
      <br />
      <br />
      <hr />
      <h1>Use Context </h1>
      <UseReduce />
      <br />
      <br />
      <hr />
      <h1>Rudux </h1>
      <h1>Counter : {values.shov && values.counter}</h1>
      <button onClick={() => dispatch({ type: "toggle" })}>Shov/Hidden</button>
      <button onClick={() => dispatch({ type: "inc" })}>INC</button>
      <button onClick={() => dispatch({ type: "dec" })}>DEC</button>
      <button onClick={() => dispatch({ type: "nol" })}>Number 0</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Text ..."
        onChange={(e) => setValueQiymat(e.target.value)}
      />
      <button onClick={() => dispatch({ type: "value", paylod: +valueQiymat })}>
        +
      </button>
      <br />
      <br />
      <hr />
    </div>
  );
}

export default App;
