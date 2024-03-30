// imports here
import "./card.css";
import { useNavigate } from "react-router";
const ProductDetails = ({ product, isSingle }) => {
  // logic here

  const navigate = useNavigate();

  const handleViewItemClick = () => {
    navigate(`/${product.id}`);
  };

  //   Consider adding a back button for when a user clicks on View item it brings them to the singleproduct
  //page but then there needs to be a button on that singleproducts page that brings them back to product details
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-price">${product.price}</p>
        <p>{product.category}</p>
        <p>
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </p>
        <button className="card-button">Add to Cart</button>
        {!isSingle && (
          <button onClick={handleViewItemClick} className="view-item-button">
            View Item
          </button>
        )}
        {isSingle && <p className="card-description">{product.description}</p>}
      </div>
    </div>
  );
};

export default ProductDetails;
