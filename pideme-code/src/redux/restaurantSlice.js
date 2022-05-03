import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getInfoAsync = createAsyncThunk(
  'restaurant/getInfoAsync',
  async() => {
    const res = await fetch('https://494f7b6f-1542-4ff5-bbdb-ff2bd877bc25.mock.pstmn.io/v1/restaurants?code=aleresto');
    if(res.ok) {
      const restaurant = await res.json()
      return { restaurant }
    }
  }
)

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: null,
  extraReducers: {
    [getInfoAsync.fulfilled]: (state, action) => {
      return action.payload.restaurant[0]
    }
  }
})

export default restaurantSlice.reducer;