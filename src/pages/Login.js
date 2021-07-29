import {useState} from 'react'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const usernameChange = e => {
    setUsername(e.target.value)
  }

  const passwordChange = e => {
    setPassword(e.target.value)
  }

  const handleSubmit = e => {
    console.log('logging in...')
    e.preventDefault()
    fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        body:JSON.stringify({
            username: `${username}`,
            password: `${password}`
        })
    })
      .then(res=>res.json())
      .then(json=>console.log(json, 'hello'))
      console.log('logged in...')
  }  

  return (
    <form onSubmit={handleSubmit} >
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input value={username} onChange={usernameChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input value={password} onChange={passwordChange} className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded" type="submit">
            Sign In
          </button>
          {/* <a className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#" >
            Forgot Password?
          </a> */}
        </div>
      </div>
    </form>
  )
}

export default Login