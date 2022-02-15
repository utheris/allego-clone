import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
  const [{basket}] = useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout__left'>
       

        {basket?.length === 0 ? (
          <div> 
            <h2 className='checkout__title'>Twój koszyk jest pusty</h2> 
            <p>Nie masz jeszcze produktów w swoim koszyku. Kliknij "Dodaj do koszyka" aby kupić jeden lub więcej przedmiotów</p>
          </div>
        ) : (
          <div>
            <h2 className='checkout__title'>Twój koszyk</h2>
            { 
              basket.map((item) => (
                <CheckoutProduct 
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))
           }
          </div>
        )
        }
      </div>
      {basket.length > 0 && (
        <div className='checkout__right'>
          <Subtotal/>
          </div>
      )}
    </div>
  )}

export default Checkout