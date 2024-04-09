// imports here
import { useState } from "react";
import "./Payment.css";
const Payment = ({ onSubmit }) => {
  // logic here

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(formData); // pass the form data to the parent component
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <h2>Payment</h2>
      <label htmlFor="firstName">First Name:</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <label htmlFor="cardNumber">Card Number:</label>
      <input
        type="text"
        id="cardNumber"
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleChange}
        required
      />
      <label htmlFor="expiryDate">Expiry Date:</label>
      <input
        type="text"
        id="expiryDate"
        name="expiryDate"
        value={formData.expiryDate}
        onChange={handleChange}
        required
      />
      <label htmlFor="cvv">CVV:</label>
      <input
        type="text"
        id="cvv"
        name="cvv"
        value={formData.cvv}
        onChange={handleChange}
        required
      />
      <button type="submit">Purchase</button>
    </form>
  );
};

export default Payment;
