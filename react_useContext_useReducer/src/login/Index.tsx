import React from 'react'

const LoginPage = () => {
    return (
        <main className='w-full h-[100vh] border flex flex-col items-center justify-center flex-grow-0'>
            <div className=" h-4/6 w-5/12 py-12 px-24 rounded border flex flex-col gap-y-6">
                <h1 className='text-3xl font-semibold text-center'>Fake Z</h1>
                <div className="input-group flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className='border rounded h-9 p-2' />
                </div>
                <div className="input-group flex flex-col">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" className='border rounded h-9 p-2' />
                </div>
                <div className="input-group flex items-center gap-x-3">
                    <input type="checkbox" name="remember me" id="remember_me" className='border rounded h-9 p-2' />
                    <label htmlFor="password" className='block'>Remember me</label>
                </div>

                <button className="w-full border bg-indigo-500 text-white">Log in</button>
                <p className='self-center -mt-3'>or</p>
                <p className='self-center -mt-3'>Don't have an account? <span className=" text-indigo-500 hover:cursor-pointer">Register</span></p>
            </div>
        </main>
    )
}

export default LoginPage