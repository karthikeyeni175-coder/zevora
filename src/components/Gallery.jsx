export default function Gallery() {
  return (
    <>
      <section id="gallery">
          <div className="section-header reveal">
              <div className="section-tag">Portfolio</div>
              <h2 className="section-title">Our <span className="italic">Beauty</span> Gallery</h2>
              <div className="divider">
                  <div className="divider-diamond"></div>
              </div>
              <p className="section-subtitle">A curated collection of transformations that speak volumes about our artistry.
              </p>
          </div>
          <div className="custom-gallery-container reveal">
              <button className="gallery-btn prev-btn" id="galleryPrev"><i className="fas fa-chevron-left"></i></button>

              <div className="gallery-slider" id="gallerySlider">
                  <div className="gallery-card">
                      <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&auto=format&fit=crop"
                          alt="Bridal Glow" />
                      <div className="card-content">
                          <h3>Bridal Glow</h3>
                          <p>Ethereal beauty</p>
                      </div>
                  </div>
                  <div className="gallery-card">
                      <img src="https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=800&auto=format&fit=crop"
                          alt="Hair Art" />
                      <div className="card-content">
                          <h3>Hair Art</h3>
                          <p>Silk Waves</p>
                      </div>
                  </div>
                  <div className="gallery-card">
                      <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop"
                          alt="Nails" />
                      <div className="card-content">
                          <h3>Nails</h3>
                          <p>Rose Quartz</p>
                      </div>
                  </div>
                  <div className="gallery-card">
                      <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&auto=format&fit=crop"
                          alt="Skincare" />
                      <div className="card-content">
                          <h3>Skincare</h3>
                          <p>Diamond Peel</p>
                      </div>
                  </div>
                  <div className="gallery-card">
                      <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop"
                          alt="Color" />
                      <div className="card-content">
                          <h3>Color</h3>
                          <p>Burgundy Balayage</p>
                      </div>
                  </div>
                  <div className="gallery-card">
                      <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&auto=format&fit=crop"
                          alt="Spa" />
                      <div className="card-content">
                          <h3>Spa</h3>
                          <p>Aroma Therapy</p>
                      </div>
                  </div>
                  <div className="gallery-card">
                      <img src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&auto=format&fit=crop"
                          alt="Makeup" />
                      <div className="card-content">
                          <h3>Makeup</h3>
                          <p>Evening Glam</p>
                      </div>
                  </div>
              </div>

              <button className="gallery-btn next-btn" id="galleryNext"><i className="fas fa-chevron-right"></i></button>
          </div>
      </section>

    
      <div id="lightbox">
          <span className="lightbox-close" id="lightbox-close"><i className="fas fa-xmark"></i></span>
          <img id="lightbox-img" src="" alt="Lightbox image" />
      </div>
    </>
  );
}
