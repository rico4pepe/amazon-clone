import React, {useEffect, useState} from 'react'
import './Payment.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../dataManagement/StateProvider'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../dataManagement/reducer'
import {Link, useNavigate } from  "react-router-dom"
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import axios from 'axios';
import { async } from '@firebase/util'

function Payment() {

    const baseUrl = 'http://localhost:3000'
    const navigate = useNavigate();
  
    const [{basket, user}, dispatch] = useStateValue(); 


    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)
    const [succeeded, setsucceeded] = useState(false)
    const [processing, setprocessing] = useState("")
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() =>{
        //generate a stripe secret to which allows to 
        const getClientSecret = async () =>{
            const response =  await axios({
                method: 'post',
                url: `${baseUrl}/payment/create?total=${getBasketTotal(basket) * 100}`
            }) 
            setClientSecret(response.data.clientSecret) 
        }
        getClientSecret()      
    }, [basket])

    const handleSubmit =async(e) => {
        //Handle fancy  stripe stuff
        e.preventDefault();
        setprocessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method:{
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) =>{
                setsucceeded(true)
                setError(null)
                setprocessing(false)

                navigate('/order',  { replace: true }) 
                
        })
    }

    const handleCardChange = e =>{
        //Handle Card  Change 
        setDisabled(e.empty)
        setError(e.error ? e.error.message : "")
    }

  return (
    <div className='payment'>
        <div className='payment_container'>
         
         <h1> Checkout (<Link to = '/Checkout'>{basket?.length} Items</Link>)</h1>
     {/** Payment Section */}
            <div className='payment_section'>
               <div className='payment_title'>
                <h3>Payment title</h3></div>
                <div className='payment_address'>
                    <p>{user?.email}</p>
                    <p>125 real time</p>
                    <p>Los Angeles</p>
                </div>
            </div>
             {/** Payment Section */}
            <div className='payment_section'>
            <div className='payment_title'>
                <h3>Review Items and Delivery</h3></div>
                <div className='payment_items'>
                    {/** */}
                    {basket.map(item =>(
           <CheckoutProduct 
           id = {item.id}
           title = {item.title}
           image = {item.image}
           price = {item.price}
           rating = {item.rating}
     
         />
      ))}
                </div>
            </div>

             {/** Payment Section */}
             <div className='payment_section'>
            <div className='payment_title'>
                <h3>Payment Method</h3></div>
                <div className='payment_details'>
                   {/**Stripe Magic */}
                   <form onClick={handleSubmit}>
                    <CardElement onChange={handleCardChange} />

                    <div className='payment_priceContainer'>
                    <CurrencyFormat 
                renderText={(value) => (
                
                        <h3>
                    
                          Order Total: {value}
                        </h3>
                        
                    
                )}
                decimalScale={2}
                value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"$"}

            />
            <button disabled = {processing || disabled || succeeded}>
            <span>{processing ? <p>Processing</p> : "Buy Now "}</span>
            </button>
           
                    </div>
                   </form>

                </div>
            </div>
            {/** Creating Error on the screen */}
            {error && <div>{error }</div>}
            </div>
    </div>
  )
}

export default Payment