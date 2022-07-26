import React from 'react'
import './Header.css'
import amazonlogo from '../images/amazon-logo-transparent.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useStateValue } from '../dataManagement/StateProvider'
//import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link } from  "react-router-dom"
//Get global State from the datalayer


function Header() {
  const [{basket}, dispatch] = useStateValue(); 
  return (
    <div className='header'>
      <Link to = '/'>
      <img className='header_headerLogo' src={amazonlogo}  alt=''/>
      </Link>
     
        <div className='header_headerSearch' >
           <input className="header_headerInput" type = "text" />
           <SearchIcon className = 'header_headerSearchIcon'/>
        </div>
          <div className='header_headerNav'>
            <Link to = '/Login'>
                <div className='header_option'>
                    <span className='header_optionLineOne'> Hello Guest</span>
                    <span className='header_optionLineTwo'>  Sign In </span>
                </div>
            </Link>
                <div className='header_option'>
                <span className='header_optionLineOne'> Returns  </span>
                <span className='header_optionLineTwo'>  &#38; Order </span>
                </div>

                {/** Optional Chaining using ? to allow if basket does not exit it should fail gracefully*/}
                <Link to = '/Checkout'>
                    <div className='header_optionBasket'>
                        <ShoppingCartCheckoutIcon />
                        <span className='header_optionLineTwo header_basketCount'> {basket?.length} </span>
                    </div>
              </Link>
                

          </div>
    </div>
  )
}

export default Header