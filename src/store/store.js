import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import storiesReducer from './storiesSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    stories: storiesReducer,
    user: userReducer
  }
});