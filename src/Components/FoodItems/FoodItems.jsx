import React, { useEffect, useState } from 'react'
import './FoodItems.css'
import FoodItem from './FoodItem.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, RemoveToCart } from '../../Store/slices/cartSlice.js'
import { useOutletContext } from 'react-router-dom'
import { AddToWishList, RemoveToWishList } from '../../Store/slices/wishListSlice.js'
const FoodItems = ({ category }) => {
    const qeuery = useOutletContext()
    const foodItems = useSelector(state => state.products)
    const dispatch = useDispatch()
    const addToCart = (e) => {
        dispatch(AddToCart(foodItems.find((item) => item._id === e.target.id)))
    }
    const removeToCart = (e) => {
        dispatch(RemoveToCart(foodItems.find((item) => item._id === e.target.id)))
    }
    const addToWishList = (e) => {
        dispatch(AddToWishList(foodItems.find((item) => item._id === e.target.id)));
    }
    const removeToWishList = (e) => {
        dispatch(RemoveToWishList(foodItems.find((item) => item._id === e.target.id)));
    }
    
    return (
        <div className='FoodItems'>
            <div className="FoodItems-content">
                {
                    foodItems.filter((item) => (item.name || item.category).toLowerCase().includes(qeuery)).map((item, i) => <FoodItem data={item} key={i} category={category} addToCart={addToCart} removeToCart={removeToCart} addToWishList={addToWishList} removeToWishList={removeToWishList} />)
                }
            </div>
        </div>
    )
}

export default FoodItems