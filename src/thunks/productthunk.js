import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import axios from 'axios'


// First, create the thunk

// thunk action
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await  axios.get("https://fakestoreapi.com/products")
    return response.data
  }
)