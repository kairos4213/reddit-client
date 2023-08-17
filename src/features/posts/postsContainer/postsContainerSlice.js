import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    isLoading: true
};

const postsContainerSlice = createSlice({
    name: 'posts',
    initialState,
});

//console.log(postsContainerSlice)

export default postsContainerSlice.reducer;