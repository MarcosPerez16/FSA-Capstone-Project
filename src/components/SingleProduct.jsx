// imports here
import { useState, useEffect } from "react";
import { getSingleProduct } from "../API";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { useNavigate } from "react-router-dom";

const SingleProduct = ({ cart, setCart }) => {
  // logic here
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const navigate = useNavigate();

  const handleGoBackClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const product = await getSingleProduct(productId);
      setProduct(product);
    };
    fetchSingleProduct();
  }, [productId]);

  if (!product) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <ProductDetails
        product={product}
        isSingle
        cart={cart}
        setCart={setCart}
      />
      <button onClick={handleGoBackClick}>Go Back</button>
    </div>
  );
};

export default SingleProduct;
