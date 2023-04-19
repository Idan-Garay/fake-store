import { Dispatch, Middleware, PayloadAction, configureStore } from '@reduxjs/toolkit'
import productGalleryReducer from '../features/ProductGallery/productGallerySlice'
import cartReducer from '../features/Cart/cartSlice'
import authReducer from '../features/Auth/authSlice'
import { login } from '../features/Auth/authSlice';

const loggerMiddleware: Middleware = store => next => action => {
    console.log('Before action:', action);
    const result = next(action);
    console.log('After action:', store.getState());
    return result;
};

const store = configureStore({
    reducer: {
        productGallery: productGalleryReducer,
        cart: cartReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch