import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  postApi: []
}

// Create the slice with the reducer and the async action
const postApiSlice = createSlice({
  name: 'Post Api',
  initialState: initialState,
  reducers: {
    setPostApi(state, action) {
      return {
        postApi: action.payload
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

const { setPostApi } = postApiSlice.actions
const postApiReducer = postApiSlice.reducer

export default postApiReducer
export { setPostApi }
