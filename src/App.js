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
import ProductDetail from './components/ProductDetail'
import Carts from './pages/Carts'
import { TiShoppingCart } from "react-icons/ti";

const App = () => {
  const [cart, setCart] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState('all')
  const prevCategoryRef = useRef(category)

  const handleClick = e => {
    setCategory(e.target.value.toString().toLowerCase())
    setLoaded(false)
  }

  const handleAddToCart = product => {
    if (cart) {
      const products = cart.products
      let found = false

      for (let prod of products) {
        if (prod.productId === product.id) {
          prod.quantity += 1
          found = true
          break;
        }
      }

      if (!found) {
        cart.products.push({"productId": product.id, "quantity": 1}) 
      }
      setCart(cart)
    } else {
      console.log('No Cart Found')
    }
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
    prevCategoryRef.current = category
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
              <Link to="/carts" className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" >Carts</Link>
            </li>
            <div className="flex-auto justify-end">
              <li className="w-20">
                {cart? 
                  <>
                    <TiShoppingCart />
                    <h4>{`cart-${cart.id}`}</h4>
                  </>
                : null
                }
              </li>
            </div>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <h1>This is Home page</h1>
          </Route>
          <Route exact path="/store">
            <Categories handleClick={handleClick}/>
            <Results handleAddToCart={handleAddToCart} loaded={loaded} products={products} />
          </Route>
          <Route exact path="/carts">
            <h1>This is Carts page</h1>
            <Carts setCart={setCart} />
          </Route>

          <Route exact path="/store/:id">
            <ProductDetail />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
    </div>
  )
}

ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById('root'))