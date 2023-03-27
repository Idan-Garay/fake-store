import { useEffect, useState, Dispatch } from 'react'
import './App.css'
import Navbar from './navbar';
import { ProductType, productDefaultValue } from './product';
import ProductGallery from './productGallery';
import Tabs from "./tabs";

async function fetchData<Type>(url: string, setState: Dispatch<React.SetStateAction<Type>>) {
  const res = await fetch(url)
  const data = await res.json()
  console.log(data)
  setState(data)
}

function App() {
  const [page, setPage] = useState('/')
  const [products, setProducts] = useState<Array<ProductType>>([])
  const [categories, setCategories] = useState<Array<string>>([])
  const [category, setCategory] = useState<string>("all")
  const filteredProducts: Array<ProductType> = products.length > 0 ? products.filter((prod) => category.toLowerCase() === "all" || prod.category.toLowerCase() === category.toLowerCase()) : []
  console.log(filteredProducts)
  const categoryClick = (category = "all") => {
    console.log(category)
    setCategory(category)
  }

  // useEffect shouldn't contain actions
  useEffect(() => {
    const abortController = new AbortController();
    (async () => {
      await Promise.all([
        fetchData<Array<string>>('https://fakestoreapi.com/products/categories', setCategories),
        fetchData('https://fakestoreapi.com/products', setProducts),
      ])
    })()
    return () => abortController.abort()
  }, [])

  return (
    <div className="App h-[100vh] w-[100vw] flex flex-col">
      <Navbar handleClick={(page) => { setPage(page) }} />

      <Tabs category={category} handleClick={categoryClick} categories={categories} />
      <ProductGallery category={category} products={filteredProducts} />
    </div>
  )
}

export default App
