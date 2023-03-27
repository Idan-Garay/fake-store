import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './navbar';
import ProductGallery from './productGallery';
import Tabs from "./tabs";


function App() {
  const [page, setPage] = useState('/')
  const [categories, setCategories] = useState([])
  const onClick = (category = "all") => {
    return
  }
  
  const fetchCategories = async () => {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    const data = await res.json()
    console.log(data)
    setCategories(data)
  }

  // useEffect shouldn't contain actions
  useEffect(() => {
    const abortController = new AbortController()
    fetchCategories()

    return() => abortController.abort()
  }, [])

  return (
    <div className="App h-[100vh] w-[100vw] flex flex-col">
      <Navbar handleClick={(page) => {setPage(page)}}/>
    
      <Tabs category='all' handleClick={onClick} categories={categories} />
      <ProductGallery category='all' />
    </div>
  )
}

export default App
