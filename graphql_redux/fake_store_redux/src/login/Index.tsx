import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { login, loginThunk } from '../features/Auth/authSlice'

const LoginPage = () => {
  const authState = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const [emailInput, passwordInput] = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)]
  const [load, setLoad] = useState(false)

  const navigate = useNavigate()

  const handleLogin = async (): Promise<void> => {

    if (emailInput.current && passwordInput.current) {
      setLoad(true)
      dispatch(loginThunk({
        email: emailInput.current.value, 
        password: passwordInput.current.value
      }))
      await new Promise(resolve => setTimeout(resolve, 2000))
      // validation
      // ----------
      // navigate
      setLoad(false)
      navigate("/")
    }

  }

  return (
    <main className='w-full h-[100vh] px-2 border flex flex-col items-center justify-center flex-grow-0'>
      <div className=" h-4/6 w-10/12 md:w-5/12 py-6 lg:py-12 px-12 lg:px-24 rounded border flex flex-col gap-y-6">
        <h1 className='text-3xl font-semibold text-center'>Fake Z</h1>
        <div className="input-group flex flex-col">
          <label htmlFor="email">Email</label>
          <input ref={emailInput} type="email" name="email" id="email" className='border rounded h-9 p-2' />
        </div>
        <div className="input-group flex flex-col">
          <label htmlFor="password">Password</label>
          <input ref={passwordInput} type="password" name="password" id="password" className='border rounded h-9 p-2' />
        </div>
        <div className="input-group flex items-center gap-x-3">
          <input type="checkbox" name="remember me" id="remember_me" className='border rounded' />
          <label htmlFor="password" className='block'>Remember me</label>
        </div>

        <button className="w-full border bg-indigo-500 text-white" onClick={handleLogin}>
          {
            load
              ? "Processing ..."
              : "Log in"
          }
        </button>
        <p className='self-center -mt-3'>or</p>
        <p className='self-center -mt-3'>Don't have an account? <span className=" text-indigo-500 hover:cursor-pointer">Register</span></p>
      </div>
    </main>
  )
}

export default LoginPage