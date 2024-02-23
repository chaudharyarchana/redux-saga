import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  count: 0,
};

export const counterSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    requestLogin: (state) => {
      
      state.isLoading = true;
    },
    requestSuccess: (state,actions) => {
      state.isLoading = false;
      // console.log(actions.payload.payload)
    },
  },
});

export const { requestLogin, requestSuccess } = counterSlice.actions;

export default counterSlice.reducer;
