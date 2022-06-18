import Image from "next/image";
import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();
  const { pid } = router.query;

  const product = {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: { rate: 3.9, count: 120 },
  };

  // received product detail from router.push

  return (
    <div className="flex flex-row h-screen  p-5 gap-3">
      <div className="h-full w-1/2 relative">
        <Image
          alt="product"
          src={product.image}
          className="block object-cover object-center w-full h-full absolute inset-0 z-0"
          layout="fill"
        />
      </div>

      <div className="w-1/2 h-full border border-indigo-300/25 font-thin capitalize p-10 flex flex-col gap-2">
        <h2 className="text-2xl font-light">{product.title}</h2>{" "}
        <div class="flex items-center">
          <svg
            class="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <p class="ml-2 text-sm font-light">{product.rating.rate}</p>
          <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <a
            href="#"
            class="text-sm lowercase font-light underline hover:no-underline "
          >
            {product.rating.count} reviews
          </a>
        </div>
        <p>
          <span className="text-zinc-400">description: </span>
          {product.description}
        </p>
        <p>
          <span className="text-zinc-400">category: </span>
          {product.category}
        </p>
        <div className="flex flex-row flex-nowrap justify-between items-center">
          <p className="text-lg">
            <span className="text-zinc-400">price: </span>${product.price}
          </p>
          <button className="logo border border-indigo-300/25 px-5 py-2 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
