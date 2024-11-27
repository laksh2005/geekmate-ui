import { createSlice } from "@reduxjs/toolkit";
const initialState = null;

const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        addFeed: (state,action) => action.payload,
        removeFeed: (state,action) => null,
    },
});

export const { addFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;