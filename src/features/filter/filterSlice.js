import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    'is_saved': 2,
    'sort_by': ''
}

const filterSlice = createSlice({
    name: "filterBlogs",
    initialState,
    reducers: {
        setIsSaved: (state, action) => {
            state.is_saved = action.payload
        },
        
        setSortBy: (state, action) => {
            state.sort_by = action.payload
        }
    }
})

export default filterSlice.reducer;

export const {setIsSaved, setSortBy} = filterSlice.actions;