import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
};

const dynamicCounterSlice = createSlice({
    name: "dynamic counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count += action.payload;
        },
        decrement: (state, action) => {
            state.count -= action.payload;
        },
    },
});

export const dynamicCounterActions = dynamicCounterSlice.actions;
export default dynamicCounterSlice.reducer;