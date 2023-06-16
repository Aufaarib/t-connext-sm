import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  deleteApi: []
}

// Create the slice with the reducer and the async action
const deleteApiSlice = createSlice({
  name: 'Delete Api',
  initialState: initialState,
  reducers: {
    setDeleteApi(state, action) {
      return {
        deleteApi: action.payload
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

const { setDeleteApi } = deleteApiSlice.actions
const deleteApiReducer = deleteApiSlice.reducer

export default deleteApiReducer
export { setDeleteApi }
