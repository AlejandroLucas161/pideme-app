import { BsDashLg, BsPlusLg } from 'react-icons/bs';
import { IoTrashOutline } from 'react-icons/io5';
import { removeOrderItem } from '../redux/orderSlice';
import { useDispatch } from 'react-redux';

const CartItem = ({ name, price, imageUrl, count, notes, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart__body p-3 d-flex border-top border-bottom">
      <div className="cart__body_img">
        <img src={imageUrl} className="rounded" />
      </div>
      
      <div className="cart__body_info px-2 flex-grow-1 d-flex flex-column justify-content-between">
        <h4 className='clamp-1 m-0 p-0 pb-1'>{name}</h4>
        <p className='clamp-1 m-0 p-0 pb-1 fw-light'>{notes}</p>
        <div className="d-flex justify-content-between align-items-end">
          <p className="m-0 p-0">${price * count}</p>      

          <div className="cart__body_info_counter rounded">
            <span className="cart__body_info_counter--dec"><BsDashLg size={12} /></span>
            <span className="cart__body_info_counter--count">{count}</span>
            <span className="cart__body_info_counter--inc"><BsPlusLg size={12} /></span>
          </div>
        </div>
      </div>

      <div className="cart__body_can" onClick={() => dispatch(removeOrderItem(id))}>
        <IoTrashOutline size={20} />
      </div>
    </div>
  )
}

export default CartItem;