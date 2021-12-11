import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStatevalue } from './StateProvider'

function Checkout() {

    const [{basket,user},dispatch] = useStatevalue();

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <img className='checkout__ad' src='https://mlqmtwka8c9g.i.optimole.com/gOh5_1g.Ga1T~1cfa5/w:764/h:321/q:75/https://www.competethemes.com/wp-content/uploads/2020/10/woocommerce-edit-cart-plugins.png'/>
                <h2>{user.email} your stuff's here!</h2>

                <h2 className='checkout__title'>PAY SOME AND GET SOME</h2>
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
            <div className='checkout__right'>
                <h2 className='total1'>TOTAL AMOUNT</h2>
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
