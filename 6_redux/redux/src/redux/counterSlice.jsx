// to create a slice -> redux;

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counterslice",
    initialState:{
        count:5,
    },
    reducers:{
        increment: (state)=>{
            state.count += 1;
        },
        decrement: (state)=>{
            state.count -= 1;
        }
    }
});

export default counterSlice