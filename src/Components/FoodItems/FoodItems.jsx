import React, { useEffect, useState } from 'react'
import './FoodItems.css'
import FoodItem from './FoodItem.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, RemoveToCart } from '../../Store/slices/cartSlice.js'
import { useOutletContext } from 'react-router-dom'
import { AddToWishList, RemoveToWishList } from '../../Store/slices/wishListSlice.js'
import useLocalStorage from '../../Hooks/LocalStorage.js'

const FoodItems = ({ category }) => {
    const foodItems = useSelector(state => state.products)
    const [wishlist, updateWishlist]= useLocalStorage('Fresh-food-wishlist',[])
    const [cart, updateCart]= useLocalStorage('Fresh-food-cart',[])
    const dispatch = useDispatch()
    const qeuery = useOutletContext()
    const addToCart = (e) => {
        // dispatch(AddToCart(foodItems.find((item) => item._id === e.target.id)))
        updateCart(pre=>[...pre,({...foodItems.find((item) => item._id === e.target.id), quantity: 1})])
    }
    const removeToCart = (e) => {
        // dispatch(RemoveToCart(foodItems.find((item) => item._id === e.target.id)))
        let existing = cart.findIndex((item)=> item._id === e.target.id)
        cart.splice(existing,1)
        updateCart(pre=>[...pre])
    }
    const addToWishList = (e) => {
        // dispatch(AddToWishList(foodItems.find((item) => item._id === e.target.id)));
        updateWishlist(pre=>[...pre,foodItems.find((item) => item._id === e.target.id)])
    }
    const removeToWishList = (e) => {
        // dispatch(RemoveToWishList(foodItems.find((item) => item._id === e.target.id)));
        let existing = wishlist.findIndex((item)=> item._id === e.target.id)
        wishlist.splice(existing,1)
        updateWishlist(pre=>[...pre])
    }
    
    return (
        <div className='FoodItems'>
            <div className="FoodItems-content">
                {
                    foodItems.filter((item) => (item.name || item.category).toLowerCase().includes(qeuery)).map((item, i) => <FoodItem data={item} key={i} category={category} addToCart={addToCart} removeToCart={removeToCart} addToWishList={addToWishList} removeToWishList={removeToWishList} wishlist={wishlist} cart={cart}/>)
                }
            </div>
        </div>
    )
}

export default FoodItems