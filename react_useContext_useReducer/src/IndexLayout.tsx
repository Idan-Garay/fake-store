import React from 'react'
import { Outlet } from 'react-router-dom'
import { CartContext, CartDispatchContext, useCart } from '../context/CartContext'

import Navbar from './navbar'

const IndexLayout = () => {
    const [cartState, dispatch] = useCart()
    console.log(cartState)

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