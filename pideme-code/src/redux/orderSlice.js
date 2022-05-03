import { createSlice } from '@reduxjs/toolkit';

export const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    addOrderItem: (state, action) => {
      const orderItem = {
        id: new Date().getTime(),
        ...action.payload
      }
      state.push(orderItem)
    },
    removeOrderItem: (state, action) => {
      return state.filter((orderItem) => orderItem.id !== action.payload);
    },
    clearOrder: (state, action) => {
      return state = [];
    }
  }
})

export const { addOrderItem, removeOrderItem, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;