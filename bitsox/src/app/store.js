import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../pages/Home/features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
