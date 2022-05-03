import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { BsPlusLg, BsDashLg } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { setSelected } from '../redux/selectedSlice';
import { addOrderItem } from '../redux/orderSlice';

import '../App.css';

const ProductModal = () => {
  const [count, setCount] = useState(1);
  const [notes, setNotes] = useState('');

  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected);

  const decrementCount = () => {
    if (count > 1) return setCount(count - 1);
  }

  const incrementCount = () => {
    if (count < 10) return setCount(count + 1);
  }

  const handleAddToCart = () => {
    dispatch(addOrderItem({
      product: selected,
      count,
      notes
    }));
    dispatch(setSelected(null));
  }

  useEffect(() => {
    if (!selected) {
      setCount(1);
      setNotes('');
    }
  }, [selected])

  return (
    <Modal
      show={!!selected}
      onHide={() => dispatch(setSelected(null))}
      centered
      fullscreen="lg-down"
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <div className="modal__title">
            <h2>{selected && selected.name}</h2>
          </div>
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="modal__body w-100 d-flex flex-column flex-lg-row justify-content-between">
          <div className="modal__body_img">
            <img className="rounded" src={selected && selected.metadata.image.image_url} />
          </div>

          <div className="modal__body_info m-0 ps-3 flex-grow-1">
            <p><b>${selected && selected.price}</b></p>
            <p>{selected && selected.description}</p>
            <label htmlFor="textarea" className="pb-1"><b>Notas:</b></label>
            <textarea
              id="textarea"
              rows="3"
              className="form-control"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <div className="modal__footer w-100 d-flex justify-content-between">
          <p className="m-0 align-self-center d-none d-lg-block">Subtotal: <b>${selected && selected.price * count}</b></p>

          <div className="modal__counter rounded">
            <span className="modal__counter--dec" onClick={decrementCount}><BsDashLg /></span>
            <span className="modal__counter--count">{count}</span>
            <span className="modal__counter--inc" onClick={incrementCount}><BsPlusLg /></span>
          </div>

          <Button
            className="modal__footer_btn"
            style={{ backgroundColor: "#4BB543", border: "none" }}
            onClick={handleAddToCart}
          >
            Añadir al carrito
          </Button>
        </div>
      </Modal.Footer>
    </Modal>
  )
};

export default ProductModal;