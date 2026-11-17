import { useState, useEffect } from "react";

export default function ServiceModal({ service, onClose }) {
  const [internalService, setInternalService] = useState(service || null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync prop changes
  useEffect(() => {
    if (service) {
      setInternalService(service);
      setIsSubmitted(false);
      const today = new Date().toISOString().split("T")[0];
      setFormData({
        name: "",
        phone: "",
        date: today,
        time: "10:00 AM",
        notes: ""
      });
      document.body.style.overflow = "hidden";
    } else if (!service && !internalService) {
      document.body.style.overflow = "";
    }
  }, [service]);

  // Support legacy window.openServiceModal & window.closeServiceModal
  useEffect(() => {
    window.openServiceModal = (srv) => {
      let resolved = srv;
      if (typeof srv === "string") {
        resolved = {
          id: "hair",
          title: srv,
          img: "hair_styling.png",
          desc: "Luxury salon session customized to your beauty goals."
        };
      } else if (srv && srv.dataset) {
        resolved = {
          id: srv.dataset.key || "hair",
          title: srv.dataset.title || srv.querySelector("h3")?.textContent || "Service",
          img: srv.dataset.img || srv.querySelector("img")?.getAttribute("src") || "hair_styling.png",
          desc: srv.dataset.desc || srv.querySelector("p")?.textContent || ""
        };
      }
      setInternalService(resolved);
      setIsSubmitted(false);
      const today = new Date().toISOString().split("T")[0];
      setFormData({
        name: "",
        phone: "",
        date: today,
        time: "10:00 AM",
        notes: ""
      });
      document.body.style.overflow = "hidden";
    };

    window.closeServiceModal = () => {
      handleClose();
    };
  }, []);

  const handleClose = () => {
    setInternalService(null);
    setIsSubmitted(false);
    document.body.style.overflow = "";
    if (typeof onClose === "function") onClose();
  };

  const handleOpenFullBooking = (e) => {
    if (e) e.preventDefault();
    const serviceKey = currentService?.id || "hair";
    handleClose();
    const select = document.getElementById("book-service");
    if (select && serviceKey) {
      select.value = serviceKey;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    }
    const bookingEl = document.getElementById("booking");
    if (bookingEl) bookingEl.classList.add("active");
    window.location.hash = "#booking";
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.date || !formData.time) {
      alert("Please fill in your name, phone number, date, and preferred time.");
      return;
    }
    setIsSubmitted(true);
  };

  const currentService = service || internalService;
  const isOpen = Boolean(currentService);

  return (
    <>
      <div
        id="service-modal"
        className={`modal-overlay ${isOpen ? "active" : ""}`}
        style={{
          display: isOpen ? "flex" : "none",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none"
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }}
      >
        <div className="modal-box">
          <button
            type="button"
            className="modal-close"
            aria-label="Close modal"
            onClick={handleClose}
          >
            <i className="fas fa-times"></i>
          </button>
          <div className="modal-img-wrap">
            <img
              id="modal-img"
              src={currentService?.img || "hair_styling.png"}
              alt={currentService?.title || "Service preview"}
            />
          </div>
          <div className="modal-info">
            <div className="section-tag" style={{ marginBottom: "0.4rem", fontSize: "0.75rem", display: "inline-block" }}>
              Instant Booking
            </div>
            <h3 id="modal-title" style={{ marginTop: 0 }}>
              {currentService?.title || "Service Name"}
            </h3>
            <p id="modal-desc" style={{ marginBottom: "1.2rem" }}>
              {currentService?.desc || "Experience our luxury beauty treatment crafted exclusively for you."}
            </p>

            <div className="booking-form" style={{ width: "100%", padding: 0, boxShadow: "none", background: "transparent" }}>
              {!isSubmitted ? (
                <div id="modal-book-form-container">
                  <div className="form-group no-float" style={{ marginBottom: "0.9rem" }}>
                    <label className="form-label" style={{ fontWeight: 600, fontSize: "0.8rem", color: "var(--primary)" }}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="modal-book-name"
                      placeholder="Enter your full name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{ width: "100%", padding: "0.75rem 0.9rem", border: "1px solid #e0c8cc", borderRadius: "8px", fontSize: "0.95rem" }}
                    />
                  </div>
                  <div className="form-group no-float" style={{ marginBottom: "0.9rem" }}>
                    <label className="form-label" style={{ fontWeight: 600, fontSize: "0.8rem", color: "var(--primary)" }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="modal-book-phone"
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{ width: "100%", padding: "0.75rem 0.9rem", border: "1px solid #e0c8cc", borderRadius: "8px", fontSize: "0.95rem" }}
                    />
                  </div>
                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.8rem", marginBottom: "1.2rem" }}>
                    <div className="form-group no-float">
                      <label className="form-label" style={{ fontWeight: 600, fontSize: "0.8rem", color: "var(--primary)" }}>
                        Date *
                      </label>
                      <input
                        type="date"
                        id="modal-book-date"
                        min={new Date().toISOString().split("T")[0]}
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        style={{ width: "100%", padding: "0.75rem 0.7rem", border: "1px solid #e0c8cc", borderRadius: "8px", fontSize: "0.9rem" }}
                      />
                    </div>
                    <div className="form-group no-float">
                      <label className="form-label" style={{ fontWeight: 600, fontSize: "0.8rem", color: "var(--primary)" }}>
                        Time *
                      </label>
                      <select
                        id="modal-book-time"
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        style={{ width: "100%", padding: "0.75rem 0.7rem", border: "1px solid #e0c8cc", borderRadius: "8px", fontSize: "0.9rem" }}
                      >
                        <option value="">Select slot</option>
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:00 AM">11:00 AM</option>
                        <option value="12:00 PM">12:00 PM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:00 PM">02:00 PM</option>
                        <option value="03:00 PM">03:00 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:00 PM">05:00 PM</option>
                        <option value="06:00 PM">06:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <button
                    id="modal-book-btn"
                    type="button"
                    className="btn-primary"
                    onClick={handleSubmit}
                    style={{ width: "100%", padding: "0.85rem", cursor: "pointer", fontSize: "1rem" }}
                  >
                    Confirm & Book Session
                  </button>
                  <div style={{ marginTop: "0.8rem", textAlign: "center" }}>
                    <a
                      href="#booking"
                      onClick={handleOpenFullBooking}
                      style={{ fontSize: "0.82rem", color: "var(--primary)", textDecoration: "underline" }}
                    >
                      Or open full booking form with custom requests →
                    </a>
                  </div>
                </div>
              ) : (
                <div
                  className="success-msg"
                  id="modal-success-msg"
                  style={{ display: "block", textAlign: "center", padding: "1.5rem 0" }}
                >
                  <i className="fas fa-check-circle" style={{ fontSize: "2.8rem", color: "#4caf50", marginBottom: "0.8rem" }}></i>
                  <h4 style={{ color: "var(--secondary)", marginBottom: "0.3rem" }}>Appointment Confirmed!</h4>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>
                    We have booked your <strong>{currentService?.title}</strong> session for <strong>{formData.date}</strong> at <strong>{formData.time}</strong>. We will contact you via WhatsApp ({formData.phone}) shortly.
                  </p>
                  <button
                    type="button"
                    className="btn-outline"
                    onClick={handleClose}
                    style={{ marginTop: "1rem", padding: "0.5rem 1.5rem", cursor: "pointer" }}
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
