import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Cart from './Pages/Cart.jsx';
import WishList from './Pages/WishList.jsx';
import MyOrders from './Pages/MyOrders.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/wishlist",
        element: <WishList/>,
      },
      {
        path: "/myorders",
        element: <MyOrders/>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);