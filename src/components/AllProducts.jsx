// imports here
import ProductDetails from "./ProductDetails";

const AllProducts = ({ products }) => {
  // logic here
  console.log("products", products);
  return (
    <div>
      {products.map((product) => {
        return <ProductDetails key={product.id} product={product} />;
      })}
    </div>
  );
};

export default AllProducts;
