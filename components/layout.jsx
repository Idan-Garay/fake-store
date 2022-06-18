import Navbar from "./navbar";

export default function ({ children }) {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
