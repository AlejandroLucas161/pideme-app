import { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { loadState, saveState } from '../browser-storage';
import { USER_KEY } from '../constants';
import { getOrderUrl } from '../utils';

const ClientModal = ({ show, toggleShow, order, restaurant }) => {
  const [fullName, setFullName] = useState(loadState(USER_KEY)?.fullName || '');
  const [address, setAddress] = useState(loadState(USER_KEY)?.address || '');

  
  const onSubmit = (e) => {
    e.preventDefault();
    if(fullName && address) {
      const clientData = {fullName, address};
      saveState(clientData, USER_KEY)

      console.log(fullName, address)

      toggleShow();

      window.open(
        getOrderUrl(fullName, address, order, restaurant),
        '_blank'
      )
    }
  }

  return (   
    <Modal 
      show={show}
      onHide={toggleShow}
      className="modal-client"
    >
      <Modal.Header closeButton className="py-2 px-3">
        <Modal.Title>Cliente</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body className="p-3">
          <Form.Group>
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
             type="text" 
             required 
             value={fullName}
             onChange={(e) => setFullName(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Dirección</Form.Label>
            <Form.Control
             type="text" 
             required 
             value={address}
             onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        
        <Modal.Footer className="py-2 px-3">
          <Button 
            className="modal-client__btn" 
            type="submit" 
          >
            Ordenar  
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ClientModal;