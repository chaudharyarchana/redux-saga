import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading : false,
  count : 0
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment:  (state) => {

       return {...state , isLoading:true}
       
    },

  },
})

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions

export default counterSlice.reducer