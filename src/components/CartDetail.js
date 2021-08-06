import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CartDetail = () => {
  // const {cartId} = useParams()
  const pVal = JSON.parse(localStorage.getItem('cart')).products
  const [products, setProducts] = useState(pVal)
  const [status] = useState('idle')

  console.log(products.length)
  
  useEffect(() => {
    const controller = new AbortController()
    if (products) {
      const promises = 
      products.map(data => fetch(`https://fakestoreapi.com/products/${data.productId}`)
        .then(res => res.json())
        .then(json => {
          json.qty = data.quantity
          json.totalPrice = json.qty * json.price
          return json
        })
      , controller.signal)
      Promise.all(promises)
        .then(setProducts)
    }

    return () => {
      controller.abort()
    }
  }, [products])
  
  return (
    <div>
      {
        products.length ?
        <div className="h-2/3 w-2/3 mx-auto p-5 bg-blue-500">
          {products.map(p => {
            console.log(products.length)
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