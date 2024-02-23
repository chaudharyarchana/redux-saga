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
      state.count += 1
      // console.log(actions.payload.payload)
    },
    requestFailed : (state) =>{
      state.isLoading = false;
    }
  },
});

export const { requestLogin, requestSuccess,requestFailed } = counterSlice.actions;

export default counterSlice.reducer;
