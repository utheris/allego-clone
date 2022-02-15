import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from "./StateProvider"
function CheckoutProduct({id, title, price, rating, image}) {
    const [{},dispatch] = useStateValue()
    const removeFromBasket = () =>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }
  return (
    <div className='checkoutProduct'>
        <img src={image} alt=''/>
        <div className='checkoutProduct__info'>
           <p className='checkoutProduct__info--title'>{title}</p> 
           <p className='checkoutProduct__info--price'>
            <strong>{price}</strong>
            <small>zł</small>
        </p>
        <div className='chceckoutProduct__info--rating'>
        {
          Array(rating)
          .fill()
          .map((_) => (
            <p>&#127775; </p>
          ))
        }
        </div>
        <button onClick={removeFromBasket}>Usuń z koszyka</button>
        </div>


    </div>
  )
}

export default CheckoutProduct