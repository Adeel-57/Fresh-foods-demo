import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../Components/FoodItems/FoodItems.css'
import { useOutletContext } from 'react-router-dom'
import FoodItem from '../Components/FoodItems/FoodItem'
import { AddToCart, RemoveToCart } from '../Store/slices/cartSlice'
import { AddToWishList, RemoveToWishList } from '../Store/slices/wishListSlice'
const WishList = () => {
  const foodItems = useSelector(state => state.products)
  const wishlist = useSelector(state=>state.wishList)
  const dispatch = useDispatch()
  const qeuery = useOutletContext()
  const addToCart = (e) => {
    dispatch(AddToCart(foodItems.find((item) => item._id === e.target.id)))
  }
  const removeToCart = (e) => {
    dispatch(RemoveToCart(foodItems.find((item) => item._id === e.target.id)))
  }
  const addToWishList = (e) => {
    dispatch(AddToWishList(foodItems.find((item) => item._id === e.target.id)))
  }
  const removeToWishList = (e) => {
    dispatch(RemoveToWishList(foodItems.find((item) => item._id === e.target.id)))
  }
  return (
    <>
      {
        <div className='FoodItems' style={{ margin: '20px 0px' }}>
          <div className={!wishlist.length?'':'FoodItems-content'}>
            {
              !wishlist.length?<p style={{display:'flex', justifyContent:'center', color: 'rgba(0, 0, 0, 0.5)'}}>Empty</p> : wishlist.filter((item) => (item.name || item.category).toLowerCase().includes(qeuery)).map((item, i) => <FoodItem data={item} key={i} category={''} addToCart={addToCart} removeToCart={removeToCart} addToWishList={addToWishList} removeToWishList={removeToWishList} />)
            }
          </div>
        </div>
      }
    </>
  )
}

export default WishList