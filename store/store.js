import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/store/auth/auth.js'

export const makeStore = () => {
  return configureStore({
    reducer: {
        counter: counterReducer, 
    },
  })
}