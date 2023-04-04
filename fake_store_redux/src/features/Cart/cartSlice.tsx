import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../../Product";

export interface CartProductType {
    selected: boolean
    product: ProductType
    qty: number
}

export interface Cart {
    items: Array<CartProductType>
    totalQty: number
    amount: number
    selectedAll: boolean
}

const initialState: Cart = {
    items: [],
    totalQty: 0,
    amount: 0,
    selectedAll: true,
}

export const cartSlice = createSlice({
    name: 'Cart',
    initialState: initialState,
    reducers: {
        addItem: (state, action: PayloadAction<ProductType>) => {
            const product = action.payload
            const idx = state.items.findIndex((item) => item.product.id === product.id)

            if (idx === -1) {
                state.items.push({ selected: true, product: product, qty: 1 })
            } else {
                state.items[idx].qty += 1
            }
            state.amount += product.price
            state.totalQty += 1
        },
        removeItem: (state, action: PayloadAction<CartProductType>) => {
            const cartProduct = action.payload
            const idx = state.items.findIndex((item) => item.product.id === cartProduct.product.id)

            if (idx !== -1) {
                state.amount -= cartProduct.qty * cartProduct.product.price
                state.items = state.items.filter(item => item.product.id !== cartProduct.product.id)
            }
        },
        decreaseItem: (state, action: PayloadAction<CartProductType>) => {
            const cartProduct = action.payload
            const idx = state.items.findIndex((item) => item.product.id === cartProduct.product.id)

            if (idx !== -1) {
                const qty = state.items[idx].qty
                if (qty === 1) {
                    state.items = state.items.filter(item => item.product.id !== cartProduct.product.id)
                    state.amount -= cartProduct.product.price
                } else {
                    state.items[idx].qty -= 1
                    state.amount -= cartProduct.product.price
                }
            }
        },
        handleSelectItem: (state, action: PayloadAction<CartProductType>) => {
            const idx = state.items.findIndex(item => item.product.id === action.payload.product.id)
            if (idx !== -1) {
                state.items[idx].selected = !state.items[idx].selected
            }
        },
        handleSelectAllItems: (state) => {
            const val = !state.selectedAll
            state.selectedAll = val
            state.items = state.items.map(item => ({...item, selected: val}))
        }
    },
})

export const { addItem, removeItem, decreaseItem, handleSelectItem, handleSelectAllItems } = cartSlice.actions
export default cartSlice.reducer