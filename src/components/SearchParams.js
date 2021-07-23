
const SearchParams = (props) => {
  const {categories, handleChange, handleSubmit, filter, setFilter} = props

  return (
    <form 
      onSubmit={handleSubmit}
      style={{border: "1px solid black"}} className="w-1/5 p-1">
      <div className="search grid grid-cols-3 gap-4" >
        <input className="col-span-2" type="text" onChange={handleChange} placeholder="item search" style={{border: "1px solid black"}}/>
        <button className="col-span-1" style={{border: "1px solid black"}}>Submit</button>
      </div>
      <div className="categories flex flex-wrap w-3/3" >
        {
          categories.map((category, i) => (
          <label htmlFor={category} className="w-full" key={`category-${i}`} >
            <input type="checkbox" id={category} className="mx-5" value={filter[category]} onChange={() => setFilter( {[category]: !filter[category]} )} />
            {category}
          </label>)
          )
        }
      </div>

    </form>
  )
}

export default SearchParams