import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice'
import reducer from './reducer'

export const store = configureStore({
  reducer: {
    reducer: reducer,
    counter: counterReducer
  }
})

export default store
