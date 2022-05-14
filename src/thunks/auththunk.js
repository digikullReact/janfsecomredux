import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from 'axios'


// First, create the thunk

// thunk action
export const signup = createAsyncThunk(
  'auth/signup',
  async (data) => {
    const response = await  axios.post("http://localhost:8000/api/auth/signup",data)
    return response.data
  }
)