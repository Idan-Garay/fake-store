import React from 'react'
import './App.css'
import Navbar from './navbar';
import {
  Routes,
  Route,
} from 'react-router-dom';
import CartPage, { Cart, cartDefaultValue, useCart } from './cart/Index';
import IndexPage from './Index';

export const CartContext = React.createContext<Cart>(cartDefaultValue)
export const CartDispatchContext = React.createContext<React.Dispatch<Partial<Cart>> | undefined>(undefined)

function App() {
  // necessary useContext for sharing state between pages when redirecting page via url input
  const [cartState, dispatch] = useCart()
  console.log(cartState)
  return (
    <CartContext.Provider value={cartState}>
      <CartDispatchContext.Provider value={dispatch}>
        <div className="App min-h-[100vh] w-[100vw] flex flex-col">
          <Navbar />

          <Routes>
            <Route path='/' element={<IndexPage />} />

            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </div>
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  )
}

export default App
