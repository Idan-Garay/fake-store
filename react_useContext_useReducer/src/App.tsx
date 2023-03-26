import { useState } from 'react'
import './App.css'
import Tabs from "./tabs";


function App() {
  const [count, setCount] = useState(0)

  const onClick= (category="all") => {
    return
  }

  return (
    <div className="App bg-red-400">


      <Tabs category='all' handleClick={onClick} categories={["all", "category 1"]}/>
       
    </div>
  )
}

export default App
