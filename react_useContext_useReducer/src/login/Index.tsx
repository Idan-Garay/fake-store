import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthAccountDispatchContext, AuthAccountContext, AuthAccount } from '../../context/AuthContext'

const LoginPage = () => {
    const authAccountState = useContext(AuthAccountContext)
    const authAccountDispatch = useContext(AuthAccountDispatchContext) as React.Dispatch<Partial<AuthAccount>>
    const { email, password } = authAccountState
    const [load, setLoad] = useState(false)
    
    const navigate = useNavigate()

    const handleLogin = async (): Promise<void> => {
        setLoad(true)
        authAccountDispatch({authenticated: true})
        // validation
        // ----------
        // navigate
        await new Promise(resolve => setTimeout(resolve, 2000))
        setLoad(false)

        navigate("/")
    }

    return (
        <main className='w-full h-[100vh] px-2 border flex flex-col items-center justify-center flex-grow-0'>
            <div className=" h-4/6 w-10/12 md:w-5/12 py-6 lg:py-12 px-12 lg:px-24 rounded border flex flex-col gap-y-6">
                <h1 className='text-3xl font-semibold text-center'>Fake Z</h1>
                <div className="input-group flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" onChange={e => authAccountDispatch({ email: e.target.value })} defaultValue={email} name="email" id="email" className='border rounded h-9 p-2' />
                </div>
                <div className="input-group flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={e => authAccountDispatch({ password: e.target.value })} defaultValue={password} name="password" id="password" className='border rounded h-9 p-2' />
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