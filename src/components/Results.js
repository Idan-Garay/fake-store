import Product from "./Product";

const Results = ({ products }) => {
  return (
    <div className="md:w-full flex flex-wrap gap-y-5 justify-center">
      {products.length
        ? products.map((p, i) => <Product key={`prod-${i}`} product={p} />)
        : "fetch error"}
    </div>
  );
};

export default Results;
