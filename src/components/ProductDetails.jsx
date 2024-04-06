// imports here
import "./card.css";
import { useNavigate } from "react-router";

const ProductDetails = ({ product, isSingle, cart, setCart }) => {
  // logic here

  const navigate = useNavigate();

  const handleViewItemClick = () => {
    navigate(`/${product.id}`);
  };

  const handleAddToCart = () => {
    const productId = product.id;
    //if product exists in cart
    const existingCartItem = cart.findIndex(
      (item) => item.productId === productId
    );
    if (existingCartItem !== -1) {
      //make copy of exsisting cart
      const updatedCart = [...cart];
      //update the quantity
      updatedCart[existingCartItem].quantity += 1;
      setCart(updatedCart);
    } else {
      //if new product is not in cart add with quantity
      const newItem = { productId, quantity: 1 };
      setCart((prevCart) => [...prevCart, newItem]);
    }
  };

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
        <button className="card-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
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
