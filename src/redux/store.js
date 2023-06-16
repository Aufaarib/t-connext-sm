import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice'
import getApiReducer from 'src/features/getApi'
import postApiReducer from 'src/features/postApi'
import deleteApiReducer from 'src/features/deleteApi'

export const store = configureStore({
  reducer: {
    getApi: getApiReducer,
    deleteApi: deleteApiReducer,
    postApi: postApiReducer,
    counter: counterReducer
  }
})

export default store
