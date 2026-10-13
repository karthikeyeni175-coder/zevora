export default function CountdownBar() {
  return (
    <>
      <div id="countdown-bar">
          <i className="fas fa-clock"></i>
          <span>Your appointment starts in:</span>
          <span id="countdown-timer">-- : -- : --</span>
          <button onClick={() => { document.getElementById('countdown-bar').style.display = 'none'; }}>✕</button>
      </div>
    </>
  );
}
