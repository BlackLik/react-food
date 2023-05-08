import { createSlice } from '@reduxjs/toolkit';

const SEOSlice = createSlice({
  name: 'SEOSlice',
  initialState: {
    data: {
      title: '',
      description: '',
      image: '',
      url: '',
    },
  },
  reducers: {
    setSeo: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { setSeo } = SEOSlice.actions;
export default SEOSlice.reducer;
