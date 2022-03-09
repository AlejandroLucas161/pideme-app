import React from 'react';

import { BsPlusSquareFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';

const Product = ({ name, description, price, imageUrl }) => {
  return (
    <div className="product">
      <div className="product__image">
        <img
          className="product__image--img"
          src={imageUrl}
        />
      </div>

      <div className="product__info"> 
        <div className="product__info--container">
          <h4 className="product__info--title">{name}</h4>
          <p className="my-1 paragraph-lg paragraph-xs clamp-2">{description}</p>
          <span className="price-lg price-xs"><b>${price}</b></span>
        </div>
      </div>

      <div className="product__button">
        <span style={{ cursor: "pointer" }}><BsPlusSquareFill size="30px" color="#4BB543" className="product__button--icon btn-w-xs" /></span>
      </div>
    </div>
  )
} 

export default Product;



