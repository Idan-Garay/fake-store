import React from 'react'
import { BiTrash, BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { CartProductType, addItem, decreaseItem, removeItem, handleSelectItem } from '../features/Cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';

interface CartProductProps {
    cartProduct: CartProductType
}

const CartProduct = (props: CartProductProps) => {
    const { product, selected } = props.cartProduct
    const { title, price, description, image } = product
    const dispatch = useAppDispatch()

    const addProduct = () => {
        dispatch(addItem(props.cartProduct.product))
    }

    const removeProduct = () => {
        dispatch(removeItem(props.cartProduct))
    }

    const decreaseProduct = () => {
        return dispatch(decreaseItem(props.cartProduct))
    }

    const handleChange = () => {
        dispatch(handleSelectItem(props.cartProduct))
    }

    return (
        <div className="products max-h-[18rem] border-b py-3 flex flex-col">
            <div className="product_header pl-3 pt-3 flex items-center gap-x-3 h-1/5">
                <input type="checkbox" name="" id="product_header" checked={selected} onChange={handleChange} />
                <label htmlFor="product_header"><p className="text-xl">{title}</p></label>
            </div>

            <div className="product_body h-4/5 px-9 pt-3 flex gap-x-9 ">
                <img src={image} alt="product_image" className="w-2/5 bg-white object-contain p-3 border" />

                <div className="product_content flex flex-col w-3/5 place-content-between pb-3 ">
                    <p className='text-black text-opacity-50 line-clamp-5 overflow-hidden h-4/6 block'>{description}</p>

                    <div className="product_content_utilities text-2xl flex justify-between h-1/6 ">
                        <span className='block font-semibold'>${price.toFixed(2)}</span>
                        <div className='flex gap-x-3 items-center'>
                            <BiTrash className='mr-3 text-black text-opacity-50 hover:cursor-pointer' onClick={removeProduct} />
                            <BiMinusCircle className='hover:cursor-pointer' onClick={decreaseProduct} />
                            <span className='block text-black text-opacity-50 text-lg min-w-8 text-center '>{props.cartProduct.qty}</span>
                            <BiPlusCircle className='hover:cursor-pointer' onClick={addProduct} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct