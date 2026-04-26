/* ============================================================
   XPharma — JavaScript Principal
   Funcionalidades: Navbar scroll, Mobile menu, Scroll reveal,
   Contadores animados, Filtro de produtos, Formulário de contato,
   Verificação de autenticidade
   ============================================================ */

(function () {
  'use strict';

  /* ── Navbar: scroll effect + active link ── */
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-links a, .nav-mobile a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  // Marca o link ativo com base na URL
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (href === 'index.html' && currentPage === '')) {
      link.classList.add('active');
    }
  });

  // Navbar fica sólida ao rolar
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
      const isOpen = navToggle.classList.toggle('open');
      navMobile.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Fecha ao clicar em um link
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navMobile.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Fecha ao clicar fora
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
    // Fallback: mostra tudo sem animação
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
      el.textContent = value.toLocaleString('pt-BR') + suffix;
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

  /* ── Filtro de produtos ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        const show = category === 'all' || cardCat === category;

        if (show) {
          card.style.display = '';
          // Re-trigger reveal animation
          setTimeout(() => card.classList.add('visible'), 10);
        } else {
          card.style.display = 'none';
          card.classList.remove('visible');
        }
      });
    });
  });

  /* ── Formulário de contato ── */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Validação básica
      const fields = contactForm.querySelectorAll('[required]');
      let valid = true;

      fields.forEach(field => {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          valid = false;
        }
        // Validar e-mail
        if (field.type === 'email' && field.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(field.value)) {
            field.classList.add('error');
            valid = false;
          }
        }
      });

      if (!valid) {
        showFormMessage(contactForm, 'Por favor, preencha todos os campos obrigatórios corretamente.', 'error');
        return;
      }

      // Simulação de envio
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando…';

      setTimeout(() => {
        showFormMessage(contactForm, 'Mensagem enviada com sucesso! Retornaremos em breve.', 'success');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'Enviar mensagem';
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

  /* ── Verificação de autenticidade ── */
  const verifyForm = document.getElementById('verify-form');

  if (verifyForm) {
    verifyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('verify-code');
      const resultArea = document.getElementById('verify-result');
      if (!input || !resultArea) return;

      const code = input.value.trim().toUpperCase();

      if (!code || code.length < 8) {
        showVerifyResult(resultArea, 'invalid', 'Código inválido. O código deve ter pelo menos 8 caracteres.');
        return;
      }

      // Simulação de verificação (substituir por chamada real à API)
      resultArea.innerHTML = '<p style="color:var(--text-muted);font-size:0.9rem;">Verificando código…</p>';

      setTimeout(() => {
        // Simulação: códigos começando com "XP" são válidos
        if (code.startsWith('XP')) {
          showVerifyResult(resultArea, 'valid',
            '✓ Produto Autêntico XPharma',
            'Este produto foi fabricado e certificado pela XPharma. Lote verificado com sucesso.',
            code
          );
        } else {
          showVerifyResult(resultArea, 'invalid',
            '✗ Código não encontrado',
            'Este código não consta em nosso banco de dados. Se você suspeita de produto falsificado, entre em contato conosco.'
          );
        }
      }, 1500);
    });
  }

  function showVerifyResult(container, status, title, desc = '', code = '') {
    const isValid = status === 'valid';
    container.innerHTML = `
      <div style="
        padding: 1.5rem;
        border-radius: 10px;
        border: 1px solid ${isValid ? 'rgba(34,197,94,0.35)' : 'rgba(239,68,68,0.35)'};
        background: ${isValid ? 'rgba(34,197,94,0.08)' : 'rgba(239,68,68,0.08)'};
        text-align: left;
      ">
        <p style="font-weight:800;font-size:1rem;color:${isValid ? '#4ade80' : '#f87171'};margin-bottom:0.4rem;">${title}</p>
        ${desc ? `<p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:0.5rem;">${desc}</p>` : ''}
        ${code ? `<p style="font-size:0.75rem;color:var(--text-muted);">Código: ${code} · Verificado em ${new Date().toLocaleDateString('pt-BR')}</p>` : ''}
      </div>
    `;
  }

  /* ── Smooth scroll para âncoras ── */
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

})();
