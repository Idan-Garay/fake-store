import {configureStore} from '@reduxjs/toolkit'
import productGalleryReducer from '../features/ProductGallery/productGallerySlice'

const store = configureStore({
    reducer: {
        productGallery: productGalleryReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch