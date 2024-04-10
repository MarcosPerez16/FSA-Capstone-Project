import React from "react";
import CartItemCard from "./CartItemCard";
import CheckoutButton from "./CheckoutButton";
import useNavigation from "../hooks/useNavigation";
import "./Cart.css";

const Cart = ({ cart, products, setCart }) => {
  const { handleReturnToProducts } = useNavigation();

  const getAllItemDetails = (cartItem) =>
    products.find((product) => product.id === cartItem.productId);

  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleDelete = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.productId !== productId)
    );
  };

  return (
    <div className="cart-container">
      <h1 className="cart-header">Shopping Cart</h1>
      <p className="total-items">Total Items:</p>
      {cart.map((item, index) => {
        const productItem = getAllItemDetails(item);
        return (
          <div key={index}>
            <CartItemCard
              cartItem={productItem}
              quantity={item.quantity}
              updateQuantity={updateQuantity}
              onDelete={handleDelete}
            />
          </div>
        );
      })}
      <div className="button-container">
        <button
          className="return-to-products-button"
          onClick={handleReturnToProducts}
        >
          Return To Products
        </button>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default Cart;
