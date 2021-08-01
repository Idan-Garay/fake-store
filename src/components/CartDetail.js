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
        json.totalPrice = product.quantity * json.price
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
      setStatus('idle')
    }
  }, [cart])
  
  return (
    <div>
      {
        status !== 'idle' ?
        <div className="h-2/3 w-2/3 mx-auto p-5 bg-blue-500">
          {products.map(p => {
            return (
              <div key={`p-${p.id}`} className=" bg-indigo-100 px-3 h-auto py-2 mb-2">
                <div className=" flex justify-between">
                  <div className=" text-gray-700 font-semibold">{p.title} {`p-${p.id}`}
                  </div>
                  <div className=" text-gray-700 font-semibold">
                    x{p.qty}
                  </div>
                </div>
                <p className=" text-right ">${p.price}</p>
              </div>
            )  
          })}
          <div className=" shadow-xl bg-indigo-100 text-right">
            <h1>${products.reduce((accumulator, curr) => accumulator + curr.totalPrice, 0)}</h1>
          </div>
        </div>
        : <p>{status}</p>
      }
    </div>
  )
}

export default CartDetail