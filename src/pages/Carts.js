import React from 'react'
import Cart from '../components/Cart'
import useCartList from '../cartCache'

const Carts = (props) => {
  const {cart, setCart} = props
  const [cartList] = useCartList(cart)

  const storeCart = cartData => {
    localStorage.setItem('cart', JSON.stringify(cartData))
    setCart(cartData)
  }

  return (
    <div className="flex flex-wrap" >
      {(!cartList.length)?
        <p>Loading...</p>
      : cartList.map(data => (
          <Cart key={`cart-${data.id}-${data.userId}`} handleUse={() => {storeCart(data)}} cart={data} />
      ))
      }
    </div>
  )
}

export default Carts