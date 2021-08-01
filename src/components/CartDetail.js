import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CartDetail = () => {
  const {cartId} = useParams()
  const [cart, setCart] = useState({})
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('idle')

  useEffect(()=> {
    if (cartId) {
      fetch(`https://fakestoreapi.com/carts/${cartId}`)
            .then(res=>res.json())
            .then(json => {
              setProducts(json.products)
              return setCart(json)
            })
      setStatus('loading')
    }
    return () => {
      setCart({})
    }
  }, [cartId])

  useEffect(()=> {
    if (products.length) {
      let promises = products.map(product => fetch(`https://fakestoreapi.com/products/${product.productId}`)
      .then(res => res.json()).then(json => {
        json.qty = product.quantity
        return json
      }))

      Promise.all(promises)
        .then(values => {
          setStatus('loaded')
          return setProducts(values)
        })
    }

    return () => {
      setProducts([])
    }
  }, [cart])
  
  return (
    <div>
      {
        status !== 'idle'?
        <div className=" bg-blue-500">
          {products.map(p => {
            return (
              <div key={p.id} className="bg-indigo-500">
                <div>{p.title} {`p-${p.id}`}</div>
              </div>
            )  
          })}
        </div>
        : {status}
      }
    </div>
  )
}

export default CartDetail