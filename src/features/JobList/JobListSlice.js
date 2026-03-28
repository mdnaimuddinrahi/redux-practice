import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { editJobSeek, getJobList, removeJobSeek } from "./JobListApi"

const initialState = {
    jobList: [],
    isLoading: false,
    isError: false,
    error: '',
    editing: {}
}

export const fetchJobList = createAsyncThunk(
    'joblist/fetchJobList',
    async () => {
        const jobList = await getJobList()
        return jobList
    }
)

export const createJobSeek = createAsyncThunk(
    'joblist/createJobSeek',
    async (data) => {
        const jobSeek = await addJobSeek(data)
        return jobSeek
    }
)

export const updateJobSeek = createAsyncThunk(
    'joblist/updateJobSeek',
    async (id, data) => {
        const jobSeek = await editJobSeek(id, data)
        return jobSeek
    }
)

export const deleteJobSeek = createAsyncThunk(
    'joblist/deleteJobSeek',
    async (id) => {
        const jobSeek = await removeJobSeek(id)
        return jobSeek
    }
)

// create slice
const jobSlice = createSlice({
    name: "joblist",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchJobList.pending, (state) => {
            state.isError = false
            state.isLoading = true
        })
        builder.addCase(fetchJobList.fulfilled, (state, action) => {
            state.isError = false
            state.isLoading = false 
            state.jobList = action.payload
        })
        builder.addCase(fetchJobList.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false 
            state.jobList = []
            state.error = action.error?.message
        })
        builder.addCase(createJobSeek.pending, (state) => {
            state.isError = false
            state.isLoading = true
        })
        builder.addCase(createJobSeek.fulfilled, (state, action) => {
            state.isError = false
            state.isLoading = false 
            state.jobList.push(action.payload)
        })
        builder.addCase(createJobSeek.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.error = action.error?.message
        })
        builder.addCase(updateJobSeek.pending, (state) => {
            state.isError = false
            state.isLoading = true
        })
        builder.addCase(updateJobSeek.fulfilled, (state, action) => {
            state.isError = false
            state.isLoading = false
            const indexToUpdate = state.jobList.findIndex(t => t.id === action.payload.id)
            state.jobList[indexToUpdate] = action.payload
        })
        builder.addCase(updateJobSeek.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.error = action.error?.message
        })
        builder.addCase(deleteJobSeek.pending, (state) => {
            state.isError = false
            state.isLoading = true
        })
        builder.addCase(deleteJobSeek.fulfilled, (state, action) => {
            state.isError = false
            state.isLoading = false
            state.jobList.filter(t => t.id !== action.meta.arg)
        })
        builder.addCase(deleteJobSeek.rejected, (state, action) => {
            state.isError = true
            state.isLoading = false
            state.error = action.error?.message
        })
    }
})

export default jobSlice.reducer
// export const {}