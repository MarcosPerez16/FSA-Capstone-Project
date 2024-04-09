// imports here
import React from "react";
import CartItemCard from "./CartItemCard";
import CheckoutButton from "./CheckoutButton";
import useNavigation from "../hooks/useNavigation";

const Cart = ({ cart, products, setCart }) => {
  // logic here

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
    <div>
      <h1>Shopping Cart</h1>
      <p>Total Items:</p>
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
      <CheckoutButton />
      <div>
        <button onClick={handleReturnToProducts}>Return To Products</button>
      </div>
    </div>
  );
};

export default Cart;

Cart.jsx;
