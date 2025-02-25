import axios from "axios";

const API_URL = "https://fakestoreapi.com/products";

export const fetchCategories = async () => {
  const res = await axios.get(`${API_URL}/categories`);
  return res.data;
};

export const fetchProducts = async (category) => {
  const url = category ? `${API_URL}/category/${category}` : API_URL;
  const res = await axios.get(url);
  return res.data;
};

export const fetchProductDetails = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};
