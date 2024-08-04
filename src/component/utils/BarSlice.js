import { createSlice } from "@reduxjs/toolkit";

const BarSlice =createSlice({
    name:"bar",
    initialState:{
     isOpen:false,
    },
    reducers:{
       toggleBar:(state,action)=>{
        state.isOpen=action.payload;
       }
    }
})

export const {toggleBar} =BarSlice.actions;
export default BarSlice.reducer;
