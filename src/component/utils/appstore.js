import { configureStore } from "@reduxjs/toolkit";
import barReducer from  "./BarSlice"

const appStore = configureStore({
    reducer:{
     bar:barReducer
    }
})

export default appStore;