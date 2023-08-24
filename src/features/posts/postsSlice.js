import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { postsData } from "../../postsData";

const popularUrl = 'https://www.reddit.com/r/popular.json'
const searchUrl = 'https://www.reddit.com/search.json?q='

const initialState = {
    posts: [],
    isLoading: true
};

export const getPopularPosts = createAsyncThunk(
    'posts/getPopularPosts', () => {
        return fetch(popularUrl)
            .then((response) => response.json())
            .catch((error) => console.log(error));
    }
)

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        search: (state, action) => {
            state.posts = [action.payload];
        }
    },
    extraReducers: {
        [getPopularPosts.pending]: (state) => {
            state.isLoading = true;
        },
        [getPopularPosts.fulfilled]: (state, action) => {
            console.log(action.payload.data.children)
            state.isLoading = false
            state.posts = action.payload.data.children
        },
        [getPopularPosts.rejected]: (state) => {
            state.isLoading = false
        }
    }
});

export default postsSlice.reducer;