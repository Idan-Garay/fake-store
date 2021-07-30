
const Categories = ({handleClick}) => {
  return (
    <div className="space-x-2 flex justify-center">
      <button onClick={handleClick} value="Electronics" className="shadow p-2 button w-2/12">Electronics</button>
      <button onClick={handleClick} value="jewelery" className="shadow p-2 button w-2/12">Jewelry</button>
      <button onClick={handleClick} value="Men's Clothing" className="shadow p-2 button w-2/12">Men Clothing</button>
      <button onClick={handleClick} value="Women's Clothing" className="shadow p-2 button w-2/12">Women Clothing</button>
    </div>
  )
}

export default Categories