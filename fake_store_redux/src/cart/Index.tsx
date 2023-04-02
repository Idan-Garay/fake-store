
import React from 'react'
import { ProductType } from '../Product'

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

const CartPage = () => {
  return (
    <div>CartPage</div>
  )
}

export default CartPage