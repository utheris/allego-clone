import React from 'react'
import "./Product.css"
import { useStateValue } from './StateProvider';
function Product({id, title, price, rating, image}) {
  const [{}, dispatch] = useStateValue()
  const addToBasket = () =>{
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id, 
        title: title,
        price: price,
        rating: rating,
        image: image,
      }
    })
  };
  return (
    <div className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
            <strong>{price}</strong>
            <small>zł</small>
        </p>
        <div className='product__rating'>
        {
          Array(rating)
          .fill()
          .map((_) => (
            <p>&#127775; </p>
          ))
        }
        </div>
      </div>
      <img src={image} alt=''/>
      <button onClick={addToBasket}>Dodaj do koszyka</button>
    </div>
  )
}

export default Product