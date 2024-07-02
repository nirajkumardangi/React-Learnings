import { createStore } from "redux";

const initialState = { count: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "INCREASE") {
    return {
      count: state.count + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "TOGGLE") {
    return {
      showCounter: !state.showCounter,
      count: state.count,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
