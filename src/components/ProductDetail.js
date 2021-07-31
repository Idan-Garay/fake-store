import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
const ProductDetail = () => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(setProduct)
  }, [id])
  console.log(product)
  return (
    <>
      {
        product === null? <p>Loading</p>
        :(
          <div className="flex flex-wrap justify-center w-3/4 h-3/4 mx-auto shadow-xl">
            <div className="h-3/6 w-3/6">
              <img src={product.image} alt="title" />
            </div>
            <form className="flex-auto p-6 w-3/6 space-y-3">
              <h1 className="flex-auto text-xl font-semibold">
                {product.title}
              </h1>
              <div className="text-xl font-semibold text-gray-500">
                ${product.price}
              </div>
              <div className="w-auto">
                {product.description}
              </div>
              <div className="flex space-x-3 h-3/12 ">
                <button className="w-1/2 flex items-center justify-center rounded-md bg-blue-500 text-white" type="submit">Buy now</button>
                <button className="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to bag</button>
              </div>
            </form>
          </div>
        )
      }
    </>
  )
}

export default ProductDetail