import React, { useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import '../Components/FoodItems/FoodItems.css'
import { useOutletContext } from 'react-router-dom'
import FoodItem from '../Components/FoodItems/FoodItem'
import { AddToCart, RemoveToCart } from '../Store/slices/cartSlice'
import { AddToWishList, RemoveToWishList } from '../Store/slices/wishListSlice'
import useLocalStorage from '../Hooks/LocalStorage'

const WishList = () => {
  const foodItems = useSelector(state => state.products)
  const [wishlist, updateWishlist] = useLocalStorage('Fresh-food-wishlist', [])
  const [cart, updateCart] = useLocalStorage('Fresh-food-cart', [])
  // const wishlist = useSelector(state=>state.wishList)
  const dispatch = useDispatch()
  const qeuery = useOutletContext()
  const addToCart = (e) => {
    // dispatch(AddToCart(foodItems.find((item) => item._id === e.target.id)))
    updateCart(pre => [...pre, ({ ...foodItems.find((item) => item._id === e.target.id), quantity: 1 })])
  }
  const removeToCart = (e) => {
    // dispatch(RemoveToCart(foodItems.find((item) => item._id === e.target.id)))
    let existing = cart.findIndex((item) => item._id === e.target.id)
    cart.splice(existing, 1)
    updateCart(pre => [...pre])
  }
  const addToWishList = (e) => {
    // dispatch(AddToWishList(foodItems.find((item) => item._id === e.target.id)))
    updateWishlist(pre => [...pre, foodItems.find((item) => item._id === e.target.id)])
  }
  const removeToWishList = (e) => {
    // dispatch(RemoveToWishList(foodItems.find((item) => item._id === e.target.id)))
    let existing = wishlist.findIndex((item) => item._id === e.target.id)
    wishlist.splice(existing, 1)
    updateWishlist(pre => [...pre])
  }
  return (
    <>
      {
        <div className='FoodItems' style={{ margin: '20px 0px' }}>
          <div className="FoodItems-content">
            {
              wishlist.filter((item) => (item.name || item.category).toLowerCase().includes(qeuery)).map((item, i) => <FoodItem data={item} key={i} category={''} addToCart={addToCart} removeToCart={removeToCart} addToWishList={addToWishList} removeToWishList={removeToWishList} wishlist={wishlist} cart={cart}/>)
            }
          </div>
        </div>
      }
    </>
  )
}

export default WishList