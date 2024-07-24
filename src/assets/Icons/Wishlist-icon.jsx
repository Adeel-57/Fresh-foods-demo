import React from 'react'
import { Link } from 'react-router-dom'
import './Search-icon.css'
import {assets} from '../assets'

const WishList_icon = ({ size, active }) => {
  return (
    <>
      {
        active.wishlist ? <Link to={'/'} className='cart'><img src={assets.heart_active} alt="" width={15}/></Link> : <Link to={'/wishlist'} className='cart'><img src={assets.heart} alt="" width={15}/></Link>
      }
    </>
  )
}

export default WishList_icon