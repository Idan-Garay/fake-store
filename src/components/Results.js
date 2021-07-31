import {useState, useEffect} from 'react'
import Product from './Product'

const Results = (props) => {
  const {products, loaded, handleAddToCart} = props
  
  return (
    <div className="w-100 flex flex-wrap px-20 justify-center ">
      {
        loaded? (
          products.map((p, i) => (
            <Product key={`prod-${i}`} handleAddToCart={handleAddToCart} product={p} />
          ))
        ): "Loading..."
      }
    </div>
  )
}

export default Results