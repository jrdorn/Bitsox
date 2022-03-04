import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import counterReducer from "../routes/Common/routes/Root/components/Counter/counterSlice";
// import fCReducer from "../routes/Common/routes/HelpCenter/routes/FAQs/components/FunctionComponent/FunctionComponentSlice";

//
import { setupListeners } from "@reduxjs/toolkit/query";

//
import { bitsoxAPI } from "./bitsoxAPI";

//
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import privateReducer from "./privateSlice";
import shopReducer from "./shopSlice";

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    // fCount: fCReducer, // slice reducer

    // generated bitsoxAPI reducer as a top-level slice
    [bitsoxAPI.reducerPath]: bitsoxAPI.reducer,

    //
    auth: authReducer,
    cart: cartReducer,
    private: privateReducer,
    shop: shopReducer,
  },

  // enable RTK Query caching, invalidation, polling
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bitsoxAPI.middleware),
});

// refetch RTK Queries once internet connection is re-established, do not refetch after app window regains focus
setupListeners(store.dispatch);
