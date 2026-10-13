export default function Navbar() {
  return (
    <>
      <nav id="navbar">
          <a href="#hero" class="nav-logo"><span>✦</span>ZEVORA<span>✦</span></a>
          <ul className="nav-links" id="nav-links">
              <li><a href="#services">Services</a></li>
              <li><a href="#why-us">About</a></li>
              <li><a href="#trending">Gallery</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#booking" className="nav-book-btn">Book Now</a></li>
          </ul>
          <div className="hamburger" id="hamburger" aria-label="Toggle menu">
              <span></span><span></span><span></span>
          </div>
      </nav>
    </>
  );
}
