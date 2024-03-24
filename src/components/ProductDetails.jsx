// imports here
import "./card.css";
const ProductDetails = ({ product }) => {
  // logic here
  return (
    <div className="card">
      <img src={product.image} alt={product.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-price">${product.price}</p>
        <button className="card-button">Add to Card</button>
        <button className="view-item-button">View Item</button>
        {/* <p className="card-description">{product.description}</p> remove this to only be in single product view  */}
      </div>
    </div>
  );
};

export default ProductDetails;
