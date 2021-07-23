import {useState, useEffect} from 'react'
import Product from './Product'

const fetchProducts = () => {
  let products = []
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
  
  return products
}

const Results = (props) => {
  const {products, loaded} = props
  
  return (
    <div className="w-6/12 mx-auto flex  flex-wrap justify-center">
      {
        loaded? (
          products.map((p, i) => (
            <div key={i}>
              {JSON.stringify(p)}
              <hr></hr><br></br>
            </div>
          ))
        ): "Loading..."
      }
    </div>
  )
}

export default Results