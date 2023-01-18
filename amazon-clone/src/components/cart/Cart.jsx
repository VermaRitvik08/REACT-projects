import React from 'react'
import { useStateValue } from '../StateProvider';
import Subtotal from '../subtotal/Subtotal'
import './cart.css'
import CartItems from './CartItems';

function Cart() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="cart">
        <div className="cart_left">
            <div><h2 className='cart_title'>Shopping Cart</h2>
              {basket.map((item) => (
                <CartItems id={item.id} title={item.title} price={item.price} rating={item.rating} image={item.image}/>
              ))}
                
            </div>
        </div>
        <div className="cart_right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Cart
