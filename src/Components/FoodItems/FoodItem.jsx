import React from 'react'
import add from '../../assets/add-to-cart.svg';
import rem from '../../assets/remove-to-cart.svg';
import { assets } from '../../assets/assets'
import './FoodItems.css'
import { useSelector } from 'react-redux';

const FoodItem = ({ data, category, addToCart, removeToCart, addToWishList, removeToWishList }) => {
  const cart = useSelector(state => state.cartItems)
  const wishlist = useSelector(state => state.wishList)
  let exist_in_cart = false;
  cart.map((item) => { if (item._id === data._id) { exist_in_cart = true } })
  let exist_in_wishlist = false;
  wishlist.map((item) => { if (item._id === data._id) { exist_in_wishlist = true } })

  if (category === '' || category === data.category) {
    return (
      <div className='Item' >
        <div className='item-image'>
          {exist_in_cart ?
            <i className='add-icon'><img src={rem} id={data._id} onClick={removeToCart} /></i> :
            <i className='add-icon'><img src={add} id={data._id} onClick={addToCart} /></i>
          }
          {exist_in_wishlist ?
            <i className='add-icon heart'><img src={assets.heart_active} id={data._id} alt="" onClick={removeToWishList} /></i> :
            <i className='add-icon heart'><img src={assets.heart} id={data._id} alt="" onClick={addToWishList} /></i>
          }
          <img src={data.image} />
        </div>
        <h3>{data.name}</h3>
        <p className='description'>{data.description}</p>
        <p className='price'>${data.price}</p>
      </div>
    )
  }
}

export default FoodItem