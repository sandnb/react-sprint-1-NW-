import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice"
import Userslice from "./userSlice";

const store = configureStore({
   reducer:{
    counterState : counterSlice.reducer, // counterState : count
    userState : Userslice.reducer,// Userslice is stored inside the store with the name userState
   },
});

export default store;