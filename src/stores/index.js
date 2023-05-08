import { configureStore } from '@reduxjs/toolkit';
import SEOReducer from './SEOSlicer';

export default configureStore({
  reducer: {
    seo: SEOReducer,
  },
  devTools: import.meta.env.VITE_ENV === 'development',
});
