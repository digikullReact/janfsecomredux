import { createSlice } from '@reduxjs/toolkit'
import { signup } from '../thunks/auththunk'




const initialState = {
    name:"",
    email:"",
    password:"",
    status:{
       type:"",
       text:""

    }

    
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

 
  },
  extraReducers:(builder)=>{
    builder.addCase(signup.fulfilled,(state,action)=>{
  

        // we will be reciving token from here right 
        console.log(action);
     



    }),

    builder.addCase(signup.rejected,(state,action)=>{

        console.log(action);


        // you will receive the data in action payload if your api is successfull
      state.status.type="error";
      state.status.text=action.error.message

 


    }),
    builder.addCase(signup.pending,(state,action)=>{
   



    })



  }
})

// Action creators are generated for each case reducer function
export const { } = authSlice.actions

export default authSlice.reducer