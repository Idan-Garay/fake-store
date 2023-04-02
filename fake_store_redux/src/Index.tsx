import React, { Dispatch, useEffect, useState } from 'react'
import ProductGallery from './ProductGallery'
import Tabs from './Tabs'
import { ProductType } from './Product'
import { changeCategory } from './features/ProductGallery/productGallerySlice'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { RootState } from './app/store'

async function fetchData<Type>(url: string, setState: Dispatch<React.SetStateAction<Type>>) {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    setState(data)
}

const IndexPage = () => {
    const category = useAppSelector((state:RootState) => state.productGallery.category)
    const dispatch = useAppDispatch()

    const [products, setProducts] = useState<Array<ProductType>>([])
    // const [category, setCategory] = useState<string>("all")
    const filteredProducts: Array<ProductType> = products.length > 0 ? products.filter((prod) => prod.category.toLowerCase() === "all" || prod.category.toLowerCase() === category.toLowerCase()) : []
    const [categories, setCategories] = useState<Array<string>>([])

    const categoryClick = (category = "all") => {
        dispatch(changeCategory(category))
        console.log(category)
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