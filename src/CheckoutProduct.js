import React from 'react'
import './CheckoutProduct.css';
import { useStatevalue } from './StateProvider';

function CheckoutProduct({id,title,image,price,rating}) {

    const [{basket},dispatch] = useStatevalue();
    
    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <div >
                <img className='checkoutProduct__image' src={image}/>
            </div>

            <div className='checkoutProduct__info'>
                <article>{title}</article>
                <article><small>Rs. </small><strong>{price}</strong></article>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    
                    ))}

                </div>
                <button onClick={removeFromBasket} className='checkoutProduct__button' type='button' >Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
