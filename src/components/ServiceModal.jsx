export default function ServiceModal() {
  return (
    <>
      <div id="service-modal" className="modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) window.closeServiceModal(); }}>
          <div className="modal-box">
              <button className="modal-close" onClick={() => window.closeServiceModal()}><i className="fas fa-times"></i></button>
              <div className="modal-img-wrap">
                  <img id="modal-img" src="" alt="Service Image" />
              </div>
              <div className="modal-info">
                  <h3 id="modal-title"></h3>
                  <p id="modal-desc"></p>
                  
                  <div className="booking-form" style={{ marginTop: "2rem", width: "100%", padding: 0, boxShadow: "none" }}>
                      <div id="modal-book-form-container">
                          <div className="form-group no-float" style={{marginBottom: "1rem"}}>
                              <label className="form-label">Full Name</label>
                              <input type="text" id="modal-book-name" placeholder="Sophia Laurent" autoComplete="name" style={{width: "100%", padding: "0.8rem", border: "1px solid #ddd", borderRadius: "8px"}} />
                          </div>
                          <div className="form-group no-float" style={{marginBottom: "1rem"}}>
                              <label className="form-label">Phone Number</label>
                              <input type="tel" id="modal-book-phone" placeholder="+91 98765 43210" autoComplete="tel" style={{width: "100%", padding: "0.8rem", border: "1px solid #ddd", borderRadius: "8px"}} />
                          </div>
                          <div className="form-row" style={{display: "flex", gap: "1rem", marginBottom: "1rem"}}>
                              <div className="form-group no-float" style={{flex: 1}}>
                                  <label className="form-label">Date</label>
                                  <input type="date" id="modal-book-date" style={{width: "100%", padding: "0.8rem", border: "1px solid #ddd", borderRadius: "8px"}} />
                              </div>
                              <div className="form-group no-float" style={{flex: 1}}>
                                  <label className="form-label">Time</label>
                                  <select id="modal-book-time" style={{width: "100%", padding: "0.8rem", border: "1px solid #ddd", borderRadius: "8px"}}>
                                      <option value="">Select Time</option>
                                      <option>10:00 AM</option>
                                      <option>11:00 AM</option>
                                      <option>12:00 PM</option>
                                      <option>01:00 PM</option>
                                      <option>02:00 PM</option>
                                      <option>03:00 PM</option>
                                      <option>04:00 PM</option>
                                  </select>
                              </div>
                          </div>
                          <button id="modal-book-btn" className="btn-primary" onClick={() => {
                              const n = document.getElementById('modal-book-name').value;
                              const p = document.getElementById('modal-book-phone').value;
                              const d = document.getElementById('modal-book-date').value;
                              const t = document.getElementById('modal-book-time').value;
                              if(!n || !p || !d || !t) { alert('Please fill in all fields'); return; }
                              document.getElementById('modal-book-form-container').style.display = 'none';
                              document.getElementById('modal-success-msg').style.display = 'block';
                          }} style={{width: "100%", padding: "1rem"}}>
                              Book This Service
                          </button>
                      </div>
                      <div className="success-msg" id="modal-success-msg" style={{display: "none", textAlign: "center", padding: "2rem 0"}}>
                          <i className="fas fa-check-circle" style={{fontSize: "3rem", color: "#4caf50", marginBottom: "1rem"}}></i><br/>
                          Your appointment has been booked!
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}
