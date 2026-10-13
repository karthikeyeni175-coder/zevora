export default function ScrollStory() {
  return (
    <>
      <section id="scroll-story">
          <div className="section-header reveal">
              <div className="section-tag">Our Beauty Journey</div>
              <h2 className="section-title">The <span className="italic">ZEVORA</span> Experience</h2>
              <div className="divider">
                  <div className="divider-diamond"></div>
              </div>
              <p className="section-subtitle">Scroll through our transformative beauty journey from everyday elegance to
                  bridal perfection.</p>
          </div>
          <div className="story-track">
              <div className="story-step reveal left">
                  <div className="story-img-wrap"><img src="hair_styling.png" alt="Hair" /></div>
                  <div className="story-text">
                      <div className="story-num">01</div>
                      <h3>✂️ Hair Styling</h3>
                      <p>From sleek blowouts to glamorous curls, our expert stylists craft your signature look using
                          premium salon-grade products.</p><a href="#booking" className="btn-primary">Book Now</a>
                  </div>
              </div>
              <div className="story-step reveal right">
                  <div className="story-text">
                      <div className="story-num">02</div>
                      <h3>💄 Makeup</h3>
                      <p>Artistry that enhances your natural beauty. Whether editorial or everyday, our makeup team
                          creates magic that lasts all day.</p><a href="#booking" className="btn-primary">Book Now</a>
                  </div>
                  <div className="story-img-wrap"><img src="makeup_service.png" alt="Makeup" /></div>
              </div>
              <div className="story-step reveal left">
                  <div className="story-img-wrap"><img src="facial_skincare.png" alt="Facial" /></div>
                  <div className="story-text">
                      <div className="story-num">03</div>
                      <h3>✨ Facial</h3>
                      <p>Revive your glow with our signature luxury facials. Gold masks, diamond peels, botanical extracts
                          — pure skin indulgence.</p><a href="#booking" className="btn-primary">Book Now</a>
                  </div>
              </div>
              <div className="story-step reveal right">
                  <div className="story-text">
                      <div className="story-num">04</div>
                      <h3>👰 Bridal</h3>
                      <p>Your most important day deserves perfection. Our bridal specialists craft timeless looks that
                          photograph beautifully all day long.</p><a href="#booking" className="btn-primary">Book Now</a>
                  </div>
                  <div className="story-img-wrap"><img src="bridal_makeup_srv.png" alt="Bridal" /></div>
              </div>
          </div>
      </section>
    </>
  );
}
