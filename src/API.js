const APIURL = "https://fakestoreapi.com";

//User login function
export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${APIURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const result = await response.json();

    return result.token;
  } catch (error) {
    console.error("Error trying to login", error);
  }
};

//GET all products

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${APIURL}/products`);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error getting all products", error);
  }
};

//GET single product

export const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`${APIURL}/products/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error getting single product", error);
  }
};

// GET all categories
export const getAllCategories = async () => {
  try {
    const response = await fetch(`${APIURL}/products/categories`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error getting all categories", error);
  }
};

//Min/Max Price function
export const getProductsByPriceRange = async (minPrice, maxPrice) => {
  try {
    const response = await fetch(`${APIURL}/products`);
    const products = await response.json();

    // Filter based on min and max price
    const filteredProducts = products.filter((product) => {
      const productPrice = product.price;

      return (
        (!minPrice || productPrice >= minPrice) &&
        (!maxPrice || productPrice <= maxPrice)
      );
    });

    return filteredProducts;
  } catch (error) {
    console.error("Error getting products by price range", error);
  }
};

//GET ALL USERS
export const getAllUsers = async (username) => {
  try {
    const response = await fetch(`${APIURL}/users`);
    const result = await response.json();
    const userData = result.find((user) => user.username === username);
    return userData;
  } catch (error) {
    console.error("Error getting all users", error);
  }
};

//GET USER CART
export const getUserCart = async (id) => {
  try {
    const response = await fetch(`${APIURL}/carts/${id}`);
    const result = await response.json();
    return result.products;
  } catch (error) {
    console.error("Error getting user cart", error);
  }
};
