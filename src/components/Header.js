import React from 'react'
import './Header.css'
import amazonlogo from '../images/amazon-logo-transparent.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
//import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';


function Header() {
  return (
    <div className='header'>
      <img className='header_headerLogo' src={amazonlogo}  alt=''/>
        <div className='header_headerSearch' >
           <input className="header_headerInput" type = "text" />
           <SearchIcon className = 'header_headerSearchIcon'/>
        </div>
          <div className='header_headerNav'>
                <div className='header_option'>
                    <span className='header_optionLineOne'> Hello Guest</span>
                    <span className='header_optionLineTwo'>  Sign In </span>
                </div>
                <div className='header_option'>
                <span className='header_optionLineOne'> Returns  </span>
                <span className='header_optionLineTwo'>  &#38; Order </span>
                </div>

                <div className='header_optionBasket'>
                <ShoppingCartCheckoutIcon />
                <span className='header_optionLineTwo header_basketCount'> 0 </span>
                </div>

          </div>
    </div>
  )
}

export default Header