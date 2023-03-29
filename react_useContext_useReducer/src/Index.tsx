import React, { Dispatch, useEffect, useState } from 'react'
import { ProductType } from './product'
import ProductGallery from './productGallery'
import Tabs from './tabs'

async function fetchData<Type>(url: string, setState: Dispatch<React.SetStateAction<Type>>) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setState(data)
  }

const IndexPage = () => {
    const [products, setProducts] = useState<Array<ProductType>>([])
    const [category, setCategory] = useState<string>("all")
    const filteredProducts: Array<ProductType> = products.length > 0 ? products.filter((prod) => category.toLowerCase() === "all" || prod.category.toLowerCase() === category.toLowerCase()) : []
    const [categories, setCategories] = useState<Array<string>>([])
    
    const categoryClick = (category = "all") => {
        console.log(category)
        setCategory(category)
    }
    
    console.log(filteredProducts)
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
        <>
            <Tabs category={category} handleClick={categoryClick} categories={categories} />
            <ProductGallery products={filteredProducts} />
        </>
    )
}

export default IndexPage