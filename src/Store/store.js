import { combineReducers, createStore } from "redux";
import products from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
import wishList from "./slices/wishListSlice";
import Apicall from "./Apicall";
const reducer = combineReducers({
    products: products,
    cartItems: cartReducer,
    wishList: wishList,
    // middleware:[Apicall]
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.())
