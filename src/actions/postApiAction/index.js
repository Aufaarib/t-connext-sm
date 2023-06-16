import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { setPostApi } from 'src/features/postApi'

// Define the async action using createAsyncThunk
export const postApi = data => {
  return async dispatch => {
    try {
      const response = axios.post('https://63e1c25ff59c591411a61021.mockapi.io/nusa-list-bank', data)
      dispatch(setPostApi(response))
    } catch (error) {
      // Handle the error here
      console.error('Error fetching data:', error)
      // Perform any necessary error handling or display an error message to the user
    }
  }
}
