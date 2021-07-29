import { useState } from "react"

const Register = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    fetch('https://fakestoreapi.com/users',{
      method:"POST",
      body:JSON.stringify(
          {
              email: `${username}`,
              username: `${password}`,
              password: `${email}`,
              name:{
                  firstname:'',
                  lastname:''
              },
              address:{
                  city: '',
                  street: '',
                  number: 0,
                  zipcode:'',
                  geolocation:{
                      lat:'',
                      long: ''
                  }
              },
              phone:''
          }
      )
  })
      .then(res=>res.json())
      .then(json=>console.log(json))
  }

  console.log('register mounted')
  return (
    <div className="flex justify-center">
      <form className="w-1/3">
        <label htmlFor="username" className="">
          Username:
          <input onChange={e => setUsername(e.target.value)} id="username" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
        </label>

        <label htmlFor="password">
          Password:
          <input onChange={e => setPassword(e.target.value)} id="password" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
        </label>

        <label htmlFor="email">
          Email:
          <input onChange={e => setEmail(e.target.value)} id="email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
        </label>

        <div className="flex justify-end">
          <button type="submit" className="mt-5 f shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register