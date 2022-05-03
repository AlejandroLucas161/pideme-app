import React, { useEffect, useState } from 'react';
import RestaurantName from './components/Restaurant/RestaurantName';
import RestaurantContact from './components/Restaurant/RestaurantContact';
import Categories from './components/Categories/Categories';
import Cart from './cart/Cart';

import restaurantMock from './data/restaurantMock.json';
import productsMock from './data/productsMock.json';

import { useDispatch, useSelector } from 'react-redux';
import { getProductsAsync } from './redux/productSlice';
import { getInfoAsync } from './redux/restaurantSlice';

import './App.css';

function App({ useMockedData }) {
  console.log(productsMock);

  const dispatch = useDispatch();
  const products = useSelector((state) => {
    if (useMockedData) {
      return productsMock
    } else {
      return state.products
    }
  })

  const restaurant = useSelector((state) => {
    if (useMockedData) {
      return restaurantMock[0]
    } else {
      return state.restaurant
    }
  })

  useEffect(() => {
    if (!useMockedData) {
      dispatch(getInfoAsync());
      dispatch(getProductsAsync());
    }
  }, [])

  return (
    <div className="App d-flex flex-xl-row flex-column">
      <div className="restaurant p-0 m-0 sticky-top border-r">
        <div className="m-0 bg-white">
          <RestaurantName restaurant={restaurant} />
        </div>

        <div className="d-none d-xl-block m-0 bg-white">
          <RestaurantContact restaurant={restaurant} />
        </div>
      </div>

      <div className="categories p-0 m-0 bg-light">
        <Categories products={products} />
      </div>

      <div className="d-md-block d-xl-none m-0 bg-white contact">
        <RestaurantContact restaurant={restaurant} />
      </div>

      <Cart restaurant={restaurant} />
    </div>
  )
}
export default App;
