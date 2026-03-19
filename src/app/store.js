import { configureStore } from "@reduxjs/toolkit";
import videosReducer from '../features/videos/videoSlice'

export const store = configureStore({
    reducer: {
        videos: videosReducer
    }
})