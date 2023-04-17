import './App.css'
import { Route, Routes } from 'react-router-dom'
import CartPage from './cart/Index'
import IndexPage from './Index'
import IndexLayout from './IndexLayout'
import LoginPage from './login/Index'

function App() {
  return (
    <div className="App min-h-[100vh] w-[100vw] flex flex-col border-2">
      <Routes>
        <Route path='/' element={<IndexLayout/>}>
          <Route index element={<IndexPage/>} />
          <Route path='cart' element={<CartPage/>}/>
        </Route>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App
