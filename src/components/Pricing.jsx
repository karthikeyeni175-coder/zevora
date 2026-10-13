export default function Pricing() {
  return (
    <>
      <section id="pricing">
          <div className="section-header reveal">
              <div className="section-tag">Investment</div>
              <h2 className="section-title">Premium <span className="italic">Packages</span></h2>
              <div className="divider">
                  <div className="divider-diamond"></div>
              </div>
              <p className="section-subtitle">Transparent, honest pricing for world-class beauty services.</p>
          </div>
          <div className="pricing-grid">
              <div className="pricing-card reveal" style={{ transitionDelay: "0.1s" }}>
                  <h3>Hair Cut</h3>
                  <div className="pricing-cat">Hair Styling</div>
                  <div className="price-val">₹1,299</div>
                  <div className="price-from">starting from</div>
                  <div className="price-features">
                      <div className="price-feature"><i className="fas fa-check"></i> Signature Cut & Style</div>
                      <div className="price-feature"><i className="fas fa-check"></i> Blow Dry & Finish</div>
                      <div className="price-feature"><i className="fas fa-check"></i> Scalp Massage</div>
                      <div className="price-feature"><i className="fas fa-check"></i> Premium Hair Serum</div>
                  </div>
                  <a href="#booking" className="btn-primary" style={{ display: "block", textAlign: "center" }}>Book Now</a>
              </div>
              <div className="pricing-card reveal popular" style={{ transitionDelay: "0.2s" }}>
                  <div className="popular-badge">Popular</div>
                  <h3>Glow Facial</h3>
                  <div className="pricing-cat">Facial Treatment</div>
                  <div className="price-val">₹2,499</div>
                  <div className="price-from">starting from</div>
                  <div className="price-features">
                      <div className="price-feature"><i className="fas fa-check"></i> Gold Collagen Mask</div>
                      <div className="price-feature"><i className="fas fa-check"></i> Diamond Microdermabrasion</div>
                      <div className="price-feature"><i className="fas fa-check"></i> Lymphatic Drainage</div>
                      <div className="price-feature"><i className="fas fa-check"></i> LED Light Therapy</div>
                  </div>
                  <a href="#booking" className="btn-primary" style={{ display: "block", textAlign: "center" }}>Book Now</a>
              </div>
              <div className="pricing-card reveal" style={{ transitionDelay: "0.3s" }}>
                  <h3>Aura Spa</h3>
                  <div className="pricing-cat">Full Body Spa</div>
                  <div className="price-val">₹3,999</div>
                  <div className="price-from">starting from</div>
                  <div className="price-features">
                      <div className="price-feature"><i className="fas fa-check"></i> Full Body Scrub</div>
                      <div className="price-feature"><i className="fas fa-check"></i> Aromatherapy Massage</div>
                      <div className="price-feature"><i className="fas fa-check"></i> Herbal Wrap</div>
                      <div className="price-feature"><i className="fas fa-check"></i> Champagne & Refreshments</div>
                  </div>
                  <a href="#booking" className="btn-primary" style={{ display: "block", textAlign: "center" }}>Book Now</a>
              </div>
              <div className="pricing-card reveal" style={{ transitionDelay: "0.4s" }}>
                  <h3>Bridal Package</h3>
                  <div className="pricing-cat">Complete Bridal</div>
                  <div className="price-val">₹14,999</div>
                  <div className="price-from">complete package</div>
                  <div className="price-features">
                      <div className="price-feature"><i className="fas fa-check"></i> Bridal Makeup & Hair</div>
                      <div className="price-feature"><i className="fas fa-check"></i> Pre-Bridal Facial</div>
                      <div className="price-feature"><i className="fas fa-check"></i> Mehendi & Nail Art</div>
                      <div className="price-feature"><i className="fas fa-check"></i> Touch-Up Kit Gifted</div>
                  </div>
                  <a href="#booking" className="btn-primary" style={{ display: "block", textAlign: "center" }}>Book Now</a>
              </div>
          </div>
      </section>
    </>
  );
}
