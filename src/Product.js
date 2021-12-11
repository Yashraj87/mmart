import React from 'react'
import './Product.css'
import { useStatevalue } from './StateProvider'

function Product({id,title,image,price,rating}) {
    const [state,dispatch] = useStatevalue();
    const addToBasket = () => {
        dispatch({
            type : 'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });

    };
    return (
        <div className='product'>
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>

                <div className='product__rating'>
                    {
                        Array(rating)
                        .fill()
                        .map((_,i) => (
                            <p>⭐</p>
                        ))
                    }

                </div>
                
            </div>
            <img className='product__image' src={image}></img>
            <button className='product__button' onClick={addToBasket}><strong>Wanna have it!</strong></button>
        </div>
    )
}

export default Product
