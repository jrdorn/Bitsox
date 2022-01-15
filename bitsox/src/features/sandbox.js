//root
const initialScale = {
  value: 0,
};

//ACTION
//dispatch objects
document.querySelector("#increment").addEventListener("click", function () {
  store.dispatch({ type: "counter/incremented" });
});

document.querySelector("#decrement").addEventListener("click", function () {
  store.dispatch({ type: "counter/decremented" });
});

document
  .querySelector("#incrementIf0dd")
  .addEventListener("click", function () {
    //
    if (store.getState().value % 2 !== 0) {
      store.dispatch({ type: "counter/incremented" });
    }
  });

document
  .querySelector("#incrementAsync")
  .addEventListener("click", function () {
    //
    setTimeout(function () {
      store.dispatch({ type: "counter/incremented" });
    }, 1000);
  });

//REDUCER
function counterReducer(state = initialState, action) {
  //
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + 1 };
    case "counter/decremented":
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
}

//
//immutably update state: copy existing and update
//

//STORE, generate init state
const store = Redux.createStore(counterReducer);

const valueEl = document.querySelector("#value");

//when store state changes, update UI by reading latest store state and displaying new data
function render() {
  const state = store.getState();
  valueEl.innerHTML = state.value.toString();
}

render(); //update UI
store.subscribe(render); //subscribe to redraw when the data changes in the future

/**
 * Actions are plain object with a type
 * Reducers are function that calc new state = old state + action
 * Store runs root reducer when action is dispatched
 */

////////////////////////////////////////////////////////////////////////////////

function Counter() {
  //State
  const [counter, setCounter] = useState(0);

  //Action
  const increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  //View
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  );
}

//Immutably update value

const obj = {
  a: {
    c: 3,
  },
  b: 2,
};

const obj2 = {
  ...obj,
  a: {
    ...obj.a,
    c: 42,
  },
};

const arr = [1, 2]; //
const arr2 = arr.concat(3);
const arr3 = arr.slice();
arr3.push(3);

//Action
const addTodoAction = {
  type: "todos/todoAdded",
  payload: "Buy biscuits",
};

//Reducer
const initState = { value: 0 };

function countReduce(state = initState, action) {
  //update if action===incremented
  if (action.type === "counter/incremented") {
    //
    return {
      ...state,
      value: state.value + 1,
    };
  }
  //else return unchanged state
  return state;
}

//Store
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: countReduce }); //the store is created by passing in a reducer
console.log(store.getState()); //getState method returns current value

store.dispatch({ type: "counter/incremented" }); //only way to update state is to call dispatch method and pass in an action object

const selectCounterValue = (state) => state.value;
const currValue = selectCounterValue(store.getState()); //selector functions extract specific info from store state value

/**
 * any piece of data should only exist in one location
 * piece of stay may be in Redux or in one of the UI components
 */

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

const store = Redux.createStore(counterReducer); //new Redux store

store.subscribe(render); //subscribe to redraw when data changes

const valueEl = document.querySelector("#value"); //UI

//when subscription runs
function render() {
  const state = store.getState(); //get current store state
  const newValue = state.value.toString(); //extract a value from data
  valueEl.innerHTML = newValue; //update UI with new value
}
render();

//dispatch actions based on UI inputs
document.querySelector("#increment").addEventListener("click", function () {
  store.dispatch({ type: "counter/incremented" });
});

/////////

const selectNumCompletedTodos = createSelector(
  (state) => state.todos,
  (todos) => todos.filter((todo) => todo.completed).length
);
