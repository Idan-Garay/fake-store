import React, { useEffect } from 'react'
import './App.css'
import {
  Routes,
  Route,
  useNavigate,
} from 'react-router-dom';
import CartPage from './cart/Index';
import IndexPage from './Index';
import LoginPage from './login/Index';
import IndexLayout from './IndexLayout';
import { AuthAccountContext, AuthAccountDispatchContext, useAuthAccount } from '../context/AuthContext';

function App() {
  // necessary useContext for sharing state between pages when redirecting page via url input
  const [authAccountState, authAccountDispatch] = useAuthAccount()
  const navigate = useNavigate()

  useEffect(() => {
    if (!authAccountState.authenticated) {
      navigate('/login')
    }
  }, [authAccountState.authenticated])

  return (

    <AuthAccountContext.Provider value={authAccountState}>
      <AuthAccountDispatchContext.Provider value={authAccountDispatch}>
        <div className="App min-h-[100vh] w-[100vw] flex flex-col">
          <Routes>
            <Route path='/' element={<IndexLayout />}>
              <Route index element={<IndexPage />} />
              <Route path='cart' element={<CartPage />} />
            </Route>

            <Route path='/login' index element={<LoginPage />} />
          </Routes>
        </div>

      </AuthAccountDispatchContext.Provider>
    </AuthAccountContext.Provider>
  )
}

export default App
