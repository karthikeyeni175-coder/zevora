export default function Booking() {
  return (
    <>
      <section id="booking">
          <div className="booking-wrap">
              <button
                  type="button"
                  className="booking-close-btn"
                  aria-label="Close booking dialog"
                  onClick={() => { window.location.hash = ""; }}
              >
                  &times;
              </button>
              <div className="booking-info left">
                  <div className="section-tag">Reserve Your Seat</div>
                  <h2>Book Your <span className="italic" style={{ color: "var(--primary)" }}>Appointment</span></h2>
                  <div className="divider" style={{ justifyContent: "flex-start", margin: "1rem 0" }}>
                      <div className="divider-diamond"></div>
                  </div>
                  <p>Begin your journey to radiance. Our team is ready to craft a bespoke beauty experience tailored
                      exclusively for you.</p>
                  <div className="booking-feat"><i className="fas fa-clock"></i> Appointments within 24 hours</div>
                  <div className="booking-feat"><i className="fas fa-star"></i> Personalized consultation included</div>
                  <div className="booking-feat"><i className="fas fa-phone"></i> Confirmation via WhatsApp & Email</div>
                  <div className="booking-feat"><i className="fas fa-shield-halved"></i> Free cancellation up to 12 hours</div>
              </div>
              <div className="booking-form right">
                  <div id="book-form-container">
                      <div className="form-row">
                          <div className="form-group">
                              <label className="form-label">Full Name</label>
                              <input type="text" id="book-name" placeholder="Sophia Laurent" autoComplete="name" />
                          </div>
                          <div className="form-group">
                              <label className="form-label">Phone Number</label>
                              <input type="tel" id="book-phone" placeholder="+91 98765 43210" autoComplete="tel" />
                          </div>
                      </div>
                      <div className="form-group">
                          <label className="form-label">Email Address</label>
                          <input type="email" id="book-email" placeholder="your@email.com" autoComplete="email" />
                      </div>
                      <div className="form-group no-float">
                          <label className="form-label">Select Service</label>
                          <select id="book-service">
                              <option value="">Choose a Service</option>
                              <option value="hair">Hair Styling</option>
                              <option value="makeup">Makeup</option>
                              <option value="nail">Nail Art</option>
                              <option value="facial">Facial</option>
                              <option value="spa">Spa</option>
                              <option value="bridal">Bridal Package</option>
                          </select>
                      </div>
                      <div className="form-row">
                          <div className="form-group no-float">
                              <label className="form-label">Preferred Date</label>
                              <select id="book-date">
                                  <option value="">Select Date</option>
                              </select>
                          </div>
                          <div className="form-group no-float">
                              <label className="form-label">Preferred Time</label>
                              <select id="book-time">
                                  <option value="">Select Time</option>
                                  <option>10:00 AM</option>
                                  <option>11:00 AM</option>
                                  <option>12:00 PM</option>
                                  <option>01:00 PM</option>
                                  <option>02:00 PM</option>
                                  <option>03:00 PM</option>
                                  <option>04:00 PM</option>
                                  <option>05:00 PM</option>
                                  <option>06:00 PM</option>
                              </select>
                          </div>
                      </div>
                      <button id="book-form-btn" className="btn-primary" onClick={() => window.submitBooking()}>
                          <i className="fas fa-calendar-check"></i> Book My Appointment
                      </button>
                  </div>
                  <div className="success-msg" id="success-msg">
                      <i className="fas fa-check-circle"></i>
                      Your appointment has been booked!<br />
                      <small
                          style={{ fontFamily: "'Poppins',sans-serif", fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "300", fontStyle: "normal" }}>We'll
                          confirm within 2 hours via WhatsApp.</small>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
