import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../pages/Common/layout/Socks/features/Counter/counterSlice";
import fCReducer from "../pages/Common/layout/HelpCenter/layout/About/features/FunctionComponent/FunctionComponentSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fCount: fCReducer,
  },
});

// import { configureStore } from "@reduxjs/toolkit";
// import usersReducer from "../features/users/usersSlice";
// import postsReducer from "../features/posts/postsSlice";
// import commentsReducer from "../features/comments/commentsSlice";

// export default configureStore({
//   reducer: {
//     users: usersReducer,
//     posts: postsReducer,
//     comments: commentsReducer,
//   },
// });
//usersReducer is a "slice reducer" function
//configureStore takes an object of multiple slice reducers
// and passes those to combineReducers to generate the root reducer
