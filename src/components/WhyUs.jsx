export default function WhyUs() {
  return (
    <>
      <section id="why-us">
          <div className="section-header reveal">
              <div className="section-tag">Why ZEVORA</div>
              <h2 className="section-title">The Art of <span className="italic">Excellence</span></h2>
              <div className="divider">
                  <div className="divider-diamond"></div>
              </div>
              <p className="section-subtitle">We are committed to delivering an unparalleled luxury beauty experience backed
                  by expertise, quality, and care.</p>
          </div>
          <div className="why-grid">
              <div className="why-card reveal" style={{ transitionDelay: "0.1s" }}>
                  <div className="why-icon"><i className="fas fa-certificate"></i></div>
                  <h3>Certified Experts</h3>
                  <p>Our team holds international certifications from leading beauty academies across Paris, London, and
                      New York.</p>
              </div>
              <div className="why-card reveal" style={{ transitionDelay: "0.2s" }}>
                  <div className="why-icon"><i className="fas fa-gem"></i></div>
                  <h3>Premium Products</h3>
                  <p>We exclusively use luxury brands including Kérastase, La Mer, and Charlotte Tilbury for an unrivaled
                      experience.</p>
              </div>
              <div className="why-card reveal" style={{ transitionDelay: "0.3s" }}>
                  <div className="why-icon"><i className="fas fa-shield-halved"></i></div>
                  <h3>Hygiene & Safety</h3>
                  <p>Our salon follows rigorous sterilization protocols, ensuring a pristine and safe environment for
                      every client.</p>
              </div>
              <div className="why-card reveal" style={{ transitionDelay: "0.4s" }}>
                  <div className="why-icon"><i className="fas fa-tag"></i></div>
                  <h3>Affordable Luxury</h3>
                  <p>World-class beauty should be accessible. We offer premium packages crafted to honor your investment.
                  </p>
              </div>
          </div>
      </section>
    </>
  );
}
