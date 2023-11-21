import { createStore } from "redux";

const initionState = {
  counter: 0,
  shov: true,
};

const counterReduce = (state = initionState, action) => {
  switch (action.type) {
    case "inc":
      return { counter: state.counter + 1, shov: state.shov };
    case "dec":
      return { counter: state.counter - 1, shov: state.shov };
    case "toggle":
      return { counter: state.counter, shov: !state.shov };
    case "nol":
      return { counter: 0, shov: state.shov };
    case "value":
      return { counter: state.counter + action.paylod, shov: state.shov };
  }
  return state;
};

const store = createStore(counterReduce);

export default store;
