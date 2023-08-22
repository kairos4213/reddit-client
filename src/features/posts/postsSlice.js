import { createSlice } from "@reduxjs/toolkit";
import { postsData } from "../../postsData";

const initialState = {
    posts: postsData,
    isLoading: true
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        search: (state, action) => {
            state.posts = [action.payload];
        }
    }
});

export default postsSlice.reducer;