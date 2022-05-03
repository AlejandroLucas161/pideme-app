import React, { Fragment, useState } from 'react';
import Category from '../Category/Category';
import ProductModal from '../../modals/ProductModal';

import { Container, Row } from 'react-bootstrap';

const Categories = ({ products }) => {
  const productsByCategory = products ? products.reduce((acc, currProduct) => {
    const newAcc = { ...acc };

    // 1. Find Category
    const { category: { name: categoryName } } = currProduct;

    // 2. Check if Category exists
    if (newAcc[categoryName]) {
      // 2.1 Exist
      newAcc[categoryName].push(currProduct);

    } else {
      // 2.2 Doesn't exist
      newAcc[categoryName] = [currProduct]
    }
    return newAcc;
  }, {}) : {};

  return (
    <Fragment>
      <Container fluid className="p-4 p-2-xs">
        <Row className="m-auto p-0">
          {Object.entries(productsByCategory).map(([categoryName, products], index) => (
            <Category
              key={index}
              categoryName={categoryName}
              products={products}
            />
          ))}
        </Row>
      </Container>

      <ProductModal />
    </Fragment>
  )
}

export default Categories;