import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../pages/Home/components/counter/counterSlice";
//
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
//

//
const initialState = {};
// const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
//

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
