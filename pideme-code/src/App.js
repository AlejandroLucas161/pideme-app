import React, { Fragment, useEffect, useState } from 'react';
import RestaurantName from './components/Restaurant/RestaurantName';
import RestaurantContact from './components/Restaurant/RestaurantContact';
import Categories from './components/Categories/Categories';

import spinner from './assets/spinner.svg';
import restaurantMock from './data/restaurantMock.json';
import productsMock from './data/productsMock.json';
import './App.css';

function App({ useMockedData }) {
  const [restaurant, setRestaurant] = useState(null);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const getInfo = async () => {
      let data;

      if(useMockedData) {
        data = restaurantMock;
      } else {
        const response = await fetch('https://494f7b6f-1542-4ff5-bbdb-ff2bd877bc25.mock.pstmn.io/v1/restaurants?code=aleresto');
        data = await response.json(); 
      }

      setRestaurant(data[0]);
    }

    getInfo();
  },[])  

  useEffect(() => {
    const getProducts = async () => {
      let data;

      if(useMockedData) {
        data = productsMock;
      } else {
        const response = await fetch('https://494f7b6f-1542-4ff5-bbdb-ff2bd877bc25.mock.pstmn.io/v1/products?restaurantCode=aleresto');
        data = await response.json(); 
      }

      setProducts(data);
      setLoading(false);
    }

    getProducts();
  },[]) 

  return ( 
    loading ? (
      <div className="spinner">
        <img src={spinner} />
      </div> 
    ) : (
      <div className="App d-flex flex-xl-row flex-column"> 
        <div className="restaurant sticky-top border-r">
          <div className="m-0 bg-white">
            <RestaurantName restaurant={restaurant} /> 
          </div> 

          <div className="d-none d-xl-block m-0 bg-white">
            <RestaurantContact restaurant={restaurant} />
          </div>
        </div>

        <div className="categories bg-light">
          <Categories products={products}/>
        </div>

        <div className="d-md-block d-xl-none m-0 bg-white contact">
          <RestaurantContact restaurant={restaurant} />
        </div>
      </div>          
    )
  )
}
export default App;
