import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { setGetApi } from 'src/features/getApi'

// Define the async action using createAsyncThunk
export const fetchData = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get('https://63e1c25ff59c591411a61021.mockapi.io/nusa-list-bank')

      dispatch(setGetApi(data))
    } catch (error) {
      // Handle the error here
      console.error('Error fetching data:', error)
      // Perform any necessary error handling or display an error message to the user
    }
  }
}
