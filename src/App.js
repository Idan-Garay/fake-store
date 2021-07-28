import {React, StrictMode, useState, useEffect, useRef} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Results from './components/Results'
import Categories from './components/Categories'
import {ErrorBoundary} from 'react-error-boundary'


const App = () => {
  const [loaded, setLoaded] = useState(false)
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('all')
  const prevCategoryRef = useRef(category)

  const handleClick = e => {
    setCategory(e.target.value.toString().toLowerCase())
    setLoaded(false)
  }

  const ErrorFallback = ({error}) => {
    return (
      <div>
        <p>Something went wrong:</p>
        <pre>error.message</pre>
      </div>
    )
  }
  
  useEffect(() => {
    console.log(category)
    prevCategoryRef.current = category
    console.log(prevCategoryRef.current)
  }, [category])

  const prevCategory = prevCategoryRef.current

  useEffect(() => {
    // let val = category === 'all' ? 'categories' : `category/${category}`
    if (!products.length || ( prevCategory !== category)) {
      const url = `https://fakestoreapi.com/products/${category === 'all' ? '': `category/${category}` }`
      fetch(url)
        .then(res => {
          const retVal = res.json()
          console.log(res, url)
          console.log(retVal)
          return retVal
        }, error => console.log(error))
        .then(json => {
          setProducts(json)
          setLoaded(true)
        }, error => console.log(error))
    }
  }, [category])

  return (
    <div className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4 border-dotted">
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <nav>
          <ul className="flex">
            <li className="mr-3">
              <Link to="/" className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" >Home</Link>
            </li>
            <li className="mr-3">
              <Link to="/store" className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" >Store</Link>
            </li>
            <li className="mr-3">
              <Link to="/user" className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" >User</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/store">
            <Categories handleClick={handleClick}/>
            <Results loaded={loaded} products={products} />
          </Route>
          <Route path="/user">
            <h1>This is user page</h1>
          </Route>
          <Route path="/">
            <h1>This is Home page</h1>
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
    </div>
  )
}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById('root'))