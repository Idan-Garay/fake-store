import React from 'react'

const fetchCarts = () => {
  fetch('https://fakestoreapi.com/carts')
    .then(res=>res.json())
    .then(json=>console.log(json))
}

const Carts = () => {
  return (
    <div>

    </div>
  )
}

export default Carts