// this is  a redux global store 

import { configureStore } from '@reduxjs/toolkit'
import productSlice  from '../slices/productSlice'

export const store = configureStore({
  reducer: {

    productSlice:productSlice
  },
})