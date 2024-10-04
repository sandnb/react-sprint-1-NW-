// to create a slice -> redux;

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counterslice",
    initialState:{
        count:5,
        nothing:"Chill",
    },
    reducers:{
        increment: (state)=>{
            state.count += 1;
            alert(state.nothing);
        },
        decrement: (state)=>{
            state.count -= 1;
        }
    }
});

export default counterSlice