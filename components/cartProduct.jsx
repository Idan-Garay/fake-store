import Image from "next/image";

export default function CartProduct(props) {
  const pid = props.id || -1;
  const pName = props.title || "Apple Watch t";
  const price = props.price || "  599";
  const pImg = props.image || "/#";
  return (
    <div className="flex flex-col flex-nowrap w-full h-full relative gap-3">
      <div className="h-3/4  w-full p-1 md:p-2 relative ">
        <Image
          alt="gallery"
          className="block object-cover object-center w-full h-full  hover:shadow-2xl"
          src={pImg}
          layout="fill"
        />
      </div>
      <h4 className=" truncate">{pName}</h4>
      <h6>${price}</h6>
    </div>
  );
}
