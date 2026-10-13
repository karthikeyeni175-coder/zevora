export default function Contact() {
  return (
    <>
      <section id="contact">
          <div className="section-header reveal">
              <div className="section-tag">Find Us</div>
              <h2 className="section-title">Visit <span className="italic">ZEVORA</span></h2>
              <div className="divider">
                  <div className="divider-diamond"></div>
              </div>
          </div>
          <div className="contact-wrap">
              <div className="map-container reveal left">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5830743428745!2d77.59414!3d12.93559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU2JzA4LjEiTiA3N8KwMzUnMzguOSJF!5e0!3m2!1sen!2sin!4v1620000000000"
                      allowFullScreen loading="lazy" title="ZEVORA Beauty Salon Location"></iframe>
              </div>
              <div className="contact-info reveal right">
                  <div className="section-tag">Get In Touch</div>
                  <h2>We'd Love to<br /><span className="italic" style={{ color: "var(--primary)" }}>Hear From You</span></h2>
                  <div style={{ marginTop: "2rem" }}>
                      <div className="contact-detail">
                          <div className="contact-detail-icon"><i className="fas fa-location-dot"></i></div>
                          <div className="contact-detail-text">
                              <strong>Address</strong>
                              <span>42, Rose Garden Avenue, Koramangala, Bangalore — 560095</span>
                          </div>
                      </div>
                      <div className="contact-detail">
                          <div className="contact-detail-icon"><i className="fas fa-phone"></i></div>
                          <div className="contact-detail-text">
                              <strong>Phone</strong>
                              <span>+91 98765 43210</span>
                          </div>
                      </div>
                      <div className="contact-detail">
                          <div className="contact-detail-icon"><i className="fas fa-envelope"></i></div>
                          <div className="contact-detail-text">
                              <strong>Email</strong>
                              <span>hello@ZEVORAbeauty.in</span>
                          </div>
                      </div>
                  </div>
                  <div style={{ marginTop: "2rem" }}>
                      <div className="section-tag" style={{ marginBottom: "1rem" }}>Working Hours</div>
                      <div className="hours-row"><span className="day">Monday – Friday</span><span className="time">9:00 AM – 8:00
                              PM</span></div>
                      <div className="hours-row"><span className="day">Saturday</span><span className="time">9:00 AM – 9:00 PM</span>
                      </div>
                      <div className="hours-row"><span className="day">Sunday</span><span className="time">10:00 AM – 6:00 PM</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
