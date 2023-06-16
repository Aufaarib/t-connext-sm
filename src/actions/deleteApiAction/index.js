import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { setDeleteApi } from 'src/features/deleteApi'

// Define the async action using createAsyncThunk
export const removeSelectedProduct = id => {
  return {
    // type: REMOVE_SELECTED_PRODUCT,
    payload: id
  }
}

export const deleteApi = id => {
  return async dispatch => {
    try {
      dispatch(setDeleteApi(id)) //change string to number

      await axios.delete(`https://63e1c25ff59c591411a61021.mockapi.io/nusa-list-bank/${id}`)
    } catch (error) {
      // Handle the error here
      console.error('Error fetching data:', error)
      // Perform any necessary error handling or display an error message to the user
    }
  }
}
