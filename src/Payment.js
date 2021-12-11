import React,{useState} from 'react'
import { getBasketTotal } from './reducer'
import { useStatevalue } from './StateProvider';
import'./Payment.css'
import CheckoutProduct from './CheckoutProduct'
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';

function Payment() {
    const stripe=useStripe();
    const elements=useElements();
    const [{basket}] = useStatevalue();

    const[error,setError]=useState(null);
    const[disabled,setDisabled]=useState(true);

    const handleSubmit=e=>{

    }

    const handleChange=event=>{
        setDisabled(event.empty);
        setError(event.error?event.error.message:'');
    }

    return (
        <div className='pay'>
            <div className='payhead'>
                <h4>Checkout({basket.length} items)</h4>
            </div>


            <div className='del'>
                <div>
                    <h3><b>Delivery Address</b></h3>
                </div>
                <div>
                    <h4 >B-115 Saraswati bldg Jindal col. no. 2 Vasind</h4>
                </div>
            </div>


            <div className='rev'>
                <div>
                    <h3><b>Item Review</b></h3>
                </div>
                <div>
                {basket.map(item=>(
                    <CheckoutProduct
                        id={item.id}
                        price={item.price}
                        rating={item.rating}
                        title={item.title}
                        image={item.image}
                    />
                    
                ))}
                </div>
            </div>


            <div className='card'>
                <div>
                    <h3><b>Payment Details</b></h3>
                </div>
                <div>
                    <form className='c' onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                    </form>

                    <div className='total'>
                        <h4>Total: Rs.{getBasketTotal(basket)}</h4>
                        <button className='buy'>BUY NOW</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Payment
