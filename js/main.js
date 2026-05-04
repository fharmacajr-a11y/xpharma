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
    // iOS Safari requires position:fixed on body to block background scroll
    function openMobileMenu() {
      const y = window.scrollY;
      navToggle.classList.add('open');
      navMobile.classList.add('open');
      navToggle.setAttribute('aria-expanded', 'true');
      document.body.dataset.navScrollY = y;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${y}px`;
      document.body.style.width = '100%';
    }

    function closeMobileMenu() {
      const y = parseFloat(document.body.dataset.navScrollY || '0');
      navToggle.classList.remove('open');
      navMobile.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, y);
    }

    navToggle.addEventListener('click', () => {
      if (navToggle.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close after clicking a link
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close after clicking outside
    document.addEventListener('click', (e) => {
      if (navToggle.classList.contains('open') &&
          !navbar.contains(e.target) && !navMobile.contains(e.target)) {
        closeMobileMenu();
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
  const initialCatalogTargetId = getCatalogTargetIdFromUrl();
  let hasRestoredCatalogTarget = false;
  let catalogTargetRestoreAttempts = 0;

  function getCatalogCategoryFromUrl() {
    const category = new URLSearchParams(window.location.search).get('category');
    return validProductCategories.has(category) ? category : 'all';
  }

  function getCatalogTargetIdFromUrl() {
    const targetId = window.location.hash.replace(/^#/, '').trim();
    return /^product-[a-z0-9-]+$/i.test(targetId) ? targetId : '';
  }

  function updateCatalogUrl(category, options = {}) {
    const nextUrl = new URL(window.location.href);
    const preserveHash = options.preserveHash === true;

    if (category === 'all') {
      nextUrl.searchParams.delete('category');
    } else {
      nextUrl.searchParams.set('category', category);
    }

    if (!preserveHash) {
      nextUrl.hash = '';
    }

    window.history.replaceState({}, '', `${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`);
  }

  function updateProductCardLinks(category) {
    const normalizedCategory = validProductCategories.has(category) ? category : 'all';

    productCards.forEach(card => {
      const cardLink = card.querySelector('.product-card-link');

      if (!cardLink) {
        return;
      }

      const nextHref = new URL(cardLink.getAttribute('href') || cardLink.href, window.location.href);

      if (normalizedCategory === 'all') {
        nextHref.searchParams.delete('category');
      } else {
        nextHref.searchParams.set('category', normalizedCategory);
      }

      cardLink.href = `${nextHref.pathname}${nextHref.search}`;
    });
  }

  function scrollCatalogTargetIntoView(targetCard) {
    const scrollingElement = document.scrollingElement || document.documentElement;
    const previousRootScrollBehavior = document.documentElement.style.scrollBehavior;
    const previousBodyScrollBehavior = document.body ? document.body.style.scrollBehavior : '';
    const nextScrollTop = Math.max(targetCard.getBoundingClientRect().top + window.scrollY - 160, 0);

    document.documentElement.style.scrollBehavior = 'auto';

    if (document.body) {
      document.body.style.scrollBehavior = 'auto';
    }

    scrollingElement.scrollTop = nextScrollTop;
    window.scrollTo(0, nextScrollTop);

    requestAnimationFrame(() => {
      document.documentElement.style.scrollBehavior = previousRootScrollBehavior;

      if (document.body) {
        document.body.style.scrollBehavior = previousBodyScrollBehavior;
      }
    });
  }

  function restoreCatalogTarget() {
    if (hasRestoredCatalogTarget || !initialCatalogTargetId || catalogTargetRestoreAttempts > 12) {
      return;
    }

    const targetCard = document.getElementById(initialCatalogTargetId);

    if (!targetCard || getComputedStyle(targetCard).display === 'none') {
      catalogTargetRestoreAttempts += 1;

      window.setTimeout(restoreCatalogTarget, 120);
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const targetRect = targetCard.getBoundingClientRect();
        const isTargetVisible = targetRect.bottom > 0 && targetRect.top < window.innerHeight;

        if (isTargetVisible) {
          hasRestoredCatalogTarget = true;
          return;
        }

        scrollCatalogTargetIntoView(targetCard);
        catalogTargetRestoreAttempts += 1;

        requestAnimationFrame(() => {
          const nextTargetRect = targetCard.getBoundingClientRect();
          const isTargetNowVisible = nextTargetRect.bottom > 0 && nextTargetRect.top < window.innerHeight;

          if (isTargetNowVisible) {
            hasRestoredCatalogTarget = true;
            return;
          }

          window.setTimeout(restoreCatalogTarget, 120);
        });
      });
    });
  }

  function applyProductFilter(category, activeButton, options = {}) {
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

    updateProductCardLinks(normalizedCategory);
    updateCatalogUrl(normalizedCategory, options);
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
      applyProductFilter(initialCategory, initialButton, { preserveHash: Boolean(initialCatalogTargetId) });
      restoreCatalogTarget();
    }
  }

  /* ── Inquiry / Contact form ── */
  const contactForm = document.querySelector('[data-inquiry-form]') || document.getElementById('contact-form');

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

      const unavailableMsg = contactForm.dataset.unavailableMessage ||
        'Your inquiry could not be submitted online yet. Please use the official contact channel.';

      showFormMessage(contactForm, unavailableMsg, 'notice');
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
      background: ${type === 'success' ? 'rgba(34,197,94,0.12)' : type === 'notice' ? 'rgba(201,164,92,0.14)' : 'rgba(239,68,68,0.12)'};
      color: ${type === 'success' ? '#4ade80' : type === 'notice' ? '#8b6a21' : '#f87171'};
      border: 1px solid ${type === 'success' ? 'rgba(34,197,94,0.3)' : type === 'notice' ? 'rgba(201,164,92,0.35)' : 'rgba(239,68,68,0.3)'};
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

  /* ── Floating back-to-top ── */
  const backToTopBtn = document.querySelector('.floating-action--top');

  if (backToTopBtn) {
    function handleBackToTopVisibility() {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('floating-action--visible');
      } else {
        backToTopBtn.classList.remove('floating-action--visible');
      }
    }

    window.addEventListener('scroll', handleBackToTopVisibility, { passive: true });
    handleBackToTopVisibility();

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();
