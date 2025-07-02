'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../Component/utils/Footer';
import Navbar from '../Component/utils/Navbar';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: '', price: '', category: '' });

  const API_BASE = `${process.env.NEXT_PUBLIC_API_URL}/api/products`;


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(API_BASE);
      setProducts(res.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API_BASE, form);
      setForm({ name: '', price: '', category: '' });
      fetchProducts();
    } catch (err) {
      console.error('Error adding product:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      fetchProducts();
    } catch (err) {
      console.error('Error deleting product:', err);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-8 max-w-4xl min-h-screen mx-auto">
        <h1 className="text-2xl font-bold mb-6">Product Manager Dashboard</h1>

        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <input
            type="text"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="number"
            placeholder="Price (₹)"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full border px-4 py-2 rounded"
            required
          />
          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded">
            Add Product
          </button>
        </form>

        <ul className="space-y-4">
          {products.map((product) => (
            <li key={product._id} className="flex justify-between items-center border p-4 rounded">
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm">₹{product.price} - {product.category}</p>
              </div>
              <button
                onClick={() => handleDelete(product._id)}
                className="text-red-600 hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
