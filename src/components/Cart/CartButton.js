import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const {totalQuantity, open} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const openModal = () => {
    dispatch(cartActions.openModal({
      open,
    }))
  }
  
  return(
    <button onClick={openModal} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
