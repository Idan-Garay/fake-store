import React, { useContext } from 'react'
import { BiTrash, BiMinusCircle, BiPlusCircle } from "react-icons/bi";
import { Cart, CartContext, CartDispatchContext, CartProductType } from '../../context/CartContext';
import { addProduct } from '../product';

interface CartProductProps {
    cartProduct: CartProductType
}

const CartProduct = (props: CartProductProps) => {
    const { product, selected } = props.cartProduct
    const { title, price, description, image } = product
    const cartState = useContext(CartContext)
    const dispatch = useContext(CartDispatchContext) as React.Dispatch<Partial<Cart>>

    const removeProduct = () => {
        const {qty} = props.cartProduct
        const newAmount: number = cartState.amount - (product.price * qty)
        const newTotalQty: number = cartState.totalQty - qty
        dispatch({ 
            items: cartState.items.filter(item => item.product.id !== product.id),
            amount: newAmount,
            totalQty: newTotalQty
        })
    }

    const decreaseProduct = () => {
        const {items, totalQty, amount} = cartState
        const index = items.findIndex(item => item.product.id === product.id)
    
        if (index == -1) {
            console.log(items[1].product.id === product.id)
    
            return
        }
    
        const newItems = [...items]
        if (newItems[index].qty === 1) {
            newItems.splice(index, 1)
            console.log(newItems)
        } else {
            newItems[index].qty--
        }
        
        const [newAmount, newTotalQty] = [amount - (product.price * items[index].qty), (totalQty - 1)]
        console.log(newAmount, newTotalQty)
        return dispatch({
            items: newItems,
            amount: newAmount,
            totalQty: newTotalQty,
        })
    }

    return (
        <div className="products max-h-[18rem] border-b py-3 flex flex-col">
            <div className="product_header pl-3 pt-3 flex items-center gap-x-3 h-1/5">
                <input type="checkbox" name="" id="product_header" checked={selected}/>
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
                            <BiPlusCircle className='hover:cursor-pointer' onClick={() => { addProduct(product, cartState.items, dispatch) }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct