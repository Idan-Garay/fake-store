import { useParams } from 'react-router-dom'
const ProductDetail = () => {
  const {id} = useParams()
  return (
    <div className="product w-10/12 shadow mt-5">
      <h1>{id}</h1>
      {/* <div className="flex-none w-48 relative">
        <img src={image} alt="title" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <form className="flex-auto p-6">
        <h1 className="flex-auto text-xl font-semibold">
          {title}
        </h1>
        <div className="text-xl font-semibold text-gray-500">
          ${price}
        </div>
        <div className="flex-auto flex space-x-3">
          <button className="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Buy now</button>
          <button className="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to bag</button>
        </div>
      </form> */}
    </div>
  )
}

export default ProductDetail