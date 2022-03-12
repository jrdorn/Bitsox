import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

//Redux
import { store } from "./store/store";
import { Provider } from "react-redux";

//Routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Common from "./routes/Common/Common";

import Root from "./routes/Common/routes/Root/Root";
import Profile from "./routes/Common/routes/Profile/Profile";
import ProfileAuth from "./routes/Common/routes/ProfileAuth/ProfileAuth";
import Cart from "./routes/Common/routes/Cart/Cart";

import HelpCenter from "./routes/Common/routes/HelpCenter/HelpCenter";
import FAQs from "./routes/Common/routes/HelpCenter/routes/FAQs/FAQs";
import Blog from "./routes/Common/routes/HelpCenter/routes/Blog/Blog";

import Checkout from "./routes/Checkout/Checkout";

import Err from "./routes/Err/Err";

// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Common routes with Searchbar, Filters, and Navbar */}
          <Route path="/" element={<Common />}>
            {/* Root shopping, Profile, Cart nested routes */}
            <Route index element={<Root />} />
            <Route path="profile_auth" element={<ProfileAuth />} />
            <Route path="profile" element={<Profile />} />
            <Route path="cart" element={<Cart />} />

            {/* HelpCenter and associated routes that do not share its styles */}
            <Route path="help_center" element={<HelpCenter />} />
            <Route path="help_center/faqs" element={<FAQs />} />
            <Route path="help_center/blog" element={<Blog />} />
          </Route>

          {/* Checkout route */}
          <Route path="/checkout" element={<Checkout />} />

          {/* 404 route */}
          <Route path="*" element={<Err />} />
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
