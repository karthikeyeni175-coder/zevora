export default function Footer() {
  return (
    <>
      <footer id="footer">
          <div className="footer-top">
              <div className="footer-brand">
                  <span className="nav-logo">ZEVORA <span>✦</span></span>
                  <p>Where artistry meets elegance. A world-class luxury beauty experience crafted exclusively for the
                      discerning woman.</p>
                  <div className="footer-social">
                      <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                      <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                      <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest-p"></i></a>
                      <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                      <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                  </div>
              </div>
              <div className="footer-col">
                  <h4>Quick Links</h4>
                  <div className="footer-links">
                      <a href="#hero">Home</a>
                      <a href="#services">Services</a>
                      <a href="#why-us">About Us</a>
                      <a href="#team">Our Team</a>
                      <a href="#gallery">Gallery</a>
                      <a href="#contact">Contact</a>
                  </div>
              </div>
              <div className="footer-col">
                  <h4>Our Services</h4>
                  <div className="footer-links">
                      <a href="#booking">Hair Styling</a>
                      <a href="#booking">Makeup</a>
                      <a href="#booking">Nail Art</a>
                      <a href="#booking">Facial</a>
                      <a href="#booking">Spa</a>
                      <a href="#booking">Bridal Makeup</a>
                  </div>
              </div>
              <div className="footer-col">
                  <h4>Newsletter</h4>
                  <p className="newsletter-desc">Get exclusive offers, beauty tips, and updates delivered to your inbox.</p>
                  <div className="newsletter-form">
                      <input type="email" placeholder="Your email" aria-label="Newsletter email" />
                      <button type="button">Join ✦</button>
                  </div>
              </div>
          </div>
          <div className="footer-bottom">
              <p>© 2026 ZEVORA Beauty. All rights reserved. Made with ✦ and elegance.</p>
              <div className="footer-bottom-links">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Cookie Policy</a>
              </div>
          </div>
      </footer>
    
      <a href="https://wa.me/919876543210" className="floating-wa" target="_blank" rel="noopener" aria-label="WhatsApp">
          <i className="fab fa-whatsapp"></i>
      </a>

    
      <button id="back-top" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
}
