import React from 'react'
import './Header.css'
import amazonlogo from '../images/amazon-logo-transparent.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { useStateValue } from '../dataManagement/StateProvider'
//import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link } from  "react-router-dom"
//Get global State from the datalayer
import { auth }  from '../firebaseUtility/firebase'
import { signOut } from "firebase/auth";

function Header() {
  const [{basket, user}, dispatch] = useStateValue(); 
  const handleAuthentication = () =>{
    if(user){
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
  }
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
            <Link to = {!user && '/Login'}>
                <div onClick={handleAuthentication} className='header_option'>
                    <span className='header_optionLineOne'> Hello {!user ? 'Guest' : user.email}</span>
                    <span className='header_optionLineTwo'>{user ? 'Sign Out' : ' Sign In'}  </span>
                </div>
            </Link>
            <Link to = '/Order'>
                <div className='header_option'>
                <span className='header_optionLineOne'> Returns  </span>
                <span className='header_optionLineTwo'>  &#38; Order </span>
                </div>
            </Link>

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