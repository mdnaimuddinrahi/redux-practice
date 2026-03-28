import { configureStore } from "@reduxjs/toolkit";
import JobListReducer from "../features/JobList/JobListSlice"

export default store = configureStore({
    reducer: {
        joblist: JobListReducer,
    }
})