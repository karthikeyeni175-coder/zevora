export default function Stats() {
  return (
    <>
      <section id="stats">
        
          <svg width="0" height="0">
              <defs>
                  <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#E8CFCF" />
                      <stop offset="100%" stopColor="#B76E79" />
                  </linearGradient>
              </defs>
          </svg>
          <div className="stats-bar reveal">
              <div className="stat-item">
                  <div className="halo-wrap">
                      <svg className="halo" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="46" fill="none" className="halo-bg" />
                          <circle cx="50" cy="50" r="46" fill="none" className="halo-val" />
                      </svg>
                      <div className="stat-content">
                          <div className="stat-num" data-target="12">0</div>
                          <div className="stat-icon">✦</div>
                      </div>
                  </div>
                  <div className="stat-label">Years of Excellence</div>
              </div>

              <div className="stat-item">
                  <div className="halo-wrap">
                      <svg className="halo" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="46" fill="none" className="halo-bg" />
                          <circle cx="50" cy="50" r="46" fill="none" className="halo-val" />
                      </svg>
                      <div className="stat-content">
                          <div className="stat-num" data-target="8500">0</div>
                          <div className="stat-icon">✦</div>
                      </div>
                  </div>
                  <div className="stat-label">Happy Clients</div>
              </div>

              <div className="stat-item">
                  <div className="halo-wrap">
                      <svg className="halo" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="46" fill="none" className="halo-bg" />
                          <circle cx="50" cy="50" r="46" fill="none" className="halo-val" />
                      </svg>
                      <div className="stat-content">
                          <div className="stat-num" data-target="24">0</div>
                          <div className="stat-icon">✦</div>
                      </div>
                  </div>
                  <div className="stat-label">Expert Stylists</div>
              </div>

              <div className="stat-item">
                  <div className="halo-wrap">
                      <svg className="halo" viewBox="0 0 100 100">
                          <circle cx="50" cy="50" r="46" fill="none" className="halo-bg" />
                          <circle cx="50" cy="50" r="46" fill="none" className="halo-val" />
                      </svg>
                      <div className="stat-content">
                          <div className="stat-num" data-target="98">0</div>
                          <div className="stat-icon">✦</div>
                      </div>
                  </div>
                  <div className="stat-label">% Satisfaction</div>
              </div>
          </div>
      </section>
    </>
  );
}
