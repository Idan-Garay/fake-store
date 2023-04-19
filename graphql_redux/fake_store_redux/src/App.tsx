import './App.css'
import { Route, Routes } from 'react-router-dom'
import CartPage from './cart/Index'
import IndexPage from './Index'
import IndexLayout from './IndexLayout'
import LoginPage from './login/Index'
import PrivateRoute from './PrivateRoute'
import { useAppSelector } from './app/hooks'
import { RootState } from './app/store'

function App() {
  const isAuthorized = useAppSelector((state: RootState) => state.auth.authorized)
  return (
    <div className="App min-h-[100vh] w-[100vw] flex flex-col border-2">
      <Routes>
        <Route path='/' element={<IndexLayout/>}>
          <Route index element={<IndexPage/>} />
          <Route path="/cart" element={<PrivateRoute authenticated={isAuthorized}/>}>
            <Route index element={<CartPage/>} />
          </Route>
        </Route>
        <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App
