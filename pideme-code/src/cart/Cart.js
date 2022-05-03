import CartItem from './CartItem';
import ClientModal from '../modals/ClientModal';

import { BsCart4 } from 'react-icons/bs';
import { IoClose, IoTrashOutline } from 'react-icons/io5';

import { Button } from 'react-bootstrap';
import { clearOrder } from '../redux/orderSlice';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { calcSubtotal } from '../utils';

const Cart = ({ restaurant }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const dispatch = useDispatch()
  const order = useSelector((state) => state.order);
  const orderExist = !!order.length;

  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  const subtotal = calcSubtotal(order);
  
  return (
    <Fragment>
      <div id="overlay" style={{ display: isOpen ? "block" : "none" }} onClick={handleClose}></div>
      
      <ClientModal show={show} toggleShow={toggleShow} subtotal={subtotal} order={order} restaurant={restaurant} />

      <div className="cart m-0 p-0 flex-column border border-end-0" style={{ display: isOpen ? "flex" : "none" }}>
        <div className="cart__title p-3 mb-3 border-bottom d-flex justify-content-between">
          <h2 className="m-0 p-0">Tu canasta</h2>
          <span className="align-self-center" onClick={handleClose} style={{ cursor: "pointer" }} ><IoClose size={25} /></span>
        </div>

        <div className="overflow-auto flex-grow-1">
          {orderExist ? (
            order.map(({ product: { name, price, metadata: { image: { image_url: imageUrl }} }, count, notes, id}) => {
              return (
                <CartItem 
                  key={id}            
                  id={id}
                  name={name}
                  price={price}
                  imageUrl={imageUrl}
                  count={count}
                  notes={notes}
                />
              )
            })
          ) : (
            <div className="h-100 fw-light d-flex align-items-center justify-content-center">
              <p>
                Aún no tienes productos en el carrito
              </p>
            </div>
          )}

        </div>
              
        <div className="cart__footer m-0 p-3 border-top d-flex flex-row justify-content-between align-items-center">
          <div className="cart__footer_can pe-1" style={{ cursor: "pointer" }} onClick={() => dispatch(clearOrder())}>
            <IoTrashOutline size={20} />
          </div>
          <Button 
            className=" cart__footer_btn w-100 flex-grow-1 d-flex justify-content-between" 
            onClick={() => {
              if(orderExist) toggleShow()
            }}
          >
            <span>Enviar orden</span>
            <span>Subtotal: ${subtotal}</span>
          </Button>
        </div>
      </div>

      <button className="p-0 m-0 btn-cart-toggle" onClick={handleOpen}>
        <BsCart4 size={20} className="p-0 m-0" />

        {order.length ? (
          <span className="item-cart-count p-1">{order.length}</span>
        ) : (
          null
        )}
      </button>
    </Fragment>
  )
}

export default Cart;