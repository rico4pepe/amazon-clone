import React from 'react'
import './CheckoutProduct.css'
import productImg1 from '../images/hisense.jpg' 
import { useStateValue } from '../dataManagement/StateProvider'


function CheckoutProduct({id, title, image, price, rating}) {
   //Fetch Globally The Basket object
    const [{basket}, dispatch] = useStateValue(); 
  const removeFromBasket = () =>{
    // Remove Item from Basket 
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
              
        
      })
  }
  return (
    
    <div className='checkoutProduct'>
        <img  className='checkout_Product_Image' src = {image} alt='' />
        
        <div className = 'checkout_Product_info'>
                <p className='checkoutProduct_title'>id is {id} and Title is  {title}</p>
                <p className='checkoutProduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                    </p>

                    <div className='checkoutProduct_rating'>
        {Array(rating).fill().map((_, i)=> (
            <p>*</p>)) }
        </div>
        <button onClick = {removeFromBasket}>Remove from basket</button>
        </div>
    

            </div>
          
  )
}

export default CheckoutProduct