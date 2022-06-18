import Link from "next/link";

export default function () {
  return (
    <nav>
      <div className="flex justify-between">
        <div>
          <Link href="/">
            <span className="cursor-pointer font-thin text-5xl ml-5 mt-5 border-l border-b p-2">
              Fake Z
            </span>
          </Link>
        </div>
        <div className="py-6 px-5 space-y-6">
          <div className="border-black border-2 flex items-center space-x-4">
            <a href="#">Cart</a>
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Products
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
