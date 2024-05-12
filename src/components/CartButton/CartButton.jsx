import './CartButton.css'
import { FaShoppingCart } from "react-icons/fa";
import React from 'react';

function CartButton() {
  return ( 
    <button type='button' className='cart__button'><FaShoppingCart />
    <span className='cart-status'>1</span>
    </button>
   );
}

export default CartButton