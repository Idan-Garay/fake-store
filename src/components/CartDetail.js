import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CartDetail = () => {
  const {cartId} = useParams()
  const [cart, setCart] = useState({})
  const [products, setProducts] = useState([])

  useEffect(()=> {
    if (cartId) {
      fetch(`https://fakestoreapi.com/carts/${cartId}`)
            .then(res=>res.json())
            .then(json => {
              setProducts(json.products)
              return setCart(json)
            })
    }
  }, [cartId])

  useEffect(()=> {
    console.log(products.length)
    if (products.length) {
      let promises = products.map(product => fetch(`https://fakestoreapi.com/products/${product.productId}`)
      .then(res => res.json()).then(json => {
        json.qty = product.quantity
        return json
      }))

      Promise.all(promises)
        .then(setProducts)
    }
  }, [cart])
  console.log(products)
  return (
    <div>
      {
        products.length?
        <div className=" bg-blue-500">
          {products.map(p => (
            <div key={`p-${p.id}`} className="bg-indigo-500">
              <div>{p.title} {`p-${p.id}`}</div>
            </div>
          ))}
        </div>
        : 'Loading'
      }
    </div>
  )
}

export default CartDetail