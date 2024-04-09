import React, { useState } from "react";
import "./MinAndMaxPrice.css";

const MinAndMaxPrice = ({ onFilter }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinPriceChange = (event) => {
    const newMinPrice = event.target.value;
    if (newMinPrice < 0) {
      setMinPrice("");
    } else {
      setMinPrice(newMinPrice);
      onFilter(newMinPrice, maxPrice);
    }
  };

  const handleMaxPriceChange = (event) => {
    const newMaxPrice = event.target.value;
    if (newMaxPrice < 0) {
      setMaxPrice("");
    } else {
      setMaxPrice(newMaxPrice);
      onFilter(minPrice, newMaxPrice);
    }
  };

  return (
    <div className="price-filter-container">
      <div>
        <label htmlFor="minPrice">Min Price:</label>
        <span>$</span>
        <input
          type="number"
          id="minPrice"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
      </div>
      <div>
        <label htmlFor="maxPrice">Max Price:</label>
        <span>$</span>
        <input
          type="number"
          id="maxPrice"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
    </div>
  );
};

export default MinAndMaxPrice;
