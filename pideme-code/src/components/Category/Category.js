import React from 'react';
import Product from '../Product/Product'

import { Col, Container, Row } from 'react-bootstrap';

const Category = ({ categoryName, products }) => {
  console.log(products)

  // products.map(({ name, description, price, metadata: { image: { image_url: imageUrl } } }) => (
  //   console.log(name, description, price, imageUrl)
  // ))

  return (
    <Container fluid className="my-2 p-4 rounded bg-white m-0-xs p-0-xs">
      <Row className="m-1 mb-3">
        <Col md className="p-0">
          <h2>
            {categoryName}
          </h2>
        </Col>
      </Row>
            
      <Row className="justify-content-lg-between m-auto pl-4 pr-4">
        <Col lg={6} className="p-1">
          {products.map(({ name, description, price, metadata: { image: { image_url: imageUrl } } }, index) => (
            <Product 
              key={index} 
              name={name} 
              description={description} 
              price={price} 
              imageUrl={imageUrl} 
            />
          ))}  
        </Col>
      </Row>
    </Container>
  )
}

export default Category;