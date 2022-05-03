import React from 'react';

import { Col, Container, Row } from 'react-bootstrap';
import { MdOutlineFoodBank } from 'react-icons/md';


const RestaurantName = ({ restaurant }) => {
  return (
    <Container fluid className="m-0 p-0">
      <Row md className="m-auto d-flex flex-column">
        <Col md className="p-4 d-flex flex-column text-center">
          <span><MdOutlineFoodBank color="#333" size={60} /></span>
          {restaurant && <h1>{restaurant.name}</h1>}

          {restaurant && <p>{restaurant.description}</p>}
        </Col>
      </Row>
    </Container>
  )
}

export default RestaurantName;