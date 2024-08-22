import { combineReducers } from "redux";
import productsReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import wishListReduder from "./slices/wishListSlice";
import ordersReducer from './slices/myOrdersSlics'
import Apicall from "./Apicall";
import { configureStore } from "@reduxjs/toolkit";
const reducer = combineReducers({
    products: productsReducer,
    cartItems: cartReducer,
    wishList: wishListReduder,
    orders: ordersReducer,
})

export const store = configureStore({reducer,middleware:()=>[Apicall]})
