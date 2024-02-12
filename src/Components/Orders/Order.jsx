import React from 'react'
import { NavLink } from "react-router-dom"
import "./Order.css"

function Order() {
  return (
<>

<div className="orderPage">
      <h1>Your order has been placed</h1>
      <NavLink to="/">
        <button className='continueShopping'>Continue Shopping</button>
      </NavLink>
</div>

</>
  )
}

export default Order
