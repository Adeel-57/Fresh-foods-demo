import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import increaseQuantity from '../assets/add_icon_green.png'
import decreaseQuantity from '../assets/remove_icon_red.png'
import { useOutletContext } from 'react-router-dom'

const MyOrders = () => {

  const myOrders = useSelector(state => state.orders)
  const foodItems = useSelector(state => state.products)
  const qeuery = useOutletContext()
  function subTotal(orderItems) {
    let subTotal = 0;
    orderItems.map((item) => item.quantity? subTotal += item.quantity * item.price :null)
    return subTotal;
  }

  return (
    <div className='cart-container'>
      <div className="shopping-cart">
        <h1>My Orders</h1>
        <table>
          <tbody>
            <tr className={!myOrders.length ? 'tr' : ''}>
              <th>Details</th>
              <th>Delivry Time</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
            {
              !myOrders.length ? <tr className='tr' ><td className='Empty'>Empty</td></tr> : myOrders.map((element, i) => <tr className="product" key={i}>
                <td className="product-image">
                  {
                    element.map((item, index) => item.name? <div key={index} style={{display:'flex', gap:'10px',alignItems:'center',justifyContent:'center'}}>{/* <img src={item.image}/> */}<p>{item.name} x {item.quantity}</p></div>:null)
                  }
                </td>
                <td><p>{element[element.length-1].time}</p></td>
                <td>  
                  <p>Rs {subTotal(element)}</p>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyOrders