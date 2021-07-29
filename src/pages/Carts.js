import React, {useEffect, useState} from 'react'

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
    <div className="border-black">
      {(status === 'idle')?
        <p>Loading...</p>
      : carts.map(data => (
        <div key={`cart-${data.id}-${data.userId}`} >
          <div className='border-1 border-black'>
            <button className='bg-blue-500 p-1 rounded w-15 text-white' onClick={() => {props.setCart(data)}}>Use</button>
          </div>
          <pre>{JSON.stringify(data)}</pre>
        </div>
      ))
      }
    </div>
  )
}

export default Carts