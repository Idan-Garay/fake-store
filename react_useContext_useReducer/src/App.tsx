import React from 'react'
import './App.css'
import {
  Routes,
  Route,
} from 'react-router-dom';
import CartPage from './cart/Index';
import IndexPage from './Index';
import LoginPage from './login/Index';
import IndexLayout from './IndexLayout';

function App() {
  // necessary useContext for sharing state between pages when redirecting page via url input
 
  return (
        <div className="App min-h-[100vh] w-[100vw] flex flex-col">
          <Routes>
            <Route path='/' element={<IndexLayout />}>
              <Route index element={<IndexPage />} />
              <Route path='cart' element={<CartPage />} />
            </Route>

            <Route path='/login' index element={<LoginPage />} />
          </Routes>
        </div>
  )
}

export default App
