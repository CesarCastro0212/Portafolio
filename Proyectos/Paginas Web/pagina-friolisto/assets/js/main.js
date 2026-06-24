/* ===== FRÍO LISTO — Main JavaScript ===== */

document.addEventListener('DOMContentLoaded', () => {

  /* ────────── Navbar Scroll Effect ────────── */
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll to top button
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ────────── Mobile Menu ────────── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  /* ────────── Carousel ────────── */
  const track = document.getElementById('carouselTrack');
  const cards = document.querySelectorAll('.carousel-card');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dotsContainer = document.getElementById('carouselDots');

  let currentIndex = 0;
  let cardsPerView = getCardsPerView();
  let totalSlides = Math.ceil(cards.length / cardsPerView);
  let autoplayInterval;

  function getCardsPerView() {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }

  function createDots() {
    dotsContainer.innerHTML = '';
    totalSlides = Math.ceil(cards.length / cardsPerView);
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.classList.add('carousel-dot');
      if (i === currentIndex) dot.classList.add('active');
      dot.setAttribute('aria-label', `Ir a diapositiva ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function updateCarousel() {
    const gap = 24;
    const cardWidth = cards[0].offsetWidth + gap;
    const offset = currentIndex * cardsPerView * cardWidth;
    track.style.transform = `translateX(-${offset}px)`;

    // Update dots
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    if (currentIndex >= totalSlides) currentIndex = 0;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    updateCarousel();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoplay();
  });

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoplay();
  });

  function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 4500);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Handle resize
  window.addEventListener('resize', () => {
    cardsPerView = getCardsPerView();
    totalSlides = Math.ceil(cards.length / cardsPerView);
    if (currentIndex >= totalSlides) currentIndex = totalSlides - 1;
    createDots();
    updateCarousel();
  });

  createDots();
  updateCarousel();
  startAutoplay();

  // Touch/swipe support for carousel
  let touchStartX = 0;
  let touchEndX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  track.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
      resetAutoplay();
    }
  }, { passive: true });

  /* ────────── Scroll Animations ────────── */
  const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));

  /* ────────── Particle Effect ────────── */
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    const colors = ['#F97316', '#FACC15', '#7C3AED', '#FDBA74', '#A78BFA'];
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (4 + Math.random() * 4) + 's';
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      particle.style.width = (2 + Math.random() * 4) + 'px';
      particle.style.height = particle.style.width;
      particlesContainer.appendChild(particle);
    }
  }

  /* ────────── Privacy Modal ────────── */
  const privacyBtn = document.getElementById('privacyBtn');
  const privacyModal = document.getElementById('privacyModal');
  const closeModal = document.getElementById('closeModal');

  if (privacyBtn && privacyModal) {
    privacyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      privacyModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });

    closeModal.addEventListener('click', () => {
      privacyModal.classList.remove('active');
      document.body.style.overflow = '';
    });

    privacyModal.addEventListener('click', (e) => {
      if (e.target === privacyModal) {
        privacyModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && privacyModal.classList.contains('active')) {
        privacyModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  /* ────────── Counter Animation ────────── */
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += step;
          if (current < target) {
            el.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(updateCounter);
          } else {
            el.textContent = target + suffix;
          }
        };

        updateCounter();
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => counterObserver.observe(c));

  /* ────────── Smooth Scroll for nav links ────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        const offset = 80;
        const top = targetEl.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
