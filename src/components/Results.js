import Product from "./Product";

const Results = ({ products, loaded }) => {
  console.log(loaded);
  return (
    <div className="md:w-full flex flex-wrap gap-y-5 justify-center">
      {loaded
        ? products.map((p, i) => <Product key={`prod-${i}`} product={p} />)
        : "Loading..."}
    </div>
  );
};

export default Results;
