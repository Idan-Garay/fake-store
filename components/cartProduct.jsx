import Image from "next/image";

export default function CartProduct(props) {
  const pid = props.id || -1;
  const pName = props.title || "Apple Watch t";
  const price = props.price || " 599";
  const pImg = props.image || "/helloworld.png";
  const quantity = props.quantity || null;
  return (
    <div className="flex flex-col flex-nowrap h-full relative gap-3 w-44">
      <div className="h-3/4  w-full p-1 md:p-2 relative justify-center bg-white">
        <Image
          alt="gallery"
          className="block object-contain object-center w-full h-full hover:shadow-2xl"
          src={pImg}
          layout="fill"
        />
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
