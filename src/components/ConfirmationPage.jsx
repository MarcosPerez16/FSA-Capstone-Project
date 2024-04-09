import React from "react";
import useNavigation from "../hooks/useNavigation";
import "./ConfirmationPage.css";

const ConfirmationPage = () => {
  const { handleReturnToProducts } = useNavigation();

  return (
    <div className="confirmation-page">
      <h2 className="confirmation-header">Purchase Confirmed!</h2>
      <div>
        <button
          className="continue-shopping-button"
          onClick={handleReturnToProducts}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default ConfirmationPage;
