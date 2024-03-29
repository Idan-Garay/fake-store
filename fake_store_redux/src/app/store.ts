import {configureStore} from '@reduxjs/toolkit'
import productGalleryReducer from '../features/ProductGallery/productGallerySlice'
import cartReducer from '../features/Cart/cartSlice'

const store = configureStore({
    reducer: {
        productGallery: productGalleryReducer,
        cart: cartReducer
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch