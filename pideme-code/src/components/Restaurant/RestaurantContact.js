import React from 'react'

import { Col, Container, Row } from 'react-bootstrap';

import { BsInstagram, BsTwitter, BsFacebook} from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { IoLogoWhatsapp } from 'react-icons/io';

const RestaurantContact = ({ restaurant }) => {
  // if(restaurant) console.log(restaurant.phones)

  return (
    <Container fluid className="m-0 p-0">
      <Row md className="m-auto d-flex flex-column flex-sm-row flex-xl-column">
        {restaurant &&
          <Col xs className="px-4 py-3 d-flex flex-column">
            <span className="pb-2 fs-contact">Contáctanos vía:</span>
            {restaurant.phones.map(({ number }, index) => (
              <a key={index} href="#"><IoLogoWhatsapp color="#25D366" />{number}</a>
            ))}
          </Col>
        }

        {restaurant &&
          <Col xs className="px-4 py-3 d-flex flex-column border-y border-x">
            <span className="pb-2 fs-contact">Estamos en:</span>
            <span className="fs-contact">
              {restaurant.addresses.map(({ fullAddress }, index) => (
                <a key={index} href="#"><IoLocationSharp color="#f00"/>{fullAddress}</a>
              ))}
            </span>
          </Col>  
        }

        <Col xs className="px-4 py-3 d-flex flex-column">
          <span className="pb-2 fs-contact">Redes Sociales:</span>
          <span className="fs-contact"><a href="#"><BsInstagram color="#C13584" /> @aleresto</a></span>
          <span className="fs-contact"><a href="#"><BsFacebook color="#4267B2" /> @aleresto</a></span>     
          <span className="fs-contact"><a href="#"><BsTwitter color="#1DA1F2"/> @aleresto</a></span>     
        </Col>
      </Row>
    </Container>
  )
}

export default RestaurantContact