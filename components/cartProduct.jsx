import Image from "next/image";

export default function CartProduct(props) {
  const pid = props.id || -1;
  const pName = props.title || "Apple Watch t";
  const price = props.price || " 599";
  const pImg = props.image || "/helloworld.png";
  const quantity = props.quantity || null;
  const { addProduct, deleteProduct } = global.store;
  return (
    <div className="flex flex-col flex-nowrap h-full relative gap-3 w-44">
      <div className="cursor-pointer h-3/4  w-full p-1 md:p-2 relative bg-white flex flex-col">
        <Image
          alt="gallery"
          className="block object-contain object-center w-full h-full hover:shadow-2xl   absolute inset-0 z-0"
          src={pImg}
          layout="fill"
        />
        <div className=" opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-end">
          <div className="cursor-pointer bg-black h-1/4 w-full text-white flex flex-row justify-evenly ">
            <button
              onClick={() => {
                addProduct({ id: pid });
              }}
              className="hover:bg-zinc-400/25 w-full"
            >
              <strong>+</strong>
            </button>
            <button
              onClick={() => {
                deleteProduct({ id: pid });
              }}
              className="hover:bg-zinc-400/25 w-full"
            >
              <strong>-</strong>
            </button>
          </div>
        </div>
      </div>
      <h4 className=" truncate">{pName}</h4>
      <div className="flex flex-row flex-nowrap justify-between lowercase">
        <h6>$ {price}</h6>
        <p>
          <span className="text-zinc-400">x</span> {quantity}
        </p>
      </div>
    </div>
  );
}
