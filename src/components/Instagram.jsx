export default function Instagram() {
  return (
    <>
      <section id="instagram">
          <div className="section-header reveal">
              <div className="section-tag">Follow Our Journey</div>
              <h2 className="section-title">
                  <a href="https://instagram.com" target="_blank" rel="noopener"
                      style={{ color: "var(--primary)", fontStyle: "italic" }}>ZEVORA BEAUTY</a>
              </h2>
              <div className="divider">
                  <div className="divider-diamond"></div>
              </div>
          </div>
          <div className="instagram-grid reveal">
              <div className="instagram-item">
                  <img src="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&auto=format&fit=crop"
                      alt="Instagram post 1" loading="lazy" />
                  <div className="instagram-overlay"><i className="fab fa-instagram"></i></div>
              </div>
              <div className="instagram-item">
                  <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&auto=format&fit=crop"
                      alt="Instagram post 2" loading="lazy" />
                  <div className="instagram-overlay"><i className="fab fa-instagram"></i></div>
              </div>
              <div className="instagram-item">
                  <img src="https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=400&auto=format&fit=crop"
                      alt="Instagram post 3" loading="lazy" />
                  <div className="instagram-overlay"><i className="fab fa-instagram"></i></div>
              </div>
              <div className="instagram-item">
                  <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&auto=format&fit=crop"
                      alt="Instagram post 4" loading="lazy" />
                  <div className="instagram-overlay"><i className="fab fa-instagram"></i></div>
              </div>
              <div className="instagram-item">
                  <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&auto=format&fit=crop"
                      alt="Instagram post 5" loading="lazy" />
                  <div className="instagram-overlay"><i className="fab fa-instagram"></i></div>
              </div>
              <div className="instagram-item">
                  <img src="image.png" alt="Instagram post 6" loading="lazy" />
                  <div className="instagram-overlay"><i className="fab fa-instagram"></i></div>
              </div>
          </div>
      </section>
    </>
  );
}
