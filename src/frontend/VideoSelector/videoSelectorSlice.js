import { createSlice } from "@reduxjs/toolkit";


export const videoSelectorSlice= createSlice({
    name:'videoSelector',
    initialState:{
        video_url:'CbUjGxnJiVo'
    },
    reducers:{
        changeUrl:(state,action)=>{
            state.video_url = action.payload
        }
    },
})

export const { changeUrl } = videoSelectorSlice.actions
export default videoSelectorSlice.reducer
