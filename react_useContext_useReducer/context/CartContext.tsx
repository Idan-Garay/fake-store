import React, { useReducer } from 'react'
import { ProductType } from '../src/product'

export interface CartProductType {
    selected: boolean
    product: ProductType
    qty: number
}

export interface Cart {
    items: Array<CartProductType>
    totalQty: number
    amount: number
}

export const cartDefaultValue: Cart = {
    items: [],
    totalQty: 0,
    amount: 0,
}

export const useCart = () => {
    // a custom hook using useReducer
    return useReducer((current: Cart, update: Partial<Cart>): Cart => ({
      ...current, ...update
    }), cartDefaultValue)
  }
  

export const CartContext = React.createContext<Cart>(cartDefaultValue)
export const CartDispatchContext = React.createContext<React.Dispatch<Partial<Cart>> | undefined>(undefined)