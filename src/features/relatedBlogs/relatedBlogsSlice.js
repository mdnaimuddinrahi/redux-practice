import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedBlogs } from "./relatedBlogsAPI";

const initialState = {
    relatedBlogs: [],
    isLoading: false,
    isError: false,
    error: '',
}

// async thunk
export const fetchRelatedBlogs = createAsyncThunk(
    'relatedBlogs/fetchRelatedBlogs', // need to make a name.
    async ({id, tags}) => {
        const relatedBlogs = await getRelatedBlogs({id, tags});
        return relatedBlogs;
    }
)

const relatedBlogsSlice = createSlice({
    name: "relatedBlogs",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchRelatedBlogs.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.relatedBlogs = action.payload.data
        })
        .addCase(fetchRelatedBlogs.rejected, (state, action) => {
            state.isLoading = false;
            state.relatedBlogs = []
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})

export default relatedBlogsSlice.reducer;