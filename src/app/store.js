import { configureStore } from "@reduxjs/toolkit";
import JobListReducer from "../features/JobList/JobListSlice"

export const store = configureStore({
    reducer: {
        jobseeker: JobListReducer,
    }
})