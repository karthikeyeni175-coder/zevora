export default function Team() {
  return (
    <>
      <section id="team">
          <div className="blob" style={{ width: "400px", height: "400px", background: "var(--primary)", top: "0", right: "-100px" }}></div>
          <div className="section-header reveal">
              <div className="section-tag">The Artisans</div>
              <h2 className="section-title">Meet Our <span className="italic">Expert</span> Team</h2>
              <div className="divider">
                  <div className="divider-diamond"></div>
              </div>
              <p className="section-subtitle">Passionate beauty professionals dedicated to crafting your most radiant self.
              </p>
          </div>
          <div className="team-grid">
              <div className="team-card reveal" style={{ transitionDelay: "0.1s" }}>
                  <div className="team-photo-wrap">
                      <img src="team1.png" alt="Sophia Laurent" />
                  </div>
                  <div className="team-role">Senior Hair Artist</div>
                  <h3>Sophia Laurent</h3>
                  <div className="team-exp">12 years · Paris Trained</div>
                  <div className="team-socials">
                      <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                      <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
                      <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
              <div className="team-card reveal" style={{ transitionDelay: "0.2s" }}>
                  <div className="team-photo-wrap">
                      <img src="team2.png" alt="Isabella Rowe" />
                  </div>
                  <div className="team-role">Lead Makeup Artist</div>
                  <h3>Isabella Rowe</h3>
                  <div className="team-exp">9 years · London Academy</div>
                  <div className="team-socials">
                      <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                      <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
                      <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
              <div className="team-card reveal" style={{ transitionDelay: "0.3s" }}>
                  <div className="team-photo-wrap">
                      <img src="team3.png" alt="Amara Chen" />
                  </div>
                  <div className="team-role">Nail & Spa Specialist</div>
                  <h3>Amara Chen</h3>
                  <div className="team-exp">7 years · Seoul Certified</div>
                  <div className="team-socials">
                      <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                      <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
                      <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
              <div className="team-card reveal" style={{ transitionDelay: "0.4s" }}>
                  <div className="team-photo-wrap">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&crop=face"
                          alt="Natalie Brooks" />
                  </div>
                  <div className="team-role">Bridal Specialist</div>
                  <h3>Natalie Brooks</h3>
                  <div className="team-exp">11 years · Milan Trained</div>
                  <div className="team-socials">
                      <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                      <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
                      <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                  </div>
              </div>
          </div>

        
          <div className="team-modal" id="teamModal">
              <div className="team-modal-content">
                  <button className="team-modal-close" id="teamModalClose"><i className="fas fa-times"></i></button>
                  <div className="team-modal-img">
                      <img id="tm-img" src="" alt="" />
                  </div>
                  <div className="team-modal-info">
                      <div className="team-modal-role" id="tm-role"></div>
                      <div className="team-modal-name" id="tm-name"></div>
                      <div className="team-modal-exp" id="tm-exp"></div>
                      <div className="team-modal-bio">
                          An exceptional artist with a passion for bringing out your unique beauty. Dedicated to providing
                          personalized, high-end services tailored just for you.
                      </div>
                      <div className="team-modal-socials" id="tm-socials">
                        
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
