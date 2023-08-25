import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPopularPosts, fetchSearch } from "../api/redditApi";
// import { postsData } from "../../postsData";

const initialState = {
    posts: [],
    searchTerm: '',
    isLoading: true,
    error: null
};

export const getPopularPosts = createAsyncThunk(
    'posts/getPopularPosts',
    fetchPopularPosts
)

export const getSearch = createAsyncThunk(
    'posts/getSearch',
    fetchSearch
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setSearchTerm(state, action) {
            state.searchTerm = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPopularPosts.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getPopularPosts.fulfilled, (state, action) => {
            state.isLoading = false
            state.posts.push(action.payload.data.children)
        })
        builder.addCase(getPopularPosts.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        builder.addCase(getSearch.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(getSearch.fulfilled, (state, action) => {
            state.isLoading = false
            state.posts = action.payload.data.children
        })
        builder.addCase(getSearch.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
    }
});

export const { setSearchTerm } = postsSlice.actions;

export default postsSlice.reducer;