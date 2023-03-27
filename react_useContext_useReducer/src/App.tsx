import { useState } from 'react'
import './App.css'
import Navbar from './navbar';
import ProductGallery from './productGallery';
import Tabs from "./tabs";


function App() {
  const [count, setCount] = useState(0)

  const onClick = (category = "all") => {
    return
  }

  return (
    <div className="App h-[100vh] w-[100vw] flex flex-col">
      <Navbar />

      <Tabs category='all' handleClick={onClick} categories={["all", "category 1"]} />
      <ProductGallery category='all' />
    </div>
  )
}

export default App
