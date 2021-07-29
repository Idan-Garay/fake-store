import { Link } from "react-router-dom"

const Product = (props) => {
  const {id, image, title, category, price, description} = props.product

  return (
    <div className="product w-10/12 shadow mt-5">
      <form className="flex-auto p-6">
        <Link to={`/store/${id}`}>
          <h1 className="flex-auto text-xl font-semibold">
            {title}
          </h1>
          <div className="text-xl font-semibold text-gray-500">
            ${price}
          </div>
        </Link>
        <div className="flex-auto flex space-x-3">
          <button className="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Buy now</button>
          <button className="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to Cart</button>
        </div>
      </form>
    </div>
  )
}

export default Product