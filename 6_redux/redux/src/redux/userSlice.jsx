import { createSlice } from "@reduxjs/toolkit";

const Userslice = createSlice({
    name:"userslice",
    initialState:{
        user:null,
        loading:true,
        error:false,
    },
    reducers:{
        userLoading: (state)=>{
            state.error=false;
            state.loading=true;
        },
        useError: (state)=>{
            state.error = true;
            state.loading = false;
        },
        useData:(state,action)=>{
            state.loading=  false;
            state.user = action.payload;
        }
    }
});

export default Userslice;