import {createSlice} from "@reduxjs/toolkit";

export const profileSlice=createSlice({
    name:'user',
    initialState:{
        role:"admin",
        userInfo :{
            role:"admin"
        }
    },
    reducers:{
        SetProfile:(state,action)=>{
            state.userInfo=action.payload
        },
    }
})
export  const {SetProfile}=profileSlice.actions;
export default  profileSlice.reducer;