import React, {useEffect, useState} from 'react'
import Cart from '../components/Cart'

const Carts = (props) => {
  const [carts, setCarts] = useState([])
  const [status, setStatus] = useState('idle')

  useEffect(() => {
    if (!carts.length) {
      fetch('https://fakestoreapi.com/carts')
        .then(res=>res.json())
        .then(json => {
          setCarts(json)
          setStatus('loaded')
        })
    }
  }, [carts])

  return (
    <div className="flex flex-wrap" >
      {(status === 'idle')?
        <p>Loading...</p>
      : carts.map(data => (
          <Cart  key={`cart-${data.id}-${data.userId}`} handleUse={() => {props.setCart(data)}} cart={data} />
      ))
      }
    </div>
  )
}

export default Carts