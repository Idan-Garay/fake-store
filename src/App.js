import {React, StrictMode, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import Results from './components/Results'
import SearchParams from './components/SearchParams'

const App = () => {
  const [loaded, setLoaded] = useState(false)
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState({})
  const [result, setResult] = useState([])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
    setResult(
      products.filter(data => {
        return data.title.search(search) != -1
      })
    )
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=3')
      .then(res=>res.json())
      .then(json => {
        setProducts(json)
        setResult(json)
      })

      console.log(products)
      if (products.length > 0)
        setLoaded(true)
  }, [products.length])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res=>res.json())
      .then(json => {
        setCategories(json)
        json.map(data => {setFilter({[data]: false})})
      })
      console.log(filter)
  }, [categories.length])

  return (
    <div className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4 border-dotted">
      {(categories.length? 
        <SearchParams categories={categories} setFilter={setFilter} handleChange={handleChange} handleSubmit={handleSubmit} filter={filter}/>
        : "...loading")}
      <Results loaded={loaded} products={result} />
    </div>
  )
}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById('root'))