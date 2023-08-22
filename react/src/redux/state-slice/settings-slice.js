import {createSlice} from "@reduxjs/toolkit";
export const settingsSlice=createSlice({
    name:'settings',
    initialState:{
        loader:"hidden",
        tableloader:false,
    },
    reducers:{
        ShowLoader:(state)=>{
            state.loader=""
        },
        HideLoader:(state)=>{
            state.loader="hidden"
        },
        ShowTableLoader:(state)=>{
            state.tableloader=true
        },
        HideTableLoader:(state)=>{
            state.tableloader=false
        },
    }
})
export  const {ShowLoader,HideLoader,ShowTableLoader,HideTableLoader}=settingsSlice.actions;
export default  settingsSlice.reducer;