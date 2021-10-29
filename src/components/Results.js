import Product from "./Product";

const Results = ({ products, loaded }) => {
  return (
    <div className="md:w-full pl-20 flex flex-wrap gap-y-5">
      {loaded
        ? products.map((p, i) => <Product key={`prod-${i}`} product={p} />)
        : "Loading..."}
    </div>
  );
};

export default Results;
