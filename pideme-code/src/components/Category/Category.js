import React from 'react';
import Product from '../Product/Product'

import { Col, Container, Row } from 'react-bootstrap';
import { setSelected } from '../../redux/selectedSlice';
import { useDispatch } from 'react-redux';

const Category = ({ categoryName, products }) => {
  const dispatch = useDispatch();

  return (
    <Container fluid className="my-2 p-4 rounded bg-white m-0-xs p-2-xs">
      <Row className="m-1 mb-3">
        <Col md className="p-0">
          <h2 style={{ fontWeight: "700" }}>
            {categoryName}
          </h2>
        </Col>
      </Row>
            
      <Row className="justify-content-lg-between m-auto pl-4 pr-4">
        {products.map((product, index) => {
          const { name, description, price, metadata: { image: { image_url: imageUrl } } } = product;
          return (
            <Col key={index} lg={6} className="p-1">
              <Product 
                name={name} 
                description={description} 
                price={price} 
                imageUrl={imageUrl} 
                onClick={() => dispatch(setSelected(product))}
              />
            </Col>
          )
        })}  
      </Row>
    </Container>
  )
}

export default Category;