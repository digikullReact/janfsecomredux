import { createSlice } from '@reduxjs/toolkit'
import {fetchProducts} from "../thunks/productthunk"

const initialState = {

    cart:[],
    products:[],
    showSpinner:false,
    error:false
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    addTocart:(state,action)=>{
      state.cart.push(action.payload);

    }
 
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
      state.products=action.payload;
      state.showSpinner=false;
      



    }),

    builder.addCase(fetchProducts.rejected,(state,action)=>{

      state.showSpinner=false;
      state.error=true;


    }),
    builder.addCase(fetchProducts.pending,(state,action)=>{
      state.showSpinner=true;



    })



  }
})

// Action creators are generated for each case reducer function
export const {addTocart } = productSlice.actions

export default productSlice.reducer