import React from 'react'
import './Checkout.css'
import amazonAdd from '../images/amazon-banner.png' 
import Subtototal from './Subtototal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../dataManagement/StateProvider'


function Checkout() {
  const [{basket, user}, dispatch] = useStateValue(); 
  return (
    <div className='checkout'>
    {/**Check out left */}
    <div className = "checkout_left">
    <img className='checkout_ad' src={amazonAdd}  alt=''/>
    <h3> Hello,  {user?.email}</h3>
    <h2 className = 'checkout_title'>Your shopping basket</h2>
    {basket.map(item =>(
           <CheckoutProduct 
           id = {item.id}
           title = {item.title}
           image = {item.image}
           price = {item.price}
           rating = {item.rating}
     
         />
      ))}

    {/**CheckoutProduct */}
    {/**CheckoutProduct */}
    {/**CheckoutProduct */}
    </div>
      {/**Check out Right */}
      <div className = "checkout_right">
     
      <Subtototal />
    </div>
        </div>
  )
}

export default Checkout