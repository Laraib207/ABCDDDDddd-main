"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", paymentMethod: "COD" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(stored);
  }, []);

  const updateQty = (product, qty) => {
    const updated = cart.map(item => item.product === product ? { ...item, qty: Math.max(1, qty) } : item);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (product) => {
    const updated = cart.filter(item => item.product !== product);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = async () => {
    setError("");
    if (!form.name || !form.email || !form.phone || !form.address) {
      setError("Please fill all required fields");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/order/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.map(item => ({ product: item.product, qty: item.qty })),
          ...form
        })
      });
      const data = await res.json();
      if (data.ok) {
        localStorage.removeItem("cart");
        setCart([]);
        router.push(`/order/success?order=${data.orderId}`);
      } else {
        setError("Error: " + data.error);
      }
    } catch (err) {
      setError("Failed to place order");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Checkout</h1>
        {cart.length === 0 ? (
          <div className="text-center">
            <p className="text-xl text-gray-600">Your cart is empty</p>
            <a href="/products" className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Shop Now</a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.product} className="flex items-center justify-between border-b pb-4">
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-gray-600">Rs. {item.price} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(item.product, item.qty - 1)} className="bg-gray-200 px-2 py-1 rounded">-</button>
                      <span className="px-3">{item.qty}</span>
                      <button onClick={() => updateQty(item.product, item.qty + 1)} className="bg-gray-200 px-2 py-1 rounded">+</button>
                      <button onClick={() => removeItem(item.product)} className="text-red-500 ml-2">Remove</button>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">Rs. {item.price * item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span>Rs. {total}</span>
                </div>
              </div>
            </div>

            {/* Billing Form */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Billing Information</h2>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone *"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <textarea
                  placeholder="Address *"
                  value={form.address}
                  onChange={e => setForm({ ...form, address: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  required
                />
                <select
                  value={form.paymentMethod}
                  onChange={e => setForm({ ...form, paymentMethod: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="COD">Cash on Delivery</option>
                  <option value="Online">Online Payment (Coming Soon)</option>
                </select>
                <button
                  onClick={placeOrder}
                  disabled={loading}
                  className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                  {loading ? "Placing Order..." : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
