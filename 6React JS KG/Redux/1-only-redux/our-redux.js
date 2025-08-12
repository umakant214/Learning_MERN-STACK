const redux = require("redux");
const INITIAL_VALUE = {
  counter: 3,
};
const reducer = (store = INITIAL_VALUE, action) => {
  let newStore = store;
  if (action.type === "INCREMENT") {
    return (newStore = { counter: store.counter + 1 });
  } else if (action.type === "DECREMENT") {
    return (newStore = { counter: store.counter - 1 });
  }
  return newStore;
};
const store = redux.createStore(reducer);

const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
