/* ============================================================
   XPharma - Main JavaScript
   Features: navbar scroll, mobile menu, scroll reveal,
   animated counters, product filter, contact form
   ============================================================ */

(function () {
  'use strict';

  /* ── Navbar: scroll effect + active link ── */
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Mark the active link based on the current URL
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (href === 'index.html' && currentPage === '')) {
      link.classList.add('active');
    }
  });

  // Make the navbar solid after scrolling
  function handleNavScroll() {
    if (!navbar) return;
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavScroll, { passive: true });
  handleNavScroll();

  /* ── Mobile menu toggle ── */
  const navToggle = document.querySelector('.nav-toggle');
  const navMobile = document.querySelector('.nav-mobile');

  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      const menuExpanded = navToggle.classList.toggle('open');
      navMobile.classList.toggle('open', menuExpanded);
      navToggle.setAttribute('aria-expanded', menuExpanded);
      document.body.style.overflow = menuExpanded ? 'hidden' : '';
    });

    // Close after clicking a link
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMobile.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close after clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && !navMobile.contains(e.target)) {
        navToggle.classList.remove('open');
        navMobile.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ── Scroll Reveal ── */
  const revealEls = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: show everything without animation
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Contadores animados ── */
  const counters = document.querySelectorAll('[data-counter]');

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-counter'), 10);
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out expo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const value = Math.floor(ease * target);
      el.textContent = value.toLocaleString('en-US') + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => counterObserver.observe(el));
  }

  /* ── Product filter ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card[data-category]');
  const validProductCategories = new Set([
    'all',
    'injectable-singles',
    'injectable-blends',
    'oral-hormones',
    'oral-pharmaceuticals',
    'oral-thyroid-hormones'
  ]);

  function getCatalogCategoryFromUrl() {
    const category = new URLSearchParams(window.location.search).get('category');
    return validProductCategories.has(category) ? category : 'all';
  }

  function updateCatalogUrl(category) {
    const nextUrl = new URL(window.location.href);

    if (category === 'all') {
      nextUrl.searchParams.delete('category');
    } else {
      nextUrl.searchParams.set('category', category);
    }

    window.history.replaceState({}, '', `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
  }

  function applyProductFilter(category, activeButton) {
    const normalizedCategory = validProductCategories.has(category) ? category : 'all';

    if (activeButton) {
      setActiveFilterButton(activeButton);
    }

    productCards.forEach(card => {
      const cardCat = card.getAttribute('data-category');
      const show = normalizedCategory === 'all' || cardCat === normalizedCategory;

      if (show) {
        card.style.display = '';
        // Re-trigger reveal animation
        setTimeout(() => card.classList.add('visible'), 10);
      } else {
        card.style.display = 'none';
        card.classList.remove('visible');
      }
    });

    updateCatalogUrl(normalizedCategory);
  }

  function setActiveFilterButton(activeButton) {
    filterBtns.forEach(button => {
      const isActive = button === activeButton;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
  }

  filterBtns.forEach(btn => {
    btn.setAttribute('aria-pressed', String(btn.classList.contains('active')));

    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter');
      applyProductFilter(category, btn);
    });
  });

  if (filterBtns.length > 0 && productCards.length > 0) {
    const initialCategory = getCatalogCategoryFromUrl();
    const initialButton = Array.from(filterBtns).find(btn => btn.getAttribute('data-filter') === initialCategory)
      || Array.from(filterBtns).find(btn => btn.getAttribute('data-filter') === 'all');

    if (initialButton) {
      applyProductFilter(initialCategory, initialButton);
    }
  }

  /* ── Contact form ── */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic validation
      const fields = contactForm.querySelectorAll('[required]');
      let valid = true;

      fields.forEach(field => {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
        // Validate email
        if (field.type === 'email' && field.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value)) {
            field.classList.add('error');
            valid = false;
          }
        }
      });

      if (!valid) {
        showFormMessage(contactForm, 'Please complete all required fields correctly.', 'error');
        return;
      }

      // Simulated submission
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      setTimeout(() => {
        showFormMessage(contactForm, 'Message sent successfully. Our team will get back to you shortly.', 'success');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
      }, 1800);
    });
  }

  function showFormMessage(form, msg, type) {
    let msgEl = form.querySelector('.form-message');
    if (!msgEl) {
      msgEl = document.createElement('p');
      msgEl.className = 'form-message';
      form.appendChild(msgEl);
    }
    msgEl.textContent = msg;
    msgEl.style.cssText = `
      margin-top: 1rem;
      padding: 12px 16px;
      border-radius: 8px;
      font-size: 0.88rem;
      font-weight: 600;
      background: ${type === 'success' ? 'rgba(34,197,94,0.12)' : 'rgba(239,68,68,0.12)'};
      color: ${type === 'success' ? '#4ade80' : '#f87171'};
      border: 1px solid ${type === 'success' ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'};
    `;
    setTimeout(() => { if (msgEl) msgEl.remove(); }, 6000);
  }

  /* ── Smooth scroll for anchors ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── Dynamic footer year ── */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
