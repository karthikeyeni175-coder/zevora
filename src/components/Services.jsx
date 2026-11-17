const servicesList = [
  {
    id: "hair",
    title: "Hair Styling",
    img: "hair_styling.png",
    desc: "Transform your look with our signature cuts, blowouts, and styling sessions crafted by expert colorists and stylists.",
    delay: "0.1s"
  },
  {
    id: "makeup",
    title: "Makeup",
    img: "makeup_service.png",
    desc: "From everyday glam to editorial artistry, our makeup artists use luxury brands to craft your perfect look.",
    delay: "0.15s"
  },
  {
    id: "nail",
    title: "Nail Art",
    img: "nail_art.png",
    desc: "Exquisite nail designs from classic elegance to avant-garde art, using premium gel and lacquer collections.",
    delay: "0.2s"
  },
  {
    id: "facial",
    title: "Facial",
    img: "facial_skincare.png",
    desc: "Revitalize your complexion with our luxury facials featuring botanical extracts, gold masks, and diamond peels.",
    delay: "0.25s"
  },
  {
    id: "spa",
    title: "Spa",
    img: "spa_massage.png",
    desc: "Surrender to tranquility with our full-body spa rituals, aromatherapy, and therapeutic massage experiences.",
    delay: "0.3s"
  },
  {
    id: "bridal",
    title: "Bridal Makeup",
    img: "bridal_makeup_srv.png",
    desc: "Your most important day deserves perfection. Our bridal team creates timeless, ethereal looks that photograph beautifully.",
    delay: "0.35s"
  }
];

export default function Services() {
  const handleOpenBooking = (service) => {
    if (typeof window.openBookingDialog === 'function') {
      window.openBookingDialog(service.id);
    } else {
      const select = document.getElementById('book-service');
      if (select && service.id) {
        select.value = service.id;
        select.dispatchEvent(new Event('change', { bubbles: true }));
      }
      const bookingEl = document.getElementById('booking');
      if (bookingEl) {
        bookingEl.classList.add('active');
        bookingEl.style.display = 'flex';
      }
      window.location.hash = '#booking';
    }
  };

  return (
    <>
      <section id="services">
        <div className="blob" style={{ width: "400px", height: "400px", background: "var(--primary)", top: "-100px", right: "5%" }}></div>
        <div className="section-header reveal">
          <div className="section-tag">What We Offer</div>
          <h2 className="section-title">Our <span className="italic">Signature</span> Services</h2>
          <div className="divider">
            <div className="divider-diamond"></div>
          </div>
          <p className="section-subtitle">
            Curated luxury beauty experiences designed to enhance your natural radiance with premium products and expert hands.
          </p>
        </div>

        <div className="services-grid">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="service-card reveal"
              style={{ transitionDelay: service.delay, textAlign: "center" }}
            >
              <div
                className="service-image"
                style={{ cursor: "pointer" }}
                onClick={() => handleOpenBooking(service)}
                data-img={service.img}
                data-title={service.title}
                data-desc={service.desc}
                data-key={service.id}
              >
                <img src={service.img} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a
                href="#service-modal"
                className="service-link"
                role="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleOpenBooking(service);
                }}
              >
                Book Session <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
