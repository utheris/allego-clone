import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket}] = useStateValue();
  return (
    <div className='subtotal'>
        <CurrencyFormat
            renderText={(value) => (
                <>
                <p>W sumie ({basket.length} {basket.length <= 4 ? "przedmioty" : "przedmiotów"}) : </p>
                <strong>{value}</strong> 
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            suffix={" ZŁ"}
            
            />
            
            
        <button>Przejdź do płatności</button>
    </div>
  )
}

export default Subtotal