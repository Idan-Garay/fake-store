import React, {useEffect, useState} from 'react'

const fetchCarts = () => {
  fetch('https://fakestoreapi.com/carts')
    .then(res=>res.json())
    .then(json=>console.log(json))
}

const Carts = () => {
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
    <div className="border-black">
      {(status === 'idle')?
        <p>Loading...</p>
      : carts.map(data => (
        <div key={`cart-${data.id}-${data.userId}`} >
          <pre>{JSON.stringify(data)}</pre>
        </div>
      ))
      }
    </div>
  )
}

export default Carts