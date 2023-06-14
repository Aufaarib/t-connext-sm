import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// Define the async action using createAsyncThunk
export const fetchData = createAsyncThunk('reducer/fetchData', async () => {
  try {
    const response = await axios.get('https://63e1c25ff59c591411a61021.mockapi.io/nusa-list-bank')
    return response.data
  } catch (error) {
    throw new Error('Error fetching data')
  }
})

// Create the slice with the reducer and the async action
const reducerSlice = createSlice({
  name: 'reducer',
  initialState: [],
  reducers: {
    // Other synchronous actions can be defined here
  },
  extraReducers: builder => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      // Update the state with the fetched data
      return action.payload
    })
  }
})

export default reducerSlice.reducer
