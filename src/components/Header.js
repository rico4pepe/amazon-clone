import React from 'react'
import './Header.css'
import amazonlogo from '../images/amazon-logo-transparent.png'

function Header() {
  return (
    <div className='header'>
      <img className='header_headerLogo' src={amazonlogo}  alt=''/>
        <div className='header_headerSearch' >
           <input className='header_headerInput' type = "text" />
        </div>
          <div className='header_headerNav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'> Guest </span>
                </div>
                <div className='header_option'>
                <span className='header_optionLineTwo'> Sign In</span>
                </div>
                <div className='header_option'>
                <span className='header_optionLineThree'> Return Order</span>
                </div>
                <div className='header_option'>
                <span className='header_optionLineFour'> Cart</span>
                </div>
          </div>
    </div>
  )
}

export default Header