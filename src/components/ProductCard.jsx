export default function ProductCard({ product }) {
  const addToCart = async () => {
    // Option A: store locally
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productKey = product.slug || product._id;
    const idx = cart.findIndex(i => i.product === productKey);
    if (idx > -1) cart[idx].qty += 1;
    else cart.push({ product: productKey, qty: 1, price: product.price, title: product.title });
    localStorage.setItem("cart", JSON.stringify(cart));
    // Optionally sync to server:
    // await fetch("/api/cart/add", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ productId: product._id }) });
    alert("Added to cart");
  };

  return (
    <div className="card">
      <img src={product.images?.[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Rs. {product.price}</p>
      <button onClick={addToCart}>Add to cart</button>
      <a href="/cart" className="ml-2 text-blue-500">View Cart</a>
    </div>
  );
}
