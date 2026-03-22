import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsAPI";

const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    error: '',
}

// async thunk
export const fetchBlogs = createAsyncThunk(
    'blogs/fetchBlogs', // need to make a name.
    async ({is_saved, sort_by}) => {
        const blogs = await getBlogs({is_saved, sort_by});
        return blogs;
    }
)

const blogSlice = createSlice({
    name: "blogs",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchBlogs.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchBlogs.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blogs = action.payload
            console.log('action.payload :>> ', action.payload);
        })
        .addCase(fetchBlogs.rejected, (state, action) => {
            state.isLoading = false;
            state.blogs = []
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})

export default blogSlice.reducer;