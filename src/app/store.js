import { configureStore } from '@reduxjs/toolkit';
import postsContainerReducer from '../features/posts/postsContainer/postsContainerSlice';

export const store = configureStore({
  reducer: {
    posts: postsContainerReducer
  }
});
