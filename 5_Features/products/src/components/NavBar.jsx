import React from 'react'
import { Link } from 'react-router-dom'
import { BsCart } from "react-icons/bs";
import { useSelector } from 'react-redux';

function NavBar() {
  const quantity = useSelector((store)=> { return  store.cartReducer.cartQuantity });
  return (
    <div className='navbar'>
      <Link to="/">Home</Link>
      <Link  to="/user">Users</Link>
      <Link to="/cart">
        <div className="cart_container">
            <BsCart fontSize="large" />
            <div className="cart_quantity">{quantity}</div>
        </div>
      </Link>
    </div>
  )
}

export default NavBar