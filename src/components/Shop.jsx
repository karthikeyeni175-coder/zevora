export default function Shop() {
  return (
    <>
      <section id="shop">
          <div id="cart-drawer">
              <div id="cart-header"><span>🛍️ Your Cart</span><button onClick={() => window.toggleCart()}>✕</button></div>
              <div id="cart-items"></div>
              <div id="cart-footer">
                  <div id="cart-total">Total: ₹0</div><button className="btn-primary"
                      onClick={() => alert('Checkout coming soon!')}>Checkout</button>
              </div>
          </div>
          <div id="cart-overlay-bg" onClick={() => window.toggleCart()}></div>
          <div className="section-header reveal">
              <div className="section-tag">Take Home the Luxury</div>
              <h2 className="section-title">Our <span className="italic">Products</span> Shop</h2>
              <div className="divider">
                  <div className="divider-diamond"></div>
              </div>
              <p className="section-subtitle">Salon-grade professional products for your home beauty ritual.</p>
          </div>
          <div className="shop-grid reveal">
              <div className="product-card">
                  <div className="product-badge">Best Seller</div>
                  <div className="product-img">💆</div>
                  <h3>Luxury Hair Serum</h3>
                  <p>Frizz-free shine with argan oil and keratin complex</p>
                  <div className="product-price">₹899</div><button className="btn-primary"
                      onClick={() => window.addToCart('Luxury Hair Serum',899)}>Add to Cart 🛒</button>
              </div>
              <div className="product-card">
                  <div className="product-badge new-badge">New</div>
                  <div className="product-img">🌿</div>
                  <h3>Rose Gold Face Wash</h3>
                  <p>Gentle cleansing with rose extract and vitamin C</p>
                  <div className="product-price">₹549</div><button className="btn-primary"
                      onClick={() => window.addToCart('Rose Gold Face Wash',549)}>Add to Cart 🛒</button>
              </div>
              <div className="product-card">
                  <div className="product-img">🌸</div>
                  <h3>Hydra Shampoo</h3>
                  <p>Salon-grade hydrating formula for silky smooth hair</p>
                  <div className="product-price">₹699</div><button className="btn-primary"
                      onClick={() => window.addToCart('Hydra Shampoo',699)}>Add to Cart 🛒</button>
              </div>
              <div className="product-card">
                  <div className="product-badge">Premium</div>
                  <div className="product-img">🛁</div>
                  <h3>ZEVORA Spa Kit</h3>
                  <p>Complete home spa ritual: scrub, mask and essential oils</p>
                  <div className="product-price">₹1,299</div><button className="btn-primary"
                      onClick={() => window.addToCart('ZEVORA Spa Kit',1299)}>Add to Cart 🛒</button>
              </div>
          </div>
          <div id="cart-float" onClick={() => window.toggleCart()}>🛒 <span id="cart-count">0</span></div>
      </section>
    </>
  );
}
