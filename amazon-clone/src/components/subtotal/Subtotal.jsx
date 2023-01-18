import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link } from 'react-router-dom';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider'
import './subtotal.css'

function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();    

  return (
    <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />
        <Link to="/pay">
        <button className='checkout_btn'>Proceed to Checkout</button>
        </Link>
    </div>
  )
}

export default Subtotal
