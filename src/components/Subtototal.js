import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../dataManagement/StateProvider'
import { getBasketTotal } from '../dataManagement/reducer'
import { useNavigate } from 'react-router-dom';
function Subtototal() {
    
    const navigate = useNavigate();
    const [{basket}, dispatch] = useStateValue(); 

  return (
    <div className='subtotal'>

<CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal({basket?.length} items):
                                <strong>{`${value}`}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" />This order contains a
                        </small>
                    </>
                )}
                decimalScale={2}
                value = {getBasketTotal(basket)}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"$"}

            />
    
            <button onClick={e => navigate('/payment')}>Proceed to checkout</button>
    </div>
  )
}

export default Subtototal