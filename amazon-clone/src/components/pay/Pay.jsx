import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CartItems from '../cart/CartItems';
import { useStateValue } from '../StateProvider';
import "./pay.css"
import { CardElement, useStripe, useElements  } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import axios from '../axios.js';

function Pay() {
    const [{ basket }, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const history = useNavigate();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        // const payload = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method: {
        //         card: elements.getElement(CardElement)
        //     }
        // }).then(({ paymentIntent }) => {
        //     setSucceeded(true);
        //     setError(null);
        //     setProcessing(false);
        //     // dispatch({
        //     //     type: 'EMPTY_BASKET'
        //     // })
        //     history.replace('/orders')
        // });
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
  return (
    <div className='pay'>
        <div className="pay_container">
            <h1>Checkout (<Link to="/checkout">{basket?.length} items</Link>)</h1>    

            <div className="payment_row">
                <div className="pay_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="address">
                    <p>180 Clark Hill Rd</p>
                    <p>Amherst, MA</p>
                </div>
            </div>

            <div className="payment_row">
                <div className="pay_title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="pay_items">
                    {basket.map((item) => (
                        <CartItems id={item.id} title={item.title} image={item.image} price={item.price} rating={item.rating}/>))    
                    }
                </div>
            </div>
            
            <div className="payment_row">
                <div className="pay_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="pay_details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="price_container">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <>
                                        <h3>Order Total: {value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>

        </div>

    </div>
  )
}


export default Pay
