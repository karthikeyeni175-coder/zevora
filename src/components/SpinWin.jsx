export default function SpinWin() {
  return (
    <>
      <div id="spin-overlay" style={{ display: "none" }}>
          <div id="spin-modal">
              <button id="spin-close" onClick={() => window.closeSpinModal()}>✕</button>
              <div id="spin-header">
                  <div style={{ fontSize: "2rem" }}>🎡</div>
                  <h2>Spin & Win!</h2>
                  <p>New visitor special — Spin for an exclusive offer!</p>
              </div>
              <div id="wheel-container">
                  <canvas id="wheel-canvas" width="260" height="260"></canvas>
                  <div id="wheel-pointer">▼</div>
              </div>
              <button id="spin-btn" onClick={() => window.spinWheel()}>Spin Now!</button>
              <div id="spin-result" style={{ display: "none" }}></div>
          </div>
      </div>
    </>
  );
}
