export default function Birthday() {
  return (
    <>
      <div id="birthday-overlay" style={{ display: "none" }}>
          <div id="birthday-modal">
              <div id="birthday-confetti"></div>
              <div style={{ fontSize: "3rem" }}>🎂</div>
              <h2>Happy Birthday!</h2>
              <p>Wishing you a beautiful day! Here's a special gift from ZEVORA:</p>
              <div id="birthday-coupon">BDAY25 — 25% OFF</div>
              <button onClick={() => { document.getElementById('birthday-overlay').style.display = 'none'; }} className="btn-primary">Claim
                  Gift 🎁</button>
          </div>
      </div>
    </>
  );
}
