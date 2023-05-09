import { createSlice } from '@reduxjs/toolkit';

const ReceptionistSlice = createSlice({
  name: 'receptionist',
  initialState: {
    data: {
      id: '',
      name: '',
      drinkAlternate: null,
      category: '',
      area: '',
      instructions: '',
      thumb: '',
      tags: [],
      youtube: '',
      ingredients: [],
      source: '',
      imageSource: '',
      creativeCommonsConfirmed: '',
      dateModified: '',
    },
  },
  reducers: {
    setReceptionist: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setReceptionist } = ReceptionistSlice.actions;
export default ReceptionistSlice.reducer;
