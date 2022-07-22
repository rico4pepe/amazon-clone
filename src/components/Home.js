import React from 'react'
import './Home.css';
import headerBackgroundImg from '../images/background-1.jpg'
import Product from './Product'
import productImg1 from '../images/hisense.jpg' 


function Home() {
  
  return (
      
    <div className='home'>
    
    <div className='home_container'>
    <img className='home_image' src={headerBackgroundImg}  alt=''/>
    </div>

    <div className = "home_row">
        <Product 
        id = "A15600CF"
        title = "The lean Start" 
        price={50.45}
        rating = {5}
        image = {productImg1}  />
        <Product />
        <Product />
        <Product />
           {/** Product Component */}
            {/** Product Component */}
    </div>

    <div className = "home_row">
        {/** Product Component */}
         {/** Product Component */}
          {/** Product Component */}
           {/** Product Component */}
            {/** Product Component */}
    </div>

    <div className = "home_row">
        {/** Product Component */}
         {/** Product Component */}
          {/** Product Component */}
           {/** Product Component */}
            {/** Product Component */}
             {/** Product Component */}
    </div>
    <div className = "home_row">
        {/** Product Component */}
         {/** Product Component */}
          {/** Product Component */}
           {/** Product Component */}
            {/** Product Component */}
    </div>
    </div>
  )
}

export default Home