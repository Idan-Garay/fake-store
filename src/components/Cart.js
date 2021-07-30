
const Cart = ({handleUse, cart}) => {
  const {id, date, products} = cart
  return (
    <div className="bg-blue-500 w-64 h-64 ml-5 mt-5 shadow-md rounded p-5 flex flex-col justify-between">
      <div className="top">
      {
      cart.products.map(data => (
          <div key={`prod-${data.productId}`} className="flex justify-between bg-white px-1 h-7">
            <p>product: {data.productId}</p>
            <p>x{data.quantity}</p>
          </div>
        ))
      }
      </div>
      <div className="flex flex-row-reverse">
        <button className="bg-purple-300 text-gray-800 px-2 rounded shadow-md" onClick={handleUse}>Use Cart</button>
      </div>
    </div>
  )
}

export default Cart