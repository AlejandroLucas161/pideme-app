import { createSlice } from '@reduxjs/toolkit';

export const selectedSlice = createSlice({
  name: 'selected',
  initialState: null,
  reducers: {
    setSelected: (state, action) => {
      return action.payload
    }
  }
})

export const { setSelected } = selectedSlice.actions;
export default selectedSlice.reducer;