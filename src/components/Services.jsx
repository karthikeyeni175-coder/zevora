export default function Services() {
  return (
    <>
      <section id="services">
        
          <div className="blob" style={{ width: "400px", height: "400px", background: "var(--primary)", top: "-100px", right: "5%" }}></div>
          <div className="section-header reveal">
              <div className="section-tag">What We Offer</div>
              <h2 className="section-title">Our <span className="italic">Signature</span> Services</h2>
              <div className="divider">
                  <div className="divider-diamond"></div>
              </div>
              <p className="section-subtitle">Curated luxury beauty experiences designed to enhance your natural radiance with
                  premium products and expert hands.</p>
          </div>
          <div className="services-grid">
              <div className="service-card reveal" style={{ transitionDelay: "0.1s", textAlign: "center" }}>
                  <div className="service-image" style={{ cursor: "pointer" }} onClick={(e) => window.openServiceModal(e.currentTarget)}
                      data-img="hair_styling.png" data-title="Hair Styling"
                      data-desc="Transform your look with our signature cuts, blowouts, and styling sessions crafted by expert colorists and stylists.">
                      <img src="hair_styling.png" alt="Hair Styling" />
                  </div>
                  <h3>Hair Styling</h3>
                  <p>Transform your look with our signature cuts, blowouts, and styling sessions crafted by expert
                      colorists and stylists.</p>
                  <a href="#!" className="service-link" onClick={(e) => { e.preventDefault(); window.openServiceModal(e.currentTarget.parentElement.querySelector('.service-image')) }}>Book Session <i className="fas fa-arrow-right"></i></a>
              </div>
              <div className="service-card reveal" style={{ transitionDelay: "0.15s", textAlign: "center" }}>
                  <div className="service-image" style={{ cursor: "pointer" }} onClick={(e) => window.openServiceModal(e.currentTarget)}
                      data-img="makeup_service.png" data-title="Makeup"
                      data-desc="From everyday glam to editorial artistry, our makeup artists use luxury brands to craft your perfect look.">
                      <img src="makeup_service.png" alt="Makeup" />
                  </div>
                  <h3>Makeup</h3>
                  <p>From everyday glam to editorial artistry, our makeup artists use luxury brands to craft your perfect
                      look.</p>
                  <a href="#!" className="service-link" onClick={(e) => { e.preventDefault(); window.openServiceModal(e.currentTarget.parentElement.querySelector('.service-image')) }}>Book Session <i className="fas fa-arrow-right"></i></a>
              </div>
              <div className="service-card reveal" style={{ transitionDelay: "0.2s", textAlign: "center" }}>
                  <div className="service-image" style={{ cursor: "pointer" }} onClick={(e) => window.openServiceModal(e.currentTarget)}
                      data-img="nail_art.png" data-title="Nail Art"
                      data-desc="Exquisite nail designs from classic elegance to avant-garde art, using premium gel and lacquer collections.">
                      <img src="nail_art.png" alt="Nail Art" />
                  </div>
                  <h3>Nail Art</h3>
                  <p>Exquisite nail designs from classic elegance to avant-garde art, using premium gel and lacquer
                      collections.</p>
                  <a href="#!" className="service-link" onClick={(e) => { e.preventDefault(); window.openServiceModal(e.currentTarget.parentElement.querySelector('.service-image')) }}>Book Session <i className="fas fa-arrow-right"></i></a>
              </div>
              <div className="service-card reveal" style={{ transitionDelay: "0.25s", textAlign: "center" }}>
                  <div className="service-image" style={{ cursor: "pointer" }} onClick={(e) => window.openServiceModal(e.currentTarget)}
                      data-img="facial_skincare.png" data-title="Facial"
                      data-desc="Revitalize your complexion with our luxury facials featuring botanical extracts, gold masks, and diamond peels.">
                      <img src="facial_skincare.png" alt="Facial" />
                  </div>
                  <h3>Facial</h3>
                  <p>Revitalize your complexion with our luxury facials featuring botanical extracts, gold masks, and
                      diamond peels.</p>
                  <a href="#!" className="service-link" onClick={(e) => { e.preventDefault(); window.openServiceModal(e.currentTarget.parentElement.querySelector('.service-image')) }}>Book Session <i className="fas fa-arrow-right"></i></a>
              </div>
              <div className="service-card reveal" style={{ transitionDelay: "0.3s", textAlign: "center" }}>
                  <div className="service-image" style={{ cursor: "pointer" }} onClick={(e) => window.openServiceModal(e.currentTarget)}
                      data-img="spa_massage.png" data-title="Spa"
                      data-desc="Surrender to tranquility with our full-body spa rituals, aromatherapy, and therapeutic massage experiences.">
                      <img src="spa_massage.png" alt="Spa" />
                  </div>
                  <h3>Spa</h3>
                  <p>Surrender to tranquility with our full-body spa rituals, aromatherapy, and therapeutic massage
                      experiences.</p>
                  <a href="#!" className="service-link" onClick={(e) => { e.preventDefault(); window.openServiceModal(e.currentTarget.parentElement.querySelector('.service-image')) }}>Book Session <i className="fas fa-arrow-right"></i></a>
              </div>
              <div className="service-card reveal" style={{ transitionDelay: "0.35s", textAlign: "center" }}>
                  <div className="service-image" style={{ cursor: "pointer" }} onClick={(e) => window.openServiceModal(e.currentTarget)}
                      data-img="bridal_makeup_srv.png" data-title="Bridal Makeup"
                      data-desc="Your most important day deserves perfection. Our bridal team creates timeless, ethereal looks that photograph beautifully.">
                      <img src="bridal_makeup_srv.png" alt="Bridal Makeup" />
                  </div>
                  <h3>Bridal Makeup</h3>
                  <p>Your most important day deserves perfection. Our bridal team creates timeless, ethereal looks that
                      photograph beautifully.</p>
                  <a href="#!" className="service-link" onClick={(e) => { e.preventDefault(); window.openServiceModal(e.currentTarget.parentElement.querySelector('.service-image')) }}>Book Session <i className="fas fa-arrow-right"></i></a>
              </div>
          </div>
      </section>
    </>
  );
}
