import React from 'react'
import { useStateValue } from '../StateProvider'
import './products.css'

function Products({id, title,price,rating,image}) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket >>>", basket)
  const addItem = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image
      }
    })
    console.log("clicked item", id)
  }

  return (
    <div className="product">
        <div className="prod_desc">
            <p>{title}</p>
            <p className="product_cost">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product_rating">
                {Array(rating).fill().map((_) => (<p>⭐</p>))}
            </div>
        </div>
        <img className='product_img' src={image} alt='prod'/>
        <button onClick={addItem} className='product_btn'>Add to Cart</button>
    </div>
  )
}

export default Products

