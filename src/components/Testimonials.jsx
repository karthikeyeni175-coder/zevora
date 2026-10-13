export default function Testimonials() {
  return (
    <>
      <section id="testimonials">
          <div className="blob" style={{ width: "300px", height: "300px", background: "var(--primary)", bottom: "-50px", left: "5%" }}></div>
          <div className="section-header reveal">
              <div className="section-tag">Client Love</div>
              <h2 className="section-title">What Our <span className="italic">Clients</span> Say</h2>
              <div className="divider">
                  <div className="divider-diamond"></div>
              </div>
          </div>
          <div className="testimonial-track-wrap">
              <div className="testimonial-track" id="testimonialTrack">
                  <div className="testimonial-card">
                      <div className="quote-icon">"</div>
                      <div className="stars">★★★★★</div>
                      <p>ZEVORA transformed my wedding day look into an absolute dream. The team's attention to detail
                          and understanding of what I wanted was impeccable. I felt like a princess.</p>
                      <div className="client-info">
                          <img className="client-img"
                              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&auto=format&fit=crop&crop=face"
                              alt="Priya S." />
                          <div>
                              <div className="client-name">Priya Sharma</div>
                              <div className="client-tag">Bridal Client</div>
                          </div>
                      </div>
                  </div>
                  <div className="testimonial-card">
                      <div className="quote-icon">"</div>
                      <div className="stars">★★★★★</div>
                      <p>The ZEVORA spa experience is unlike anything I've ever had. The ambience, the products, the team
                          — everything is perfection. I leave feeling reborn every single time.</p>
                      <div className="client-info">
                          <img className="client-img"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&crop=face"
                              alt="Aisha M." />
                          <div>
                              <div className="client-name">Aisha Mehta</div>
                              <div className="client-tag">Spa Regular</div>
                          </div>
                      </div>
                  </div>
                  <div className="testimonial-card">
                      <div className="quote-icon">"</div>
                      <div className="stars">★★★★★</div>
                      <p>Sophia gave me the best hair color of my life. The balayage looks so natural and the condition of
                          my hair post-treatment is absolutely incredible. 10 stars if I could!</p>
                      <div className="client-info">
                          <img className="client-img"
                              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&crop=face"
                              alt="Elena V." />
                          <div>
                              <div className="client-name">Elena Vasquez</div>
                              <div className="client-tag">Hair Styling</div>
                          </div>
                      </div>
                  </div>
                  <div className="testimonial-card">
                      <div className="quote-icon">"</div>
                      <div className="stars">★★★★★</div>
                      <p>The gold facial is a must-try! My skin has never looked this radiant. The therapist was thorough,
                          gentle, and incredibly knowledgeable. Absolute luxury.</p>
                      <div className="client-info">
                          <img className="client-img"
                              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&crop=face"
                              alt="Camille D." />
                          <div>
                              <div className="client-name">Camille Durant</div>
                              <div className="client-tag">Facial Client</div>
                          </div>
                      </div>
                  </div>
                  <div className="testimonial-card">
                      <div className="quote-icon">"</div>
                      <div className="stars">★★★★★</div>
                      <p>Amara's nail art is a true masterpiece. Every design is perfectly crafted and lasts for weeks.
                          The ambiance at ZEVORA makes every visit feel like a special occasion.</p>
                      <div className="client-info">
                          <img className="client-img"
                              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&auto=format&fit=crop&crop=face"
                              alt="Zara K." />
                          <div>
                              <div className="client-name">Zara Khan</div>
                              <div className="client-tag">Nail Art</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="testimonial-controls" id="tControls"></div>
      </section>
    </>
  );
}
