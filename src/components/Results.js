import {useState, useEffect} from 'react'
import Product from './Product'

const Results = (props) => {
  const {products, loaded} = props
  
  return (
    <div className="w-7/12 mx-auto flex  flex-wrap justify-center">
      {
        loaded? (
          products.map((p, i) => (
            <Product key={`prod-${i}`} product={p} />
          ))
        ): "Loading..."
      }
    </div>
  )
}

export default Results