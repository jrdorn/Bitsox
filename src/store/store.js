import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../routes/Common/routes/Root/components/Counter/counterSlice";
import fCReducer from "../routes/Common/routes/HelpCenter/routes/FAQs/components/FunctionComponent/FunctionComponentSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fCount: fCReducer, // slice reducer
  },
});
