import { useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    badge: "Best Seller",
    badgeClass: "",
    emoji: "💆",
    name: "Luxury Hair Serum",
    desc: "Frizz-free shine with argan oil and keratin complex",
    price: 899,
  },
  {
    id: 2,
    badge: "New",
    badgeClass: "new-badge",
    emoji: "🌿",
    name: "Rose Gold Face Wash",
    desc: "Gentle cleansing with rose extract and vitamin C",
    price: 549,
  },
  {
    id: 3,
    badge: null,
    badgeClass: "",
    emoji: "🌸",
    name: "Hydra Shampoo",
    desc: "Salon-grade hydrating formula for silky smooth hair",
    price: 699,
  },
  {
    id: 4,
    badge: "Premium",
    badgeClass: "",
    emoji: "🛁",
    name: "ZEVORA Spa Kit",
    desc: "Complete home spa ritual: scrub, mask and essential oils",
    price: 1299,
  },
];

export default function Shop() {
  const [popup, setPopup] = useState(null); // { product, qty }
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [addedAnim, setAddedAnim] = useState(null); // product id for button animation

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0);
  const cartTotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);

  function handleAddToCart(product) {
    setPopup({ product, qty: 1 });
    setAddedAnim(product.id);
    setTimeout(() => setAddedAnim(null), 1200);
  }

  function confirmAddToCart() {
    if (!popup) return;
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === popup.product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === popup.product.id ? { ...i, qty: i.qty + popup.qty } : i
        );
      }
      return [...prev, { ...popup.product, qty: popup.qty }];
    });
    setPopup(null);
    setCartOpen(true);
  }

  function removeFromCart(id) {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }

  function updateQty(id, delta) {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i))
        .filter((i) => i.qty > 0)
    );
  }

  return (
    <>
      <section id="shop">
        {/* ── Floating Cart Button ── */}
        {cartCount > 0 && (
          <div id="cart-float" style={{ display: "flex" }} onClick={() => setCartOpen(true)}>
            🛒 <span id="cart-count">{cartCount}</span>
          </div>
        )}

        {/* ── Section Header ── */}
        <div className="section-header reveal">
          <div className="section-tag">Take Home the Luxury</div>
          <h2 className="section-title">
            Our <span className="italic">Products</span> Shop
          </h2>
          <div className="divider">
            <div className="divider-diamond"></div>
          </div>
          <p className="section-subtitle">
            Salon-grade professional products for your home beauty ritual.
          </p>
        </div>

        {/* ── Product Grid ── */}
        <div className="shop-grid reveal">
          {PRODUCTS.map((p) => (
            <div className="product-card" key={p.id}>
              {p.badge && (
                <div className={`product-badge ${p.badgeClass}`}>{p.badge}</div>
              )}
              <div className="product-img">{p.emoji}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="product-price">₹{p.price.toLocaleString()}</div>
              <button
                className={`btn-primary${addedAnim === p.id ? " atc-added" : ""}`}
                onClick={() => handleAddToCart(p)}
              >
                {addedAnim === p.id ? "✓ Added!" : "Add to Cart 🛒"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          ADD-TO-CART POPUP CARD
      ══════════════════════════════════════ */}
      {popup && (
        <div className="atc-overlay" onClick={() => setPopup(null)}>
          <div className="atc-popup" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button className="atc-close" onClick={() => setPopup(null)}>✕</button>

            {/* Top ribbon */}
            <div className="atc-ribbon">🎁 Added to Your Bag</div>

            {/* Product info */}
            <div className="atc-product-row">
              <div className="atc-emoji">{popup.product.emoji}</div>
              <div className="atc-product-info">
                <div className="atc-product-name">{popup.product.name}</div>
                <div className="atc-product-desc">{popup.product.desc}</div>
                <div className="atc-product-price">
                  ₹{(popup.product.price * popup.qty).toLocaleString()}
                </div>
              </div>
            </div>

            {/* Quantity selector */}
            <div className="atc-qty-row">
              <span className="atc-qty-label">Quantity</span>
              <div className="atc-qty-ctrl">
                <button
                  onClick={() => setPopup((p) => ({ ...p, qty: Math.max(1, p.qty - 1) }))}
                >−</button>
                <span>{popup.qty}</span>
                <button
                  onClick={() => setPopup((p) => ({ ...p, qty: p.qty + 1 }))}
                >+</button>
              </div>
            </div>

            {/* Summary strip */}
            <div className="atc-summary">
              <span>Subtotal ({popup.qty} item{popup.qty > 1 ? "s" : ""})</span>
              <span className="atc-summary-price">
                ₹{(popup.product.price * popup.qty).toLocaleString()}
              </span>
            </div>

            {/* Action buttons */}
            <div className="atc-actions">
              <button className="atc-btn-secondary" onClick={() => setPopup(null)}>
                Continue Shopping
              </button>
              <button className="atc-btn-primary" onClick={confirmAddToCart}>
                🛒 Go to Cart
              </button>
            </div>

            {/* Free shipping hint */}
            <div className="atc-free-ship">
              🚚 Free delivery on orders above ₹999
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════
          CART DRAWER (side panel)
      ══════════════════════════════════════ */}
      <div
        id="cart-overlay-bg"
        style={{ display: cartOpen ? "block" : "none" }}
        onClick={() => setCartOpen(false)}
      />
      <div id="cart-drawer" className={cartOpen ? "open" : ""}>
        <div id="cart-header">
          <span>🛍️ Your Cart</span>
          <button onClick={() => setCartOpen(false)}>✕</button>
        </div>
        <div id="cart-items">
          {cartItems.length === 0 ? (
            <div id="cart-empty">🛍️ Your cart is empty</div>
          ) : (
            cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <span className="cart-item-emoji">{item.emoji}</span>
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <div className="cart-item-qty-row">
                    <button className="cart-qty-btn" onClick={() => updateQty(item.id, -1)}>−</button>
                    <span className="cart-item-qty">{item.qty}</span>
                    <button className="cart-qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
                  </div>
                </div>
                <span className="cart-item-price">
                  ₹{(item.price * item.qty).toLocaleString()}
                </span>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>🗑</button>
              </div>
            ))
          )}
        </div>
        <div id="cart-footer">
          <div id="cart-total">Total: ₹{cartTotal.toLocaleString()}</div>
          <button
            className="btn-primary"
            onClick={() => alert("Checkout coming soon!")}
            disabled={cartItems.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
