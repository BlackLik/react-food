import { configureStore } from '@reduxjs/toolkit';
import SEOReducer from './SEOSlicer';
import ReceptSlicer from './ReceptSlicer';

export default configureStore({
  reducer: {
    seo: SEOReducer,
    recept: ReceptSlicer,
  },
  devTools: import.meta.env.VITE_ENV === 'development',
});
