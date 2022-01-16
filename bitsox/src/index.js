import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
//
import Home from "./pages/Home/Home";
// import { Router, Route } from "react-router";
//
import * as serviceWorker from "./serviceWorker";

/**
 * Get React Router to render different pages
 * Config React-Router-Redux
 * Design Home
 */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
