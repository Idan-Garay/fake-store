import React, {useEffect, useState} from 'react'
import Cart from '../components/Cart'
import useCartList from '../cartCache'

const Carts = (props) => {
  const [cartList, status] = useCartList(props.cart)

  return (
    <div className="flex flex-wrap" >
      {(!cartList.length)?
        <p>Loading...</p>
      : cartList.map(data => (
          <Cart key={`cart-${data.id}-${data.userId}`} handleUse={() => {props.setCart(data)}} cart={data} />
      ))
      }
    </div>
  )
}

export default Carts