import { createSlice } from "@reduxjs/toolkit";

/**
  TODO
 
    track loading state to show UI spinners on shop items



    components that call RTKQuery hooks on mount
    JSON and image  
    highlight on click, display data


 */

export const shopSlice = createSlice({
  name: "shop",
  initialState: [],
  reducers: {
    readShop(state, action) {},
    updateShop(state, action) {},
  },
});

//action creator using name of the action type itself:
//  createSomething() returns an action with type "shop/createSomething"
// const { createSomething } = shopSlice.actions;
// console.log(createSomething({ id: 123, message: "gm" }));

/** define a slice and export its action creators and reducers  */

///
///
///

// // First, define the reducer and action creators via `createSlice`
// const usersSlice = createSlice({
//   name: "users",
//   initialState: {
//     loading: "idle",
//     users: [],
//   },
//   reducers: {
//     usersLoading(state, action) {
//       // Use a "state machine" approach for loading state instead of booleans
//       if (state.loading === "idle") {
//         state.loading = "pending";
//       }
//     },
//     usersReceived(state, action) {
//       if (state.loading === "pending") {
//         state.loading = "idle";
//         state.users = action.payload;
//       }
//     },
//   },
// });

// // Destructure and export the plain action creators
// export const { usersLoading, usersReceived } = usersSlice.actions;

// // Define a thunk that dispatches those action creators
// const fetchUsers = () => async (dispatch) => {
//   dispatch(usersLoading());
//   const response = await usersAPI.fetchAll();
//   dispatch(usersReceived(response.data));
// };
export default shopSlice.reducer;
