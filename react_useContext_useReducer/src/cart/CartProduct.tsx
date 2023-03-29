import React from 'react'
import { BiTrash, BiMinusCircle, BiPlusCircle } from "react-icons/bi";


const CartProduct = () => {
    return (
        <div className="products h-[18rem] border-b py-3 flex flex-col flex-grow-0">
            <div className="product_header pl-3 pt-3 flex gap-x-3">
                <input type="checkbox" name="" id="product_header" />
                <label htmlFor="product_header"><p className="text-xl">Acne-Fighting Toner</p></label>
            </div>

            <div className="product_body h-full px-9 pt-3 flex gap-x-9">
                <img src="#" alt="product_image" className="h-full w-3/4 border" />

                <div className="product_content flex flex-col place-content-between pb-3">
                    <p className='text-black text-opacity-50'>Targets acne-prone skin by helping to unclog pores and prevent breakouts. Contains salicylic acid and tea tree toil to reduce inflammation and redness.</p>

                    <div className="product_content_utilities text-2xl flex justify-between">
                        <span className='block font-semibold'>$14,25</span>
                        <div className='flex gap-x-3 items-center'>
                            <BiTrash className='mr-3 text-black text-opacity-50' />
                            <BiMinusCircle />
                            <span className='block text-black text-opacity-50 text-lg min-w-8 text-center '>1</span>
                            <BiPlusCircle />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct