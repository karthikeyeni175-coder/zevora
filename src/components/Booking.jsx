import { useState, useMemo, useEffect } from "react";

export default function Booking() {
  const [isOpen, setIsOpen] = useState(false);

  const dates = useMemo(() => {
    const list = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      list.push({
        value: d.toISOString().split("T")[0],
        label: d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" })
      });
    }
    return list;
  }, []);

  const handleClose = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsOpen(false);
    document.body.style.overflow = "";

    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.classList.remove("active");
      bookingEl.style.display = "none";
    }

    if (window.location.hash === "#booking") {
      try {
        history.replaceState(null, document.title, window.location.pathname + window.location.search);
      } catch {
        window.location.hash = "";
      }
    }
  };

  const handleOpen = (serviceId) => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";

    const bookingEl = document.getElementById("booking");
    if (bookingEl) {
      bookingEl.classList.add("active");
      bookingEl.style.display = "flex";
    }

    const formCont = document.getElementById("book-form-container");
    const msg = document.getElementById("success-msg");
    if (formCont) formCont.style.display = "block";
    if (msg) msg.style.display = "none";

    if (serviceId) {
      setTimeout(() => {
        const select = document.getElementById("book-service");
        if (select) {
          select.value = serviceId;
          select.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }, 50);
    }
  };

  useEffect(() => {
    window.openBookingDialog = handleOpen;

    const checkHash = () => {
      if (window.location.hash === "#booking") {
        handleOpen();
      } else {
        setIsOpen(false);
        document.body.style.overflow = "";
      }
    };

    if (window.location.hash === "#booking") {
      handleOpen();
    }

    window.addEventListener("hashchange", checkHash);

    const resolveServiceAndOpen = (element) => {
      const card = element.closest('.service-card, .trend-card, .pricing-card, .story-step');
      let serviceKey = null;

      if (card) {
        const text = (card.textContent || "").toLowerCase();
        if (text.includes("bridal")) {
          serviceKey = "bridal";
        } else if (text.includes("nail")) {
          serviceKey = "nail";
        } else if (text.includes("facial") || text.includes("diamond") || text.includes("skin") || text.includes("peel")) {
          serviceKey = "facial";
        } else if (text.includes("spa") || text.includes("massage") || text.includes("aura") || text.includes("aromatherapy")) {
          serviceKey = "spa";
        } else if (text.includes("hair") || text.includes("cut") || text.includes("waves") || text.includes("balayage") || text.includes("blowout")) {
          serviceKey = "hair";
        } else if (text.includes("makeup") || text.includes("glam") || text.includes("artistry")) {
          serviceKey = "makeup";
        }
      }

      handleOpen(serviceKey);
    };

    const handleGlobalBookingClick = (e) => {
      // Ignore clicks originating inside the booking modal dialog itself
      if (e.target.closest('#booking')) {
        return;
      }

      // 1. Any anchor targeting #booking
      const anchor = e.target.closest('a[href="#booking"]');
      if (anchor) {
        e.preventDefault();
        resolveServiceAndOpen(anchor);
        return;
      }

      // 2. Any button or link with class indicating booking
      const bookBtn = e.target.closest('.nav-book-btn, .trend-btn, .service-link');
      if (bookBtn) {
        e.preventDefault();
        resolveServiceAndOpen(bookBtn);
        return;
      }

      // 3. Any button or link with text starting with or containing "Book"
      const clickable = e.target.closest('a, button');
      if (clickable && clickable.textContent) {
        const txt = clickable.textContent.trim();
        if (/^Book\b/i.test(txt) || /Book Now/i.test(txt) || /Book Appointment/i.test(txt) || /Book Session/i.test(txt) || /Book Your Transformation/i.test(txt)) {
          e.preventDefault();
          resolveServiceAndOpen(clickable);
        }
      }
    };

    document.addEventListener("click", handleGlobalBookingClick);

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose(e);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("hashchange", checkHash);
      document.removeEventListener("click", handleGlobalBookingClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const name = document.getElementById("book-name")?.value?.trim();
    const phone = document.getElementById("book-phone")?.value?.trim();
    const email = document.getElementById("book-email")?.value?.trim();
    const service = document.getElementById("book-service")?.value;
    const date = document.getElementById("book-date")?.value;
    const time = document.getElementById("book-time")?.value;

    if (!name || !phone || !email || !service || !date || !time) {
      alert("Please fill in all fields to book your appointment.");
      return;
    }

    const formCont = document.getElementById("book-form-container");
    const msg = document.getElementById("success-msg");
    if (formCont) formCont.style.display = "none";
    if (msg) {
      msg.style.display = "block";
      msg.style.animation = "fadeUp 0.6s ease forwards";
    }
  };

  useEffect(() => {
    window.submitBooking = handleSubmit;
  }, []);

  return (
    <>
      <section
        id="booking"
        className={isOpen ? "active" : ""}
        style={{
          display: isOpen ? "flex" : "none",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none"
        }}
        onClick={(e) => {
          if (e.target.id === "booking") {
            handleClose(e);
          }
        }}
      >
          <div className="booking-wrap" onClick={(e) => e.stopPropagation()}>
              <button
                  type="button"
                  className="booking-close-btn"
                  aria-label="Close booking dialog"
                  onClick={handleClose}
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
                                  {dates.map((d) => (
                                      <option key={d.value} value={d.value}>{d.label}</option>
                                  ))}
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
                      <button id="book-form-btn" className="btn-primary" onClick={handleSubmit}>
                          <i className="fas fa-calendar-check"></i> Book My Appointment
                      </button>
                  </div>
                  <div className="success-msg" id="success-msg">
                      <i className="fas fa-check-circle"></i>
                      Your appointment has been booked!<br />
                      <small
                          style={{ fontFamily: "'Poppins',sans-serif", fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: "300", fontStyle: "normal" }}>We'll
                          confirm within 2 hours via WhatsApp.</small>
                      <div style={{ marginTop: "1.2rem" }}>
                          <button
                              type="button"
                              className="btn-outline"
                              onClick={handleClose}
                              style={{ padding: "0.5rem 1.5rem", fontSize: "0.88rem", cursor: "pointer" }}
                          >
                              Close
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
