import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideos } from "./videosAPI"

const initialState = {
    videos: [],
    isLoading: false,
    isError: false,
    error: '',
    pagination: {
        currentPage: 1,
        lastPage: 1,
        total: 0,
        perPage: 0,
    },
}

// async thunk
export const fetchVideos = createAsyncThunk(
    'videos/fetchVideos', // need to make a name.
    async ({search, tags, page = 1}) => {
        const videos = await getVideos({search, tags, page});
        return videos;
    }
)



const videoSlice = createSlice({
    name: "videos",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(fetchVideos.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.videos = action.payload.data

            state.pagination = {
                currentPage: action.payload.meta.current_page,
                lastPage: action.payload.meta.last_page,
                total: action.payload.meta.total,
                perPage: action.payload.meta.per_page,
            };
        })
        .addCase(fetchVideos.rejected, (state, action) => {
            state.isLoading = false;
            state.videos = []
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})

export default videoSlice.reducer;