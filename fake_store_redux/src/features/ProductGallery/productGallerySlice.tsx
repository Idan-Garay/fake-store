import { createSlice} from '@reduxjs/toolkit'
import type { PayloadAction} from '@reduxjs/toolkit'
import { ProductType } from '../../Product'

interface ProductGalleryState {
    products: Array<ProductType>
    categories: Array<string>
    category: string
}

const initialState: ProductGalleryState = {
    products: [],
    categories: [],
    category: '',
}

export const  productGallerySlice = createSlice({
    name: 'productGallery',
    initialState,
    reducers: {
        changeCategory: (state, action:PayloadAction<string>) => {
            state.category = action.payload
        },
    }
})

export const {changeCategory} = productGallerySlice.actions
export default productGallerySlice.reducer