import React from "react";

export default function () {

  return (
    <nav>
      <div className="flex justify-between">
        <div>
            <span className="cursor-pointer font-thin text-5xl ml-5 mt-5 border-l border-b p-2">
              Fake Z
            </span>
        </div>
        <div className="py-5 px-5 space-y-6">
          <div className="flex items-center space-x-4 gap-5">
              <div className="flex gap-2 cursor-pointer">
                <a className="hover:text-gray-300">Cart</a>
                <span className="inline-flex items-center justify-center p-2 mr-2 text-xs font-bold leading-none text-black bg-white rounded-full">
                </span>
              </div>
              <a className="text-indigo-600 hover:text-indigo-500">Products</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
