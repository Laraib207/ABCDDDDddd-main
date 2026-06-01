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
    <div className="min-h-screen py-12" style={{ background: "var(--vb-ivory)" }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <span className="vb-eyebrow">Almost There</span>
          <h1 className="vb-heading mt-4 text-4xl md:text-5xl" style={{ fontFamily: "var(--vb-font-head)" }}>Checkout</h1>
          <div className="vb-divider vb-divider--center mt-5" />
        </div>
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl mb-6" style={{ color: "var(--vb-muted)" }}>Your cart is empty</p>
            <a href="/products" className="vb-btn-solid">Shop Now</a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Summary */}
            <div className="vb-card p-6">
              <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: "var(--vb-font-head)", color: "var(--vb-ink)" }}>Order Summary</h2>
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.product} className="flex items-center justify-between pb-4" style={{ borderBottom: "1px solid var(--vb-line)" }}>
                    <div className="flex-1">
                      <h3 className="font-semibold" style={{ color: "var(--vb-ink)" }}>{item.title}</h3>
                      <p style={{ color: "var(--vb-muted)" }}>Rs. {item.price} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQty(item.product, item.qty - 1)} className="w-8 h-8 rounded-lg font-bold" style={{ background: "var(--vb-ivory-2)", color: "var(--vb-ink)" }}>-</button>
                      <span className="px-3">{item.qty}</span>
                      <button onClick={() => updateQty(item.product, item.qty + 1)} className="w-8 h-8 rounded-lg font-bold" style={{ background: "var(--vb-ivory-2)", color: "var(--vb-ink)" }}>+</button>
                      <button onClick={() => removeItem(item.product)} className="ml-2 text-sm font-medium" style={{ color: "var(--vb-maroon)" }}>Remove</button>
                    </div>
                    <div className="text-right ml-3">
                      <p className="font-bold" style={{ color: "var(--vb-ink)" }}>Rs. {item.price * item.qty}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4" style={{ borderTop: "1px solid var(--vb-line)" }}>
                <div className="flex justify-between text-xl font-bold" style={{ color: "var(--vb-ink)" }}>
                  <span>Total:</span>
                  <span style={{ color: "var(--vb-gold)" }}>Rs. {total}</span>
                </div>
              </div>
            </div>

            {/* Billing Form */}
            <div className="vb-card p-6">
              <h2 className="text-2xl font-bold mb-5" style={{ fontFamily: "var(--vb-font-head)", color: "var(--vb-ink)" }}>Billing Information</h2>
              {error && <p className="mb-4" style={{ color: "var(--vb-maroon)" }}>{error}</p>}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name *"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="vb-cart-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="vb-cart-input"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone *"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  className="vb-cart-input"
                  required
                />
                <textarea
                  placeholder="Address *"
                  value={form.address}
                  onChange={e => setForm({ ...form, address: e.target.value })}
                  className="vb-cart-input"
                  rows="4"
                  required
                />
                <select
                  value={form.paymentMethod}
                  onChange={e => setForm({ ...form, paymentMethod: e.target.value })}
                  className="vb-cart-input"
                >
                  <option value="COD">Cash on Delivery</option>
                  <option value="Online">Online Payment (Coming Soon)</option>
                </select>
                <button
                  onClick={placeOrder}
                  disabled={loading}
                  className="vb-btn-solid w-full justify-center disabled:opacity-50"
                >
                  {loading ? "Placing Order..." : "Place Order"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        .vb-cart-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 12px;
          background: var(--vb-cream);
          border: 1px solid var(--vb-line);
          color: var(--vb-ink);
          transition: border-color .2s ease, box-shadow .2s ease;
        }
        .vb-cart-input::placeholder { color: #9aa7ba; }
        .vb-cart-input:focus {
          outline: none;
          border-color: var(--vb-gold);
          box-shadow: 0 0 0 3px rgba(183,137,45,0.12);
        }
      `}</style>
    </div>
  );
}
