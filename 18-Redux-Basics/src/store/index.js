import { createStore } from "redux";

const counterReducer = (state = { count: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
    };
  }

  if (action.type === "INCREASE"){
    return {
      count: state.count + action.amount
    }
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
