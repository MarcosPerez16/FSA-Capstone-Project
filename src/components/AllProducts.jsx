import { useState, useEffect } from "react";
import ProductDetails from "./ProductDetails";
import {
  getAllProducts,
  getAllCategories,
  getProductsByPriceRange,
} from "../API";
import MinAndMaxPrice from "./MinAndMaxPrice";

const AllProducts = ({ cart, setCart, token }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const productsData = await getAllProducts();
        setProducts(productsData);
        const categoriesData = await getAllCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceFilter = async (min, max) => {
    setMinPrice(min);
    setMaxPrice(max);
    try {
      const filteredProducts = await getProductsByPriceRange(min, max);

      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error filtering products by price range:", error);
    }
  };

  // Filter products based on selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Sort filtered products based on selected criteria
  const sortedProducts = sortBy
    ? filteredProducts.slice().sort((a, b) => {
        if (sortBy === "name") {
          return a.title.localeCompare(b.title);
        } else if (sortBy === "price") {
          return a.price - b.price;
        } else if (sortBy === "rating") {
          return (
            b.rating.count - a.rating.count || b.rating.rate - a.rating.rate
          );
        }
      })
    : filteredProducts;

  return (
    <div>
      <div>
        <label htmlFor="sort">Sort by:</label>
        <select id="sort" value={sortBy} onChange={handleSortChange}>
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      <div>
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <MinAndMaxPrice onFilter={handlePriceFilter} />

      {loading ? ( // Conditionally render loading indicator
        <p>Loading...</p>
      ) : (
        <div>
          {sortedProducts.map((product) => (
            <ProductDetails
              key={product.id}
              product={product}
              cart={cart}
              setCart={setCart}
              token={token}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
