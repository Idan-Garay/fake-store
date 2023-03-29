import {useState} from 'react'
import './App.css'
import Navbar from './navbar';
import {
  Routes,
  Route,
} from 'react-router-dom';
import CartPage from './cart';
import IndexPage from './Index';

function App() {
  
  return (
    <div className="App min-h-[100vh] w-[100vw] flex flex-col">
      <Navbar />

      <Routes>
        <Route path='/' element={<IndexPage/>} />

        <Route path='/cart' element={<CartPage />}/>
      </Routes>
    </div>
  )
}

export default App
