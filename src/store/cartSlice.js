import { createSlice } from "@reduxjs/toolkit";

//
export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    readCart(state, action) {},
    updateCart(state, action) {},
  },
});

export default cartSlice.reducer;
