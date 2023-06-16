import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  getApi: []
}

// Create the slice with the reducer and the async action
const getApiSlice = createSlice({
  name: 'Get Api',
  initialState: initialState,
  reducers: {
    setGetApi(state, action) {
      return {
        getApi: action.payload
      }
    }
  }
  //   extraReducers: builder => {
  //     builder.addCase(fetchData.fulfilled, (state, action) => {
  //       // Update the state with the fetched data
  //       return action.payload
  //     })
  //   }
})

const { setGetApi } = getApiSlice.actions
const getApiReducer = getApiSlice.reducer

export default getApiReducer
export { setGetApi }
