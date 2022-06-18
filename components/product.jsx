import Image from "next/image";

export default function Product(props) {
  console.log(props.title);
  const pName =
    props.title || "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport";
  const price = props.price || "$599";
  const pImg = props.image || "#";

  return (
    <div class="flex flex-wrap min-w-full w-full">
      <div class="w-full p-1 md:p-2 relative">
        <Image
          alt="gallery"
          class="block object-cover object-center w-full h-full"
          src={pImg}
          layout="fill"
        />
      </div>
    </div>
  );
}
