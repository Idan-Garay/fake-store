export default function () {
  return (
    <nav>
      <div className="flex items-center justify-between">
        <div>
          <span>Fake Z</span>
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
