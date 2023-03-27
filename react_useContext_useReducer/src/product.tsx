import React from "react"

export type ProductType = {
  id: string
  title: string
  price: string
  category: string
  description: string
  image: string
}

export const productDefaultValue: ProductType = {
  id: "id1",
  title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
  price: "$599",
  image: "#",
  description: "description 1",
  category: "all"
}

export default function Product(props:ProductType) {
  const pName =
    props.title || "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport";
  const price = props.price || "$599";
  const pImg = props.image || "#";
  const addProduct = () => {};

  return (
    <div className="min-h-[20rem] min-w-[18rem] h-32 w-full flex flex-wrap relative">
        <img src={pImg} alt="product_image" className="h-full w-full bg-white object-contain p-3" />
          <div className=" opacity-0 hover:opacity-100 hover:bg-zinc-800/25 duration-300 absolute inset-0 z-10 flex justify-center items-end">
            <div className="cursor-pointer h-2/6 w-full text-white flex-col p-1">
              <h4 className="h-2/6 truncate">{pName}</h4>
              <div className="flex flex-nowrap justify-between h-4/6">
                <h6>${price}</h6>
                <button
                  onClick={() => {
                    // addProduct({ id: pid });
                  }}
                  className="self-start h-full w-1/4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full p-1 rounded-full"
                    viewBox="0 0 20 20"
                    fill="black"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
    </div>
  );
}
