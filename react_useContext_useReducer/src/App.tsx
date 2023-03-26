import { useState } from 'react'
import './App.css'
import Navbar from './navbar';
import Tabs from "./tabs";


function App() {
  const [count, setCount] = useState(0)

  const onClick= (category="all") => {
    return
  }

  return (
    <div className="App  h-[100vh] w-[100vw]">
      <Navbar/>

      <Tabs category='all' handleClick={onClick} categories={["all", "category 1"]}/>
       
    </div>
  )
}

export default App
