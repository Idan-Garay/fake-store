import React, { Dispatch, useEffect, useState } from 'react'
import ProductGallery from './ProductGallery'
import Tabs from './Tabs'
import { changeCategory, fetchCategories, fetchProducts } from './features/ProductGallery/productGallerySlice'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { RootState } from './app/store'
import { ProductType } from './Product'

const IndexPage = () => {
    const category = useAppSelector((state:RootState) => state.productGallery.category)
    const products = useAppSelector((state: RootState) => state.productGallery.products)
    const categories = useAppSelector((state: RootState) => state.productGallery.categories)
    const dispatch = useAppDispatch()

    const filteredProducts: Array<ProductType> = category.toLowerCase() !== "all" ? products.filter((prod) => prod.category.toLowerCase() === category.toLowerCase()) : products

    const categoryClick = (category = "all") => {
        dispatch(changeCategory(category))
        console.log(category)
    }

    useEffect(() => {
        const abortController = new AbortController();
        dispatch(fetchCategories())
        dispatch(fetchProducts())
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