import axios from 'axios';

export async function fetchProducts() {
  const API_KEY = import.meta.env.VITE_PRINTFUL_API_KEY;
  const response = await axios.get('https://api.printful.com/store/products', {
    headers: { Authorization: `Bearer ${API_KEY}` }
  });
  return response.data;
}