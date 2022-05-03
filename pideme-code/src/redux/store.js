import { configureStore } from '@reduxjs/toolkit';
import { loadState } from '../browser-storage';
import { ORDER_KEY } from '../constants';

import productReducer from './productSlice';
import restaurantReducer from './restaurantSlice';
import selectedReducer from './selectedSlice';
import orderReducer from './orderSlice';

export default configureStore({ 
  reducer: {
    products: productReducer,
    restaurant: restaurantReducer,
    selected: selectedReducer,
    order: orderReducer
  }, 

  preloadedState: {order: loadState(ORDER_KEY)},
});