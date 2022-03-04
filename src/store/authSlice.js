import { createSlice } from "@reduxjs/toolkit";

//
export const authSlice = createSlice({
  name: "auth",
  initialState: [],
  reducers: {
    readAuth(state, action) {},
    updateAuth(state, action) {},
  },
});

export default authSlice.reducer;
