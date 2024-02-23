import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/store/auth/auth.js'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'


export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: {
        login: counterReducer, 
    },
   middleware : () => [sagaMiddleware]

  })

  sagaMiddleware.run(rootSaga)

  return store
}



