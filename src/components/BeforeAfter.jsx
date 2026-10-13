export default function BeforeAfter() {
  return (
    <>
      <section id="before-after" className="reveal" style={{ padding: "5% 5%" }}>
          <div className="ba-container container">
              <div className="ba-content">
                  <div className="section-tag">Transformations</div>
                  <h2 style={{ fontSize: "3rem", color: "var(--primary)", marginBottom: "1rem", fontFamily: "'Playfair Display', serif" }}>Real <span className="italic">Results</span></h2>
                  <div className="divider" style={{ margin: "0 0 1.5rem 0", justifyContent: "flex-start" }}>
                      <div className="divider-diamond"></div>
                  </div>
                  <p style={{ color: "var(--text-muted)", lineHeight: "1.8", marginBottom: "2rem", fontSize: "1.1rem" }}>Drag the slider to see the magic of our expert stylists and premium treatments. From subtle enhancements to complete makeovers, we bring your vision to life.</p>
                  <a href="#booking" className="btn-primary">Book Your Transformation</a>
              </div>
              <div className="ba-slider-wrap" id="ba-slider">
                  <img src="before.jpg" alt="Before treatment" className="ba-before-img" />
                  <div className="ba-label before">Before</div>
                  <div className="ba-after-img" id="ba-after-wrap">
                      <img src="after.png" alt="After treatment" />
                      <div className="ba-label after">After</div>
                  </div>
                  <div className="ba-handle" id="ba-handle"></div>
              </div>
          </div>
      </section>
    </>
  );
}
