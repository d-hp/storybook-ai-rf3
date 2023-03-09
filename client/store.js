import { configureStore } from '@reduxjs/toolkit';
import storyReducer from './reducers/storyReducer.js';

export default configureStore({
  reducer: {
    stories: storyReducer,
  },
  devTools: true,
});
