
const Cart = ({handleUse, cart}) => {
  const {id, date, products} = cart
  return (
    <div className="p-5 border-black w-64 h-72" style={{border: "1px solid black"}}>
      <div className="flex justify-center">
        <div className="relative">
          {
            products.map(data => (
              <div key={`prod-${data.productId}`}>
                <h5>{data.productId}</h5>
                <h5>{data.quantity}x</h5>
              </div>
            ))
          }
        </div>
        <div className=" flex-auto h-8 justify-between">
          <button onClick={handleUse} className='bg-blue-500 p-1 rounded w-15 text-white' >Use</button>
        </div>
      </div>
      
    </div>
  )
}

export default Cart