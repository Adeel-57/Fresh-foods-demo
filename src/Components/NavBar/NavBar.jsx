import React, { useEffect, useState } from 'react'
import './NavBar.css'
import Search_icon from '../../assets/Icons/Search-icon'
import Cart_icon from '../../assets/Icons/Cart-icon'
import WishList_icon from '../../assets/Icons/Wishlist-icon'
import { useLocation } from 'react-router-dom'
const NavBar = ({ setQuery, setOpen }) => {
  const [active, setActive] = useState({
    cart: false,
    wishlist: false,
  })
  const { pathname } = useLocation()
  useEffect(() => {
    if (pathname.includes('/cart')) {
      setActive(pre => ({ ...pre, cart: true }))
    } else {
      setActive(pre => ({ ...pre, cart: false }))
    }
    if (pathname.includes('/wishlist')) {
      setActive(pre => ({ ...pre, wishlist: true }))
    } else {
      setActive(pre => ({ ...pre, wishlist: false }))
    }
  }, [pathname])
  
  return (
    <div className='Nav-bar'>
      <div className="Nav-content">
        <p>LOGO</p>
        <div className='menu'>
          <Search_icon color={"black"} size={14} setQuery={setQuery} />
          <WishList_icon size={15} active={active} />
          <Cart_icon size={12} active={active} />
          <button onClick={() => setOpen(true)}>Log in</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar