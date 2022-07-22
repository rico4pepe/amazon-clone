import React from 'react'
import './Checkout.css'
import amazonAdd from '../images/amazon-banner.png' 
import Subtototal from './Subtototal'

function Checkout() {
  return (
    <div className='checkout'>
    {/**Check out left */}
    <div className = "checkout_left">
    <img className='checkout_ad' src={amazonAdd}  alt=''/>
    <h2 className = 'checkout_title'>Your shopping basket</h2>
    {/**BasketItem */}
    {/**BasketItem */}
    {/**BasketItem */}
    {/**BasketItem */}
    </div>
      {/**Check out Right */}
      <div className = "checkout_right">
    
      <Subtototal />
    </div>
        </div>
  )
}

export default Checkout