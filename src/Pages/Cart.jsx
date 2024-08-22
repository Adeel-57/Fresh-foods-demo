import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Cart.css'
import increaseQuantity from '../assets/add_icon_green.png'
import decreaseQuantity from '../assets/remove_icon_red.png'
import { DecreaseQuantity, IncreaseQuantity, RemoveToCart } from '../Store/slices/cartSlice'
import { useOutletContext } from 'react-router-dom'
import Input from '../Components/CustomInputs/Input'
import { placeOrder } from '../Store/slices/myOrdersSlics'

const Cart = () => {
  const cart = useSelector(state => state.cartItems)
  const foodItems = useSelector(state => state.products)
  const dispatch = useDispatch()
  const qeuery = useOutletContext()
  const [Value, SetValue] = useState({
    name: '',
    email: '',
    address: '',
  })
  const [Error, SetError] = useState('')
  const validation = {
    name: [{ required: true, errMsg: 'Please enter your name' }],
    email: [{ required: true, errMsg: 'Please enter your email' }],
    address: [{ required: true, errMsg: 'Please enter your address' }]
  }
  function Validate(e) {
    const err = {}
    Object.entries(e).forEach(([key, value]) => {
      validation[key].some((rule) => {
        if (rule.required && !value.trim()) {
          err[key] = rule.errMsg
          return true;
        }
      })
    })
    return err;
  }
  function onsubmit(e) {
    e.preventDefault()
    const Err = Validate(Value)
    SetError(Err)
    if (Object.entries(Err).length) {
      return
    } else {
      console.log('congratulations')
      dispatch(placeOrder(cart))
      SetValue({
        name: '',
        email: '',
        address:'',
      })
    }
  }
  function onChange(e) {
    const { name, value } = e.target;
    // SetValue({ ...Value, [name]: value })
    SetValue(pre => ({ ...pre, [name]: value }))
  }
  function subTotal() {
    let subTotal = 0;
    cart.map((item) => { subTotal += item.quantity * item.price })
    return subTotal;
  }
  function Increasequantity(e) {
    dispatch(IncreaseQuantity(foodItems.find((item) => item._id === e.target.id)))
  }
  function Decreasequantity(e) {
    dispatch(DecreaseQuantity(foodItems.find((item) => item._id === e.target.id)))
  }
  const removeToCart = (e) => {
    dispatch(RemoveToCart(foodItems.find((item) => item._id === e.target.id)))
  }

  return (
    <div className='cart-container'>
      <div className="shopping-cart">
        <h1>Shopping Cart</h1>
        <table>
          <tbody>
            <tr className={!cart.length ? 'tr' : ''}>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Remove</th>
              <th>Total</th>
            </tr>
            {
              !cart.length ? <tr className='tr' ><td className='Empty'>Empty</td></tr> : cart.filter((item) => (item.name || item.category).toLowerCase().includes(qeuery)).map((item, i) => <tr className="product" key={i}>
                <td className="product-image">
                  <img src={item.image} />
                </td>
                <td className="product-details">
                  {item.name}
                </td>
                <td className="product-price">
                  Rs {item.price}
                </td>
                <td>
                  <div className="product-quantity">
                    <img src={decreaseQuantity} id={item._id} onClick={Decreasequantity} />
                    {item.quantity}
                    <img src={increaseQuantity} id={item._id} onClick={Increasequantity} />
                  </div>
                </td>
                <td className="product-removal">
                  <button className="remove-product" id={item._id} onClick={removeToCart}>
                    Remove
                  </button>
                </td>
                <td className="product-line-price">Rs {item.quantity * item.price}</td>
              </tr>)
            }
          </tbody>
        </table>
        <div className="info">
          <div className="totals">
            <div>
              <p className='lable'>Subtotal</p>
              <div className="totals-value" id="cart-subtotal">{subTotal()}</div>
            </div>
            <div>
              <p className='lable'>Shipping cost</p>
              <div className="totals-value" id="cart-shipping">{subTotal()?15.00:0}</div>
            </div>
            <div>
              <p  className='lable'>Grand Total</p>
              <div className="totals-value" id="cart-total">{subTotal()?subTotal() + 15.00:0}</div>
            </div>
          </div>
          <form className="form" onSubmit={onsubmit}>
            <div className='container'>
              <Input lable='Enter your name' name='name' type='text' value={Value.name} onChange={onChange} err={Error.name} />
            </div>
            <div className='container'>
              <Input lable='Enter your email' name='email' type='text' value={Value.email} onChange={onChange} err={Error.email} />
            </div>
            <div className='container'>
              <Input lable='Enter your complete address' name='address' type='text' value={Value.address} onChange={onChange} err={Error.address} />
            </div>
            <button className="checkout">Checkout</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cart