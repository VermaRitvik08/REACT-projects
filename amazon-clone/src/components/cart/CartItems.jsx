import React from 'react'
import { useStateValue } from '../StateProvider';
import './cartItems.css'

function CartItems({ id, title,  price, rating, image }) {

    const [{ basket }, dispatch] = useStateValue();
    const removeItem = () => {
        // remove item from cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
        console.log("clicked item", id)
    }

  return (
    <div className="cartItem">
        <img className='cartItem_img' src={image} alt=""/>
        <div className="cartItem_info">
            <p className="cartItem_title">{title}</p>
            <p className="cartItem_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="cartItem_rating">
            {Array(rating).fill().map((_) => (<p>⭐</p>))}
            </div>
            <button onClick={removeItem} className='cartItem_btn'>Remove from Cart</button>
        </div>
        
    </div>
  )
}

export default CartItems
