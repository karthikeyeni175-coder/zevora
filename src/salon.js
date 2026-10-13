/*
 * Original site JavaScript, unchanged in behaviour.
 * Runs once after the React tree has mounted.
 */
let started = false;

export default function initSalon() {
  if (started) {
      // Re-attach window functions for HMR
      if (typeof openServiceModal !== 'undefined') window.openServiceModal = openServiceModal;
      if (typeof closeServiceModal !== 'undefined') window.closeServiceModal = closeServiceModal;
      return;
  }
  started = true;

          /* ── LOADING SCREEN ── */
          setTimeout(() => {
              const ls = document.getElementById('loading-screen');
              if (ls) ls.classList.add('hidden');
          }, 2200);

          /* ── CUSTOM CURSOR (Desktop only, completely hidden on mobile/touch) ── */
          const cursorDot = document.getElementById('cursor-dot');
          const cursorRing = document.getElementById('cursor-ring');
          const isMobileOrTouch = () => window.matchMedia('(pointer: coarse), (hover: none)').matches || window.innerWidth <= 1024;

          if (cursorDot && cursorRing) {
              if (isMobileOrTouch()) {
                  cursorDot.style.display = 'none';
                  cursorRing.style.display = 'none';
              } else {
                  let mouseX = -100, mouseY = -100;
                  let ringX = -100, ringY = -100;
                  let isCursorActive = false;

                  document.addEventListener('mousemove', e => {
                      if (isMobileOrTouch()) {
                          cursorDot.style.display = 'none';
                          cursorRing.style.display = 'none';
                          return;
                      }
                      if (!isCursorActive) {
                          isCursorActive = true;
                          cursorDot.style.display = 'block';
                          cursorRing.style.display = 'block';
                      }
                      mouseX = e.clientX; mouseY = e.clientY;
                      cursorDot.style.left = mouseX + 'px';
                      cursorDot.style.top = mouseY + 'px';
                  });

                  function animateRing() {
                      if (!isMobileOrTouch()) {
                          ringX += (mouseX - ringX) * 0.12;
                          ringY += (mouseY - ringY) * 0.12;
                          cursorRing.style.left = ringX + 'px';
                          cursorRing.style.top = ringY + 'px';
                      }
                      requestAnimationFrame(animateRing);
                  }
                  animateRing();
              }

              window.addEventListener('resize', () => {
                  if (isMobileOrTouch()) {
                      cursorDot.style.display = 'none';
                      cursorRing.style.display = 'none';
                  }
              });
          }

          /* ── SCROLL PROGRESS ── */
          const progressBar = document.getElementById('scroll-progress');
          window.addEventListener('scroll', () => {
              const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
              progressBar.style.width = scrolled + '%';
          });

          /* ── NAVBAR SCROLL ── */
          const navbar = document.getElementById('navbar');
          window.addEventListener('scroll', () => {
              navbar.classList.toggle('scrolled', window.scrollY > 60);
              document.getElementById('back-top').classList.toggle('visible', window.scrollY > 400);
          });

          /* ── HAMBURGER ── */
          const hamburger = document.getElementById('hamburger');
          const navLinks = document.getElementById('nav-links');
          hamburger.addEventListener('click', () => {
              navLinks.classList.toggle('open');
              hamburger.classList.toggle('active');
              navbar.classList.toggle('menu-open');
          });
          navLinks.querySelectorAll('a').forEach(link => {
              link.addEventListener('click', () => {
                  navLinks.classList.remove('open');
                  hamburger.classList.remove('active');
                  navbar.classList.remove('menu-open');
              });
          });

          /* ── PARTICLES CANVAS ── */
          (function () {
              const canvas = document.getElementById('particles-canvas');
              const ctx = canvas.getContext('2d');
              canvas.width = window.innerWidth;
              canvas.height = window.innerHeight;

              const particles = [];
              const count = 55;

              class Particle {
                  constructor() { this.reset(); }
                  reset() {
                      this.x = Math.random() * canvas.width;
                      this.y = Math.random() * canvas.height;
                      this.size = Math.random() * 3 + 1;
                      this.speedX = (Math.random() - 0.5) * 0.4;
                      this.speedY = -Math.random() * 0.6 - 0.2;
                      this.opacity = Math.random() * 0.5 + 0.1;
                      this.color = Math.random() > 0.5 ? '#B76E79' : '#E8CFCF';
                      this.wobble = Math.random() * Math.PI * 2;
                  }
                  update() {
                      this.wobble += 0.02;
                      this.x += Math.sin(this.wobble) * 0.4 + this.speedX;
                      this.y += this.speedY;
                      this.opacity -= 0.001;
                      if (this.y < -20 || this.opacity <= 0) this.reset();
                  }
                  draw() {
                      ctx.save();
                      ctx.globalAlpha = this.opacity;
                      ctx.fillStyle = this.color;
                      ctx.shadowColor = this.color;
                      ctx.shadowBlur = 8;
                      ctx.beginPath();
                      // petal-like shape
                      ctx.ellipse(this.x, this.y, this.size, this.size * 2, this.wobble, 0, Math.PI * 2);
                      ctx.fill();
                      ctx.restore();
                  }
              }

              for (let i = 0; i < count; i++) {
                  const p = new Particle();
                  p.y = Math.random() * canvas.height; // spread initial positions
                  particles.push(p);
              }

              function animate() {
                  ctx.clearRect(0, 0, canvas.width, canvas.height);
                  particles.forEach(p => { p.update(); p.draw(); });
                  requestAnimationFrame(animate);
              }
              animate();

              window.addEventListener('resize', () => {
                  canvas.width = window.innerWidth;
                  canvas.height = window.innerHeight;
              });
          })();

          /* ── SCROLL REVEAL ── */
          const revealEls = document.querySelectorAll('.reveal');
          const revealObserver = new IntersectionObserver((entries) => {
              entries.forEach(e => {
                  if (e.isIntersecting) {
                      e.target.classList.add('visible');
                  } else {
                      e.target.classList.remove('visible');
                  }
              });
          }, { threshold: 0.12 });
          revealEls.forEach(el => revealObserver.observe(el));

          /* ── ANIMATED COUNTERS ── */
          function animateCounter(el) {
              const target = +el.dataset.target;
              const duration = 1800;
              let start = null;

              if (el.animationId) cancelAnimationFrame(el.animationId);

              function step(ts) {
                  if (!start) start = ts;
                  const progress = Math.min((ts - start) / duration, 1);
                  const eased = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
                  el.textContent = Math.floor(eased * target).toLocaleString();
                  if (progress < 1) {
                      el.animationId = requestAnimationFrame(step);
                  } else {
                      el.textContent = target.toLocaleString() + (el.dataset.target == 98 ? '' : '+');
                  }
              }
              el.animationId = requestAnimationFrame(step);
          }

          const statsSection = document.getElementById('stats');
          const statsObserver = new IntersectionObserver(entries => {
              if (entries[0].isIntersecting) {
                  document.querySelectorAll('.stat-num').forEach(animateCounter);
              } else {
                  document.querySelectorAll('.stat-num').forEach(el => {
                      if (el.animationId) cancelAnimationFrame(el.animationId);
                      el.textContent = '0';
                  });
              }
          }, { threshold: 0.3 });
          statsObserver.observe(statsSection);

          /* ── BEFORE & AFTER SLIDER ── */
          (function () {
              const slider = document.getElementById('ba-slider');
              const after = document.getElementById('ba-after');
              const handle = document.getElementById('ba-handle');
              if (!slider) return;
              let isDragging = false;

              function setPos(x) {
                  const rect = slider.getBoundingClientRect();
                  let pct = (x - rect.left) / rect.width;
                  pct = Math.max(0.05, Math.min(0.95, pct));
                  after.style.width = (pct * 100) + '%';
                  handle.style.left = (pct * 100) + '%';
              }

              handle.addEventListener('mousedown', () => { isDragging = true; });
              slider.addEventListener('mousedown', e => { isDragging = true; setPos(e.clientX); });
              window.addEventListener('mousemove', e => { if (isDragging) setPos(e.clientX); });
              window.addEventListener('mouseup', () => { isDragging = false; });
              handle.addEventListener('touchstart', () => { isDragging = true; }, { passive: true });
              slider.addEventListener('touchmove', e => { if (isDragging) setPos(e.touches[0].clientX); }, { passive: true });
              window.addEventListener('touchend', () => { isDragging = false; });
          })();

          /* ── TESTIMONIALS SLIDER ── */
          (function () {
              const track = document.getElementById('testimonialTrack');
              const controls = document.getElementById('tControls');
              if (!track || !controls) return;

              const cards = track.querySelectorAll('.testimonial-card');
              const total = cards.length;
              if (total === 0) return;

              let current = 0;
              let perView = 1;
              let slides = total;
              let auto = null;

              function getCardStep() {
                  if (!cards[0]) return 0;
                  const computedGap = parseFloat(window.getComputedStyle(track).gap) || 0;
                  return cards[0].offsetWidth + computedGap;
              }

              function goTo(idx) {
                  current = Math.max(0, Math.min(idx, slides - 1));
                  const step = getCardStep();
                  track.style.transform = `translateX(-${current * step}px)`;
                  const dots = controls.querySelectorAll('.t-dot');
                  dots.forEach((d, i) => d.classList.toggle('active', i === current));
              }

              function startAuto() {
                  stopAuto();
                  if (slides > 1) {
                      auto = setInterval(() => {
                          goTo((current + 1) % slides);
                      }, 4500);
                  }
              }

              function stopAuto() {
                  if (auto) {
                      clearInterval(auto);
                      auto = null;
                  }
              }

              function updateSlider() {
                  const width = window.innerWidth;
                  perView = width > 900 ? 3 : (width > 600 ? 2 : 1);
                  slides = Math.max(1, total - perView + 1);
                  current = Math.min(current, slides - 1);

                  // Rebuild dots
                  controls.innerHTML = '';
                  for (let i = 0; i < slides; i++) {
                      const dot = document.createElement('div');
                      dot.className = 't-dot' + (i === current ? ' active' : '');
                      dot.setAttribute('aria-label', `Testimonial slide ${i + 1}`);
                      dot.addEventListener('click', () => {
                          goTo(i);
                          startAuto();
                      });
                      controls.appendChild(dot);
                  }
                  goTo(current);
              }

              updateSlider();
              startAuto();

              // Hover pause
              track.addEventListener('mouseenter', stopAuto);
              track.addEventListener('mouseleave', startAuto);

              // Mobile Touch Swipe with 1:1 Tracking
              let startX = 0;
              let currentX = 0;
              let isTouching = false;
              let diffX = 0;

              track.addEventListener('touchstart', (e) => {
                  stopAuto();
                  startX = e.touches[0].clientX;
                  currentX = startX;
                  diffX = 0;
                  isTouching = true;
                  track.style.transition = 'none';
              }, { passive: true });

              track.addEventListener('touchmove', (e) => {
                  if (!isTouching) return;
                  currentX = e.touches[0].clientX;
                  diffX = currentX - startX;
                  const step = getCardStep();
                  const baseOffset = -current * step;
                  track.style.transform = `translateX(${baseOffset + diffX}px)`;
              }, { passive: true });

              track.addEventListener('touchend', () => {
                  if (!isTouching) return;
                  isTouching = false;
                  track.style.transition = 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                  if (diffX < -40 && current < slides - 1) {
                      goTo(current + 1);
                  } else if (diffX > 40 && current > 0) {
                      goTo(current - 1);
                  } else {
                      goTo(current);
                  }
                  diffX = 0;
                  startAuto();
              });

              // Resize handler to maintain exact alignment
              let resizeTimer;
              window.addEventListener('resize', () => {
                  clearTimeout(resizeTimer);
                  resizeTimer = setTimeout(updateSlider, 120);
              });
          })();

          /* ── GALLERY LIGHTBOX ── */
          (function () {
              const lightbox = document.getElementById('lightbox');
              const lbImg = document.getElementById('lightbox-img');
              const lbClose = document.getElementById('lightbox-close');
              if (!lightbox) return;

              document.querySelectorAll('.gallery-item img').forEach(img => {
                  img.parentElement.addEventListener('click', () => {
                      lbImg.src = img.src;
                      lightbox.classList.add('open');
                  });
              });
              lbClose.addEventListener('click', () => lightbox.classList.remove('open'));
              lightbox.addEventListener('click', e => { if (e.target === lightbox) lightbox.classList.remove('open'); });
              document.addEventListener('keydown', e => { if (e.key === 'Escape') lightbox.classList.remove('open'); });
          })();

          /* ── BOOKING FORM DATE POPULATION ── */
          (function () {
              const sel = document.getElementById('book-date');
              if (!sel) return;
              const today = new Date();
              for (let i = 1; i <= 30; i++) {
                  const d = new Date(today);
                  d.setDate(today.getDate() + i);
                  const opt = document.createElement('option');
                  opt.value = d.toISOString().split('T')[0];
                  opt.textContent = d.toLocaleDateString('en-IN', { weekday: 'short', day: 'numeric', month: 'short' });
                  sel.appendChild(opt);
              }
          })();

          /* ── BOOKING SUBMIT ── */
          function submitBooking() {
              const name = document.getElementById('book-name').value.trim();
              const phone = document.getElementById('book-phone').value.trim();
              const email = document.getElementById('book-email').value.trim();
              const service = document.getElementById('book-service').value;
              const date = document.getElementById('book-date').value;
              const time = document.getElementById('book-time').value;

              if (!name || !phone || !email || !service || !date || !time) {
                  alert('Please fill in all fields to book your appointment.');
                  return;
              }
              document.getElementById('book-form-container').style.display = 'none';
              const msg = document.getElementById('success-msg');
              msg.style.display = 'block';
              msg.style.animation = 'fadeUp 0.6s ease forwards';
          }

          /* ── MOUSE PARALLAX on HERO ── */
          document.addEventListener('mousemove', e => {
              const xPct = (e.clientX / window.innerWidth - 0.5) * 15;
              const yPct = (e.clientY / window.innerHeight - 0.5) * 10;
              const heroBg = document.querySelector('.hero-bg');
              if (heroBg) {
                  heroBg.style.transform = `scale(1.08) translate(${xPct}px, ${yPct}px)`;
              }
          });

          /* ── SERVICE MODAL ── */
          function openServiceModal(el) {
              const img = el.dataset.img;
              const title = el.dataset.title;
              const desc = el.dataset.desc;

              document.getElementById('modal-img').src = img;
              document.getElementById('modal-title').textContent = title;
              document.getElementById('modal-desc').textContent = desc;
              document.getElementById('service-modal').classList.add('active');
              document.body.style.overflow = 'hidden';
          }
          function closeServiceModal() {
              document.getElementById('service-modal').classList.remove('active');
              document.body.style.overflow = '';
              const formCont = document.getElementById('modal-book-form-container');
              const succMsg = document.getElementById('modal-success-msg');
              if (formCont) formCont.style.display = 'block';
              if (succMsg) succMsg.style.display = 'none';
              
              const nameInput = document.getElementById('modal-book-name');
              const phoneInput = document.getElementById('modal-book-phone');
              const dateInput = document.getElementById('modal-book-date');
              const timeInput = document.getElementById('modal-book-time');
              if(nameInput) nameInput.value = '';
              if(phoneInput) phoneInput.value = '';
              if(dateInput) dateInput.value = '';
              if(timeInput) timeInput.value = '';
          }
          window.openServiceModal = openServiceModal;
          window.closeServiceModal = closeServiceModal;

          /* ═══════════════════════════════════════
             SALON AVAILABILITY
          ═══════════════════════════════════════ */
          (function () {
              const h = new Date().getHours();
              const dot = document.getElementById('salon-dot');
              const txt = document.getElementById('salon-status-text');
              if (h >= 9 && h < 18) {
                  dot.className = 'open'; txt.textContent = 'Open Now · 9AM–8PM';
              } else if (h >= 18 && h < 20) {
                  dot.className = 'busy'; txt.textContent = 'Busy · Closing Soon';
              } else {
                  dot.className = 'closed'; txt.textContent = 'Closed · Opens 9AM';
              }
          })();

          /* ═══════════════════════════════════════
             SPIN & WIN WHEEL
          ═══════════════════════════════════════ */
          (function () {
              // if (localStorage.getItem('lum_spin_done')) return;
              const prizes = [
                  { label: '10% OFF', color: '#B76E79', coupon: 'SPIN10' },
                  { label: 'Free Facial', color: '#E8CFCF', coupon: 'FACIAL0' },
                  { label: '5% OFF', color: '#d4909a', coupon: 'SPIN5' },
                  { label: 'Free Hair Wash', color: '#c98a94', coupon: 'WASH0' },
                  { label: 'Birthday Coupon', color: '#f0c4cc', coupon: 'BDAY15' },
                  { label: '15% OFF', color: '#9a5560', coupon: 'SPIN15' }
              ];
              const canvas = document.getElementById('wheel-canvas');
              const ctx = canvas.getContext('2d');
              const cx = 130, cy = 130, r = 120;
              const arc = (2 * Math.PI) / prizes.length;
              let currentAngle = 0, spinning = false;

              function drawWheel(rot) {
                  ctx.clearRect(0, 0, 260, 260);
                  prizes.forEach((p, i) => {
                      const start = rot + i * arc;
                      ctx.beginPath();
                      ctx.moveTo(cx, cy);
                      ctx.arc(cx, cy, r, start, start + arc);
                      ctx.fillStyle = p.color;
                      ctx.fill();
                      ctx.strokeStyle = '#fff';
                      ctx.lineWidth = 2;
                      ctx.stroke();
                      ctx.save();
                      ctx.translate(cx, cy);
                      ctx.rotate(start + arc / 2);
                      ctx.textAlign = 'right';
                      ctx.fillStyle = '#fff';
                      ctx.font = 'bold 11px Poppins,sans-serif';
                      ctx.fillText(p.label, r - 10, 4);
                      ctx.restore();
                  });
                  // Center circle
                  ctx.beginPath();
                  ctx.arc(cx, cy, 22, 0, 2 * Math.PI);
                  ctx.fillStyle = '#fff';
                  ctx.fill();
                  ctx.fillStyle = '#B76E79';
                  ctx.font = 'bold 10px Poppins,sans-serif';
                  ctx.textAlign = 'center';
                  ctx.fillText('SPIN', cx, cy + 4);
              }

              drawWheel(0);
              setTimeout(() => { document.getElementById('spin-overlay').style.display = 'flex'; }, 500);

              window.spinWheel = function () {
                  if (spinning) return;
                  spinning = true;
                  document.getElementById('spin-btn').disabled = true;
                  const spins = 5 + Math.random() * 5;
                  const extra = Math.random() * 2 * Math.PI;
                  const total = spins * 2 * Math.PI + extra;
                  const dur = 4000;
                  let start = null;
                  function animate(ts) {
                      if (!start) start = ts;
                      const elapsed = ts - start;
                      const prog = Math.min(elapsed / dur, 1);
                      const ease = 1 - Math.pow(1 - prog, 4);
                      currentAngle = ease * total;
                      drawWheel(currentAngle);
                      if (prog < 1) { requestAnimationFrame(animate); }
                      else {
                          spinning = false;
                          const norm = ((2 * Math.PI) - (currentAngle % (2 * Math.PI))) % (2 * Math.PI);
                          const idx = Math.floor(norm / arc) % prizes.length;
                          const won = prizes[idx];
                          const res = document.getElementById('spin-result');
                          res.innerHTML = `<h3>🎉 You Won!</h3><div class="coupon">${won.coupon}</div><p style="font-size:0.85rem;color:#666;margin-top:0.3rem;">${won.label} — Use at booking!</p>`;
                          res.style.display = 'block';
                          localStorage.setItem('lum_spin_done', '1');
                          localStorage.setItem('lum_coupon', won.coupon);
                      }
                  }
                  requestAnimationFrame(animate);
              };

              window.closeSpinModal = function () {
                  document.getElementById('spin-overlay').style.display = 'none';
                  localStorage.setItem('lum_spin_done', '1');
              };
          })();

          /* ═══════════════════════════════════════
             BIRTHDAY SURPRISE
          ═══════════════════════════════════════ */
          (function () {
              const bday = localStorage.getItem('lum_birthday');
              if (!bday) {
                  const d = prompt('🎂 Enter your birthday (MM-DD) to get a surprise gift:');
                  if (d) localStorage.setItem('lum_birthday', d);
                  return;
              }
              const today = new Date();
              const mm = String(today.getMonth() + 1).padStart(2, '0');
              const dd = String(today.getDate()).padStart(2, '0');
              if (bday === `${mm}-${dd}`) {
                  document.getElementById('birthday-overlay').style.display = 'flex';
                  // Confetti
                  const modal = document.getElementById('birthday-modal');
                  const colors = ['#B76E79', '#E8CFCF', '#FFD700', '#FF6B9D', '#c8960c'];
                  for (let i = 0; i < 40; i++) {
                      const el = document.createElement('div');
                      el.className = 'confetti-piece';
                      el.style.left = Math.random() * 100 + '%';
                      el.style.top = '-10px';
                      el.style.background = colors[Math.floor(Math.random() * colors.length)];
                      el.style.animationDuration = (1.5 + Math.random() * 2) + 's';
                      el.style.animationDelay = (Math.random() * 1.5) + 's';
                      el.style.transform = `rotate(${Math.random() * 360}deg)`;
                      modal.appendChild(el);
                  }
              }
          })();

          /* ═══════════════════════════════════════
             PRODUCTS CART
          ═══════════════════════════════════════ */
          let cartItems = [];
          function toggleCart() {
              const drawer = document.getElementById('cart-drawer');
              const bg = document.getElementById('cart-overlay-bg');
              drawer.classList.toggle('open');
              bg.style.display = drawer.classList.contains('open') ? 'block' : 'none';
          }
          function addToCart(name, price) {
              cartItems.push({ name, price });
              renderCart();
              document.getElementById('cart-float').style.display = 'flex';
              toggleCart();
          }
          function removeFromCart(i) {
              cartItems.splice(i, 1);
              renderCart();
          }
          function renderCart() {
              const container = document.getElementById('cart-items');
              const countEl = document.getElementById('cart-count');
              const totalEl = document.getElementById('cart-total');
              countEl.textContent = cartItems.length;
              if (cartItems.length === 0) {
                  container.innerHTML = '<div id="cart-empty">🛍️ Your cart is empty</div>';
                  totalEl.textContent = 'Total: ₹0';
                  return;
              }
              let total = 0;
              container.innerHTML = cartItems.map((it, i) => {
                  total += it.price;
                  return `<div class="cart-item"><span class="cart-item-name">${it.name}</span><span class="cart-item-price">₹${it.price.toLocaleString()}</span><button class="cart-item-remove" onclick="removeFromCart(${i})">🗑</button></div>`;
              }).join('');
              totalEl.textContent = `Total: ₹${total.toLocaleString()}`;
          }
          // Init empty cart
          renderCart();

          /* ═══════════════════════════════════════
             BEAUTY ROUTINE QUIZ
          ═══════════════════════════════════════ */
          const quizAnswers = {};
          const routineDB = {
              morning: {
                  dry: ['💧 Hydrating Cream Cleanser', '🌸 Hyaluronic Acid Serum', '🧴 Rich Moisturizer SPF 30', '✨ Facial Oil for glow'],
                  oily: ['🫧 Gel-based Cleanser', '🍋 Niacinamide Serum', '💧 Oil-free Moisturizer SPF 50', '🌿 Green Tea Toner'],
                  combo: ['🌊 Micellar Water Cleanser', '✨ Vitamin C Serum', '🧴 Lightweight Moisturizer', '☀️ Broad Spectrum SPF'],
                  sensitive: ['🌷 Gentle Milk Cleanser', '🍯 Centella Serum', '💕 Fragrance-free Moisturizer', '🌸 Mineral Sunscreen'],
              },
              night: {
                  dry: ['🌙 Oil Cleanser', '🧖 Retinol Serum', '🍯 Overnight Mask', '💆 Face Massage with Rosehip Oil'],
                  oily: ['🌊 Salicylic Acid Cleanser', '🌙 AHA/BHA Toner', '💧 Lightweight Night Gel', '🌿 Clay Spot Treatment'],
                  combo: ['🧼 Balanced Foam Cleanser', '✨ Peptide Serum', '🌙 Night Cream on dry zones', '🍋 Glycolic Toner on T-zone'],
                  sensitive: ['🌷 Gentle Cleansing Balm', '🌙 Ceramide Serum', '💕 Barrier Repair Cream', '🛁 Soothing Sheet Mask x2/week'],
              }
          };
          const hairTips = {
              straight: { m: '💇 Lightweight leave-in conditioner', n: '🌙 Silk pillowcase for shine' },
              wavy: { m: '🌊 Curl-enhancing mousse', n: '🌙 Diffuse & air dry overnight' },
              curly: { m: '🌀 Rich curl cream + detangle', n: '🌙 Pineapple your hair before bed' },
              coily: { m: '🍥 Heavy oil + protective style', n: '🌙 Satin bonnet & moisturize coils' },
          };

          function selectQuiz(step, val, el) {
              quizAnswers[step] = val;
              document.querySelectorAll(`#qstep-${step} .quiz-options button`).forEach(b => b.classList.remove('selected'));
              if (el) el.classList.add('selected');
              setTimeout(() => {
                  document.getElementById(`qstep-${step}`).classList.remove('active');
                  const progress = (step / 3) * 100;
                  document.getElementById('quiz-bar').style.width = progress + '%';
                  if (step < 3) {
                      document.getElementById(`qstep-${step + 1}`).classList.add('active');
                  } else {
                      showRoutine();
                  }
              }, 400);
          }

          function showRoutine() {
              document.getElementById('quiz-bar').style.width = '100%';
              const skin = quizAnswers[3] || 'combo';
              const hair = quizAnswers[2] || 'straight';
              const morning = [...routineDB.morning[skin], hairTips[hair].m];
              const night = [...routineDB.night[skin], hairTips[hair].n];
              document.getElementById('morning-routine').innerHTML = morning.map(s => `<li>${s}</li>`).join('');
              document.getElementById('night-routine').innerHTML = night.map(s => `<li>${s}</li>`).join('');
              document.getElementById('routine-result').style.display = 'block';
              document.querySelector('.quiz-steps').style.display = 'none';
          }

          function resetQuiz() {
              Object.keys(quizAnswers).forEach(k => delete quizAnswers[k]);
              document.getElementById('routine-result').style.display = 'none';
              document.querySelector('.quiz-steps').style.display = 'block';
              document.querySelectorAll('.quiz-step').forEach(s => s.classList.remove('active'));
              document.getElementById('qstep-1').classList.add('active');
              document.getElementById('quiz-bar').style.width = '0%';
          }

          /* ═══════════════════════════════════════
             APPOINTMENT COUNTDOWN
          ═══════════════════════════════════════ */
          (function () {
              const apptDate = localStorage.getItem('lum_appointment');
              if (!apptDate) return;
              const target = new Date(apptDate);
              const bar = document.getElementById('countdown-bar');
              const timer = document.getElementById('countdown-timer');
              if (isNaN(target.getTime()) || target < new Date()) return;
              bar.style.display = 'flex';
              setInterval(() => {
                  const now = new Date();
                  const diff = target - now;
                  if (diff <= 0) { bar.style.display = 'none'; return; }
                  const days = Math.floor(diff / 86400000);
                  const hrs = Math.floor((diff % 86400000) / 3600000);
                  const mins = Math.floor((diff % 3600000) / 60000);
                  const secs = Math.floor((diff % 60000) / 1000);
                  timer.textContent = days > 0 ? `${days}d ${hrs}h ${mins}m` : `${String(hrs).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
              }, 1000);
          })();

          // Save appointment date on booking
          const origSubmit = submitBooking;
          window.submitBooking = function () {
              const date = document.getElementById('book-date')?.value;
              const time = document.getElementById('book-time')?.value;
              if (date && time) {
                  const t = time.replace(' AM', '').replace(' PM', '');
                  const [h, m] = t.split(':');
                  const isPM = time.includes('PM') && h !== '12';
                  const apptDate = new Date(date);
                  apptDate.setHours(isPM ? parseInt(h) + 12 : parseInt(h), parseInt(m) || 0);
                  localStorage.setItem('lum_appointment', apptDate.toISOString());
              }
              if (origSubmit) origSubmit();
          };

          /* ═══════════════════════════════════════
             MIRROR ANIMATION (Enhanced Hero)
          ═══════════════════════════════════════ */
          const heroSection = document.getElementById('hero');
          if (heroSection) {
              heroSection.addEventListener('mousemove', (e) => {
                  const rect = heroSection.getBoundingClientRect();
                  const xPct = ((e.clientX - rect.left) / rect.width) * 100;
                  const yPct = ((e.clientY - rect.top) / rect.height) * 100;
                  const overlay = heroSection.querySelector('.hero-overlay');
                  if (overlay) {
                      overlay.style.background = `radial-gradient(circle at ${xPct}% ${yPct}%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.35) 60%)`;
                  }
              });
              heroSection.addEventListener('mouseleave', () => {
                  const overlay = heroSection.querySelector('.hero-overlay');
                  if (overlay) overlay.style.background = '';
              });
          }

          /* ═══════════════════════════════════════
             CUSTOM 3D STACK FLIP GALLERY
          ═══════════════════════════════════════ */
          const galleryCards = document.querySelectorAll('.gallery-card');
          const nextBtn = document.getElementById('galleryNext');
          const prevBtn = document.getElementById('galleryPrev');
          let currentGalleryIndex = 0;
          let autoplayInterval;

          function update3DGallery() {
              galleryCards.forEach((card, index) => {
                  card.classList.remove('center');

                  if (index === currentGalleryIndex) {
                      card.classList.add('center');
                      card.style.left = '50%';
                      card.style.zIndex = 100;
                      card.style.transform = `translate(-50%, 0) rotateY(360deg) scale(1)`;
                      card.style.opacity = 1;
                  } else if (index > currentGalleryIndex) {
                      // Left Stack (Upcoming bundle)
                      const offset = index - currentGalleryIndex;
                      const isSmall = window.innerWidth < 480;
                      const isMobile = window.innerWidth < 768;
                      const spreadX = isSmall ? 0 : (isMobile ? 6 : 15);
                      const spreadY = isSmall ? 4 : (isMobile ? 3 : 8);

                      card.style.left = isSmall ? '50%' : (isMobile ? '22%' : '15%');
                      card.style.zIndex = 50 - offset;
                      card.style.transform = isSmall
                          ? `translate(-50%, ${offset * spreadY}px) scale(${Math.max(0.7, 1 - offset * 0.06)})`
                          : `translate(calc(-50% - ${offset * spreadX}px), ${offset * spreadY}px) rotateY(0deg) scale(${1 - offset * 0.05}) rotate(-${offset * 2}deg)`;
                      card.style.opacity = offset > 3 ? 0 : (1 - offset * 0.15);
                  } else {
                      // Right Stack (Passed bundle)
                      const offset = currentGalleryIndex - index;
                      const isSmall = window.innerWidth < 480;
                      const isMobile = window.innerWidth < 768;
                      const spreadX = isSmall ? 0 : (isMobile ? 6 : 15);
                      const spreadY = isSmall ? 4 : (isMobile ? 3 : 8);

                      card.style.left = isSmall ? '50%' : (isMobile ? '78%' : '85%');
                      card.style.zIndex = 50 - offset;
                      card.style.transform = isSmall
                          ? `translate(-50%, ${offset * spreadY}px) scale(${Math.max(0.7, 1 - offset * 0.06)})`
                          : `translate(calc(-50% + ${offset * spreadX}px), ${offset * spreadY}px) rotateY(720deg) scale(${1 - offset * 0.05}) rotate(${offset * 2}deg)`;
                      card.style.opacity = offset > 3 ? 0 : (1 - offset * 0.15);
                  }
              });
          }

          function galleryNext() {
              if (currentGalleryIndex < galleryCards.length - 1) {
                  currentGalleryIndex++;
              } else {
                  currentGalleryIndex = 0; // Loop back to start
              }
              update3DGallery();
          }

          function galleryPrev() {
              if (currentGalleryIndex > 0) {
                  currentGalleryIndex--;
              } else {
                  currentGalleryIndex = galleryCards.length - 1; // Loop end
              }
              update3DGallery();
          }

          if (nextBtn && prevBtn) {
              nextBtn.addEventListener('click', () => {
                  galleryNext();
                  resetAutoplay();
              });
              prevBtn.addEventListener('click', () => {
                  galleryPrev();
                  resetAutoplay();
              });
          }

          galleryCards.forEach((card, i) => {
              card.addEventListener('click', () => {
                  currentGalleryIndex = i;
                  update3DGallery();
                  resetAutoplay();
              });
          });

          function startAutoplay() {
              autoplayInterval = setInterval(galleryNext, 4000); // Auto flip every 4s
          }
          function resetAutoplay() {
              clearInterval(autoplayInterval);
              startAutoplay();
          }

          // Initialize if gallery exists
          if (galleryCards.length > 0) {
              update3DGallery();
              startAutoplay();
              window.addEventListener('resize', update3DGallery);
          }

          /* ============== TEAM MODAL ============== */
          const teamCards = document.querySelectorAll('.team-card');
          const teamModal = document.getElementById('teamModal');
          const tmClose = document.getElementById('teamModalClose');
          const tmImg = document.getElementById('tm-img');
          const tmRole = document.getElementById('tm-role');
          const tmName = document.getElementById('tm-name');
          const tmExp = document.getElementById('tm-exp');
          const tmSocials = document.getElementById('tm-socials');

          if (teamCards.length && teamModal) {
              teamCards.forEach(card => {
                  card.addEventListener('click', () => {
                      const img = card.querySelector('.team-photo-wrap img').src;
                      const name = card.querySelector('h3').innerText;
                      const role = card.querySelector('.team-role').innerText;
                      const exp = card.querySelector('.team-exp').innerText;
                      const socialsHTML = card.querySelector('.team-socials').innerHTML;

                      tmImg.src = img;
                      tmName.innerText = name;
                      tmRole.innerText = role;
                      tmExp.innerText = exp;
                      tmSocials.innerHTML = socialsHTML;

                      teamModal.classList.add('active');
                      document.body.style.overflow = 'hidden'; // prevent scrolling
                  });
              });

              tmClose.addEventListener('click', () => {
                  teamModal.classList.remove('active');
                  document.body.style.overflow = '';
              });

              teamModal.addEventListener('click', (e) => {
                  if (e.target === teamModal) {
                      teamModal.classList.remove('active');
                      document.body.style.overflow = '';
                  }
              });
          }

          /* ── BEFORE/AFTER SLIDER ── */
          (function() {
              const slider = document.getElementById('ba-slider');
              const afterWrap = document.getElementById('ba-after-wrap');
              const handle = document.getElementById('ba-handle');
              if(!slider || !afterWrap || !handle) return;

              function moveSlider(e) {
                  const rect = slider.getBoundingClientRect();
                  let x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
                  x = Math.max(0, Math.min(x, rect.width));
                  const percent = (x / rect.width) * 100;
                
                  afterWrap.style.clipPath = `inset(0 0 0 ${percent}%)`;
                  handle.style.left = percent + '%';
              }

              slider.addEventListener('mousemove', moveSlider);
              slider.addEventListener('touchmove', moveSlider, {passive: true});
          })();

          /* ── EXPOSE HANDLERS USED BY JSX onClick ── */
          window.submitBooking = window.submitBooking || submitBooking;
          window.openServiceModal = openServiceModal;
          window.closeServiceModal = closeServiceModal;
          window.toggleCart = toggleCart;
          window.addToCart = addToCart;
          window.removeFromCart = removeFromCart;
          window.selectQuiz = selectQuiz;
          window.resetQuiz = resetQuiz;

}
