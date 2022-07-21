import React from 'react'
import './Product.css'
//import productImg from '../images/background.jpg'

function Product({id, title, image, price, rating}) {
  return (
    <div className='product'>
        <div className='product_info'>
                <p>{title}</p>
                <p className='product_price'>
                    <small>NGN</small>
                    <strong>{price}</strong>
                    </p>  
        </div>
        <div className='product_rating'> 
        {Array(rating).fill().map((_, i)=> (
            <p>*</p>)) }
           
        </div>
        <img className='product_image' src={image}  alt=''/>

        <button>Add to basket</button>
    </div>
  )
}

export default Product