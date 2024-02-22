import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/store/auth/auth.js'
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware } from '@reduxjs/toolkit'
// import reduxSaga from 'redux-saga'
import rootSaga from './sagas'

export const makeStore = () => {

  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: {
        counter: counterReducer, 
    },
   middleware : ()=> [sagaMiddleware]

  })

  sagaMiddleware.run(rootSaga)
 
  return store
}
