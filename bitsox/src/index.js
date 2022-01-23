import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Redux
import { store } from "./app/store";
import { Provider } from "react-redux";

//Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Common from "./routes/Common/Common";

import Root from "./routes/Common/routes/Root/Root";
import Profile from "./routes/Common/routes/Profile/Profile";
import Cart from "./routes/Common/routes/Cart/Cart";

import HelpCenter from "./routes/Common/routes/HelpCenter/HelpCenter";
import About from "./routes/Common/routes/HelpCenter/routes/About/About";
import Blog from "./routes/Common/routes/HelpCenter/routes/Blog/Blog";

import Checkout from "./routes/Checkout/Checkout";

// import * as serviceWorker from "./serviceWorker";

/*
 * Config ecommerce backend- inventory


path="help_center"
 */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Common />}>
            <Route index element={<Root />} />
            <Route path="profile" element={<Profile />} />

            <Route path="cart" element={<Cart />} />

            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/help_center" element={<HelpCenter />} />
          </Route>

          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
