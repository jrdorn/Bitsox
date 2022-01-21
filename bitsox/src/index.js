import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Redux
import { store } from "./app/store";
import { Provider } from "react-redux";

//Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Profile from "./pages/Profile/Profile";
import Support from "./pages/Support/Support";

// import * as serviceWorker from "./serviceWorker";

/**
 * Design Common components used in multiple pages
 * Config ecommerce backend- inventory
 */

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          <Route path="/cart" element={<Cart />} />

          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/support" element={<Support />} />

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
