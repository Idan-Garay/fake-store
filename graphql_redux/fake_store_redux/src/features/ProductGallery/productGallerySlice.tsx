import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../../Product'

export const fetchProducts = createAsyncThunk('productGallery/fetchProducts', async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json()

    return data
})

export const fetchCategories = createAsyncThunk('productGallery/fetchCategories', async () => {
    const response = await fetch('http://fakestoreapi.com/products/categories')
    const data = await response.json()
    return data
})

interface ProductGalleryState {
    products: Array<ProductType>
    productsStatus: string
    productsErrorMessage: string
    categories: Array<string>
    category: string
}

const initialState: ProductGalleryState = {
    products: [],
    productsStatus: 'loading',
    productsErrorMessage: '',
    categories: [],
    category: 'all',
}

export const productGallerySlice = createSlice({
    name: 'productGallery',
    initialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.productsStatus = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.productsStatus = 'success'
                state.products = action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.productsStatus = 'failed'
                state.productsErrorMessage = action.error.message ?? "failed fetching of products"
            })
            .addCase(fetchCategories.pending, (state, action) => {
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                console.log(action)
            })
    },
})

export const { changeCategory } = productGallerySlice.actions
export default productGallerySlice.reducer