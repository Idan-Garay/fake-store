import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthAccountDispatchContext, AuthAccountContext, useAuthAccount } from '../context/AuthContext'
import { CartContext, CartDispatchContext, useCart } from '../context/CartContext'

import Navbar from './navbar'

const IndexLayout = () => {
    const [cartState, dispatch] = useCart()

    return (
        <>
            <CartContext.Provider value={cartState}>
                <CartDispatchContext.Provider value={dispatch}>
                    <Navbar />
                    <Outlet />
                </CartDispatchContext.Provider>
            </CartContext.Provider>
        </>
    )
}

export default IndexLayout