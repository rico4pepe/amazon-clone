import React from 'react'
import { useStateValue } from '../dataManagement/StateProvider'
import './Product.css'
//import productImg from '../images/background.jpg'

function Product({id, title, image, price, rating}) {
  // get the state of the global store then dispatch into it
  const [basket, dispatch] = useStateValue(); 
  console.log("This is the basket  ",  basket);
  const addtoBasket = () =>{
    //Dispatch an item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating
      }
    })
  }
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

        <button onClick={addtoBasket}>Add to basket</button>
    </div>
  )
}

export default Product