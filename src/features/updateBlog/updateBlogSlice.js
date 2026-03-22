import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { updateBlogAPI } from "./updateBlogAPI";

const initialState = {
    data: {},
    isLoading: false,
    isError: false,
    error: '',
}

// async thunk
export const updateBlog = createAsyncThunk(
    'blog/updateBlog', // need to make a name.
    async ({id, data}) => {
        console.log('payload:', id, data); // 👈 debug
        const blog = await updateBlogAPI({id, data});
        return blog;
    }
)

const updateBlogSlice = createSlice({
    name: "updateBlog",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(updateBlog.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(updateBlog.fulfilled, (state, action) => {
            state.isLoading = false;
            state.blog = action.payload;
            state.data = {}
        })
        .addCase(updateBlog.rejected, (state, action) => {
            state.isLoading = false;
            state.blog = {};
            state.isError = true;
            state.error = action.error?.message;
            state.data = {}
        })
    }
})

export default updateBlogSlice.reducer;