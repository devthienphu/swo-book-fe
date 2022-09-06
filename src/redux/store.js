import { configureStore } from "@reduxjs/toolkit";
import videoSelectorReducer from "../frontend/VideoSelector/videoSelectorSlice";


const store =configureStore({
    reducer:{
        videoSelector: videoSelectorReducer
    },
})

export default store;