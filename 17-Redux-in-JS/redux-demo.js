const redux = require("redux");

const counterReducer = (state = { count: 0 }, action) => {
  if (action.type === "INCREMENT") {
    return {
      count: state.count + 1
    };
  }

  if (action.type === "DECREMENT") {
    return {
      count: state.count - 1
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscribe = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscribe);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
