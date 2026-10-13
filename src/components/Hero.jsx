export default function Hero() {
  return (
    <>
      <section id="hero">
          <div className="hero-bg"></div>
          <div className="hero-overlay"></div>
        
          <div className="deco-circle"></div>
          <div className="deco-circle"></div>
          <div className="hero-content">
              <div className="hero-badge">✦ Luxury Beauty Experience ✦</div>
              <h1 className="hero-title">
                  Reveal Your<br />
                  <span className="highlight">True Beauty</span>
              </h1>
              <p className="hero-subtitle">Where artistry meets elegance. Indulge in world-class beauty treatments crafted for
                  the discerning woman who deserves nothing less than perfection.</p>
              <div className="hero-btns">
                  <a href="#booking" className="btn-primary">Book Appointment</a>
                  <a href="#services" className="btn-outline">Explore Services</a>
              </div>
          </div>
          <div className="scroll-indicator">
              <div className="scroll-line"></div>
              <span>Scroll</span>
          </div>
      </section>
    </>
  );
}
