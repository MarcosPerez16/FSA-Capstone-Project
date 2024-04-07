// imports here
import React from "react";
import useNavigation from "../hooks/useNavigation";

const ConfirmationPage = () => {
  // logic here

  const { handleReturnToProducts } = useNavigation();

  return (
    <div>
      <h2>Congrats Purchase Confirmed!</h2>
      <div>
        {/* this button should redirect to the products page for more shopping */}
        <button onClick={handleReturnToProducts}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
