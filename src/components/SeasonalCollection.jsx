export default function SeasonalCollection() {
  return (
    <>
      <section id="seasonal-collection">
          <div className="section-header reveal">
              <div className="section-tag">Trending Now</div>
              <h2 className="section-title"> Seasonal <span className="italic">Collection</span></h2>
              <div className="divider">
                  <div className="divider-diamond"></div>
              </div>
              <p className="section-subtitle">Explore our specially curated packages for the current season.</p>
          </div>
          <div className="seasonal-cards reveal">
              <div className="seasonal-card season-item">
                  <h3>☀️ Summer Glow</h3>
                  <p>Hydrating facials & UV protection hair spa to keep you fresh all summer.</p>
              </div>
              <div className="seasonal-card season-item">
                  <h3>💍 Wedding Season</h3>
                  <p>Bridal makeup & pre-wedding pampering for your most special day.</p>
              </div>
              <div className="seasonal-card season-item">
                  <h3>🪔 Festive Makeup</h3>
                  <p>Glamorous traditional looks that will make you shine in celebrations.</p>
              </div>
              <div className="seasonal-card season-item">
                  <h3>🌧️ Monsoon Hair Care</h3>
                  <p>Anti-frizz treatments & deep conditioning for flawless monsoon hair.</p>
              </div>
          </div>
      </section>
    </>
  );
}
