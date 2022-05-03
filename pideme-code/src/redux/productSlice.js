import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getProductsAsync = createAsyncThunk(
  'products/getProductsAsync',
  async () => {
    const res = await fetch('https://494f7b6f-1542-4ff5-bbdb-ff2bd877bc25.mock.pstmn.io/v1/products?restaurantCode=aleresto');
    if (res.ok) {
      const products = await res.json()
      return { products }
    }
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState: null,
  extraReducers: {
    [getProductsAsync.fulfilled]: (state, action) => {
      return action.payload.products
    }
  }
})

export default productSlice.reducer;