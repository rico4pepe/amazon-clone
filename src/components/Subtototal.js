import React from 'react'
import './Subtotal.css'
import CurrencyFormat from 'react-currency-format'
function Subtototal() {
  return (
    <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal(0 items):
                                <strong>{`${value}`}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" />This order contains a
                        </small>
                    </>
                )}
                decimalScale={2}
                value = {0}
                displayType = {"text"}
                thousandSeparator = {true}
                prefix = {"$"}

            />

            <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtototal