import React, { Fragment } from 'react';

import { BsPlusSquareFill } from 'react-icons/bs';

const Product = ({ name, description, price, imageUrl, onClick }) => {
  return (
    <Fragment>
      <div className="product" onClick={onClick}>
        <div className="product__image">
          <img
            className="product__image--img"
            src={imageUrl}
          />
        </div>

        <div className="product__info"> 
          <div className="product__info--container">
            <h4 className="product__info--title" style={{ fontWeight: "700" }} >{name}</h4>
            <p className="my-1 paragraph-lg paragraph-xs clamp-2">{description}</p>
            <span className="price-lg price-xs"><b>${price}</b></span>
          </div>
        </div>

        <div className="product__button">
          <span><BsPlusSquareFill size="30px" color="#4BB543" className="product__button--icon btn-w-xs" /></span>
        </div>
      </div>
    </Fragment>
  )
} 

export default Product;



