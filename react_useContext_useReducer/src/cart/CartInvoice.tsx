import React, { useContext } from 'react'
import { BsTruck } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { CartContext, CartProductType } from '../../context/CartContext';

interface CartInvoiceProps {
    items: Array<CartProductType>
}

const CartInvoice = ({items}: CartInvoiceProps) => {
    const amount = items.reduce((prevVal, currVal) => {
        return prevVal + (currVal.qty * currVal.product.price)
    }, 0)
    const quantity = items.reduce((prevVal, currVal) => {
        return prevVal + currVal.qty
    }, 0)
    return (
        <>
            <div className="border-b h-2/6 min-h-2/6 py-3 px-6">
                <h3 className='font-bold'>Order Summary</h3>
                <ul className='mt-3'>
                    {
                        items.map((item) => (
                            <li className="text-black text-opacity-50 flex gap-x-3">
                                <span className="block">x{item.qty}</span>
                                <span className="block flex-grow">{item.product.title}</span>
                                <span className="block">${item.product.price.toFixed(2)}</span>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
            <div className="border-b min-h-1/6 py-3 px-6">
                <span className="flex justify-between ">
                    <span className="block text-black text-opacity-50">Delivery Today with</span>
                    <span className="block text-black text-opacity-50">$20,00</span>
                </span>

                <ul className='mt-3'>
                    <li className="flex gap-x-3 items-center">
                        <BsTruck className='text-black text-opacity-50' />
                        <span className="block text-black">Z Express</span>
                    </li>
                    <li className="flex gap-x-3 items-center">
                        <BiMap className='text-black text-opacity-50' />
                        <span className="block text-black">
                            <span className="text-black text-opacity-50">Deliver to </span>
                            Cebu, Philippines
                        </span>
                    </li>
                </ul>
            </div>
            <div className="border-b h-1/6 py-3 px-6">
                <ul className='mt-3'>
                    <li className="text-black text-opacity-50 flex gap-x-3">
                        <span className="block flex-grow">Amount</span>
                        <span className="block">${amount.toFixed(2)}</span>
                    </li>
                    <li className="text-black text-opacity-50 flex gap-x-3">
                        <span className="block flex-grow">Tax</span>
                        <span className="block">${(amount*0.12).toFixed(2)}</span>
                    </li>
                </ul>
            </div>
            <div className=" h-2/6 flex flex-col">
                <div className="border-b py-3 px-6 h-1/3 text-black font-semibold flex flex-col justify-center">
                    <ul className=''>
                        <li className=" flex gap-x-3">
                            <span className="block flex-grow">Order Total</span>
                            <span className="block">${(amount + 20 + (amount*0.12)).toFixed(2)}</span>
                        </li>
                    </ul>
                </div>
                <div className=" py-3 px-6 h-2/3 flex flex-col  place-content-end gap-y-3">
                    {/* <input type="search" name="" id="coupon" placeholder='Add Coupon' className='rounded text-center h-full p-2 ' /> */}
                    <button className=' bg-indigo-500 text-white'>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default CartInvoice