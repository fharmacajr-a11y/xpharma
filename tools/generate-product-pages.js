'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT_DIR = path.resolve(__dirname, '..');
const OUTPUT_DIR = path.join(ROOT_DIR, 'products');
const DATA_FILE = path.join(ROOT_DIR, 'js', 'products-data.js');
const SITEMAP_FILE = path.join(ROOT_DIR, 'sitemap.xml');
const routeUtils = require(path.join(ROOT_DIR, 'js', 'product-routes.js'));

const DOMAIN = routeUtils.DOMAIN;
const STATIC_PATHS = [
  '/',
  '/about.html',
  '/products.html',
  '/lipored.html',
  '/contact.html',
  '/distributor.html',
  '/apparel.html',
  '/apparel/xpharma-tshirt-white.html',
  '/apparel/xpharma-tshirt-black.html',
  '/apparel/xpharma-tshirt-wine.html'
];

function loadProducts() {
  const sandbox = { window: {} };
  const source = fs.readFileSync(DATA_FILE, 'utf8');

  vm.createContext(sandbox);
  vm.runInContext(source, sandbox, { filename: DATA_FILE });

  if (!Array.isArray(sandbox.window.XPHARMA_PRODUCTS)) {
    throw new Error('XPHARMA_PRODUCTS was not defined while loading products-data.js');
  }

  return sandbox.window.XPHARMA_PRODUCTS;
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeHtmlForHeadText(value) {
  return escapeHtml(value).replace(/·/g, '&middot;');
}

function preserveExistingLineEndings(filePath, content) {
  const nextContent = String(content || '');

  if (!fs.existsSync(filePath)) {
    return nextContent;
  }

  const existingContent = fs.readFileSync(filePath, 'utf8');

  if (/\r\n/.test(existingContent)) {
    return nextContent.replace(/\r?\n/g, '\r\n');
  }

  return nextContent.replace(/\r\n/g, '\n');
}

function writeTextFileIfChanged(filePath, content) {
  const nextContent = preserveExistingLineEndings(filePath, content);

  if (fs.existsSync(filePath)) {
    const existingContent = fs.readFileSync(filePath, 'utf8');

    if (existingContent === nextContent) {
      return false;
    }
  }

  fs.writeFileSync(filePath, nextContent, 'utf8');
  return true;
}

function splitParagraphs(text) {
  return String(text || '')
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function isInjectableSrc(src) {
  return src.indexOf('/injectable-singles/') !== -1 || src.indexOf('/injectable-blends/') !== -1;
}

function isOralSrc(src) {
  return src.indexOf('/oral-hormones/') !== -1
    || src.indexOf('/oral-pharmaceuticals/') !== -1
    || src.indexOf('/oral-thyroid-hormones/') !== -1;
}

function getOralOptimizedPath(src) {
  const lastSlash = src.lastIndexOf('/');
  return `${src.slice(0, lastSlash + 1)}optimized/${src.slice(lastSlash + 1)}`;
}

function toRelativeAssetPath(src) {
  return `../${String(src || '').replace(/^\/+/, '')}`;
}

function buildImageMarkup(product) {
  if (!product.image || !product.image.src) {
    return [
      '<div class="img-placeholder" role="img" aria-label="XPharma product presentation unavailable">',
      '<span class="ph-icon" aria-hidden="true">&#129514;</span>',
      '<span>Catalog image unavailable</span>',
      `<span style="font-size:0.8rem;letter-spacing:0.05em;">${escapeHtml(product.name)}</span>`,
      '</div>'
    ].join('');
  }

  const src = String(product.image.src);
  const alt = escapeHtml(product.image.alt || `XPharma ${product.name} product presentation`);

  if (isInjectableSrc(src)) {
    const pngSrc = toRelativeAssetPath(src);
    const webpSrc = toRelativeAssetPath(src.replace(/\.png$/i, '.webp'));

    return [
      '<picture>',
      `<source srcset="${escapeHtml(webpSrc)}" type="image/webp" />`,
      `<img src="${escapeHtml(pngSrc)}" class="product-detail-img" alt="${alt}" width="1024" height="1536" decoding="async" />`,
      '</picture>'
    ].join('');
  }

  if (isOralSrc(src)) {
    const optimizedPng = getOralOptimizedPath(src);
    const pngSrc = toRelativeAssetPath(optimizedPng);
    const webpSrc = toRelativeAssetPath(optimizedPng.replace(/\.png$/i, '.webp'));

    return [
      '<picture>',
      `<source srcset="${escapeHtml(webpSrc)}" type="image/webp" />`,
      `<img src="${escapeHtml(pngSrc)}" class="product-detail-img" alt="${alt}" width="792" height="1188" decoding="async" />`,
      '</picture>'
    ].join('');
  }

  return `<img src="${escapeHtml(toRelativeAssetPath(src))}" class="product-detail-img" alt="${alt}" width="1024" height="1536" decoding="async" />`;
}

function buildDescriptionMarkup(product) {
  const description = product.detailDescription || product.description || '';

  return splitParagraphs(description)
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join('\n              ');
}

function buildOpenGraphMarkup(route) {
  if (!route.ogImage) {
    return '';
  }

  return [
    `  <meta property="og:image" content="${escapeHtml(route.ogImage)}" />`,
    `  <meta property="og:image:alt" content="${escapeHtml(route.product.image.alt || route.displayName)}" />`
  ].join('\n');
}

function buildProductPage(product, route) {
  const heroSubtitle = product.subtitle || product.presentation || `${route.strengthLabel} presentation`;
  const detailMarkup = buildDescriptionMarkup(product);
  const backHref = `../products.html#product-${escapeHtml(product.slug)}`;
  const ogImageMarkup = buildOpenGraphMarkup(route);
  const ogTitleHtml = escapeHtmlForHeadText(route.ogTitle);
  const pageTitleHtml = escapeHtmlForHeadText(route.pageTitle);

  return `<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${escapeHtml(route.metaDescription)}" />
  <meta property="og:title" content="${ogTitleHtml}" />
  <meta property="og:description" content="${escapeHtml(route.ogDescription)}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${escapeHtml(route.publicUrl)}" />
${ogImageMarkup ? `${ogImageMarkup}\n` : ''}  <meta name="theme-color" content="#0a0a0f" />
  <link rel="canonical" href="${escapeHtml(route.publicUrl)}" />
  <link rel="icon" href="../favicon.ico" sizes="any" />
  <link rel="icon" type="image/png" sizes="32x32" href="../assets/images/favicons/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="48x48" href="../assets/images/favicons/favicon-48x48.png" />
  <link rel="icon" type="image/png" sizes="96x96" href="../assets/images/favicons/favicon-96x96.png" />
  <link rel="apple-touch-icon" href="../assets/images/favicons/apple-touch-icon.png" />
  <title>${pageTitleHtml}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link rel="stylesheet" href="../css/style.css" />
</head>
<body>

  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header>
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="container nav-inner">
        <a href="../index.html" class="nav-logo brand-logo" aria-label="XPharma home page">
          <img src="../assets/images/logos/header/xpharma-logo-header.png" alt="XPharma Premium" class="brand-logo-img" width="2169" height="725" decoding="async" />
        </a>
        <ul class="nav-links" role="list">
          <li><a href="../index.html">Home</a></li>
          <li><a href="../about.html">About</a></li>
          <li><a href="../products.html" class="active" aria-current="page">Products</a></li>
          <li><a href="../apparel.html">Apparel</a></li>
          <li><a href="../lipored.html">LipoRED HD</a></li>
          <li><a href="../contact.html">Contact</a></li>
        </ul>
        <a href="../distributor.html" class="btn btn-primary nav-cta">Become a Distributor</a>

        <!-- Desktop search -->
        <form class="nav-search js-nav-search-form" role="search" action="../products.html" method="GET" aria-label="Search products">
          <div class="nav-search-wrap">
            <svg class="nav-search-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <input type="search" name="q" class="nav-search-input" placeholder="Search products..." autocomplete="off" aria-label="Search products" maxlength="100" />
            <button type="submit" class="nav-search-btn" aria-label="Submit search">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </form>

        <!-- Mobile search toggle -->
        <button class="nav-search-toggle" id="nav-search-toggle" aria-label="Search products" aria-expanded="false" aria-controls="nav-search-drawer">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
        </button>

        <button class="nav-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="nav-mobile">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>

    <!-- Mobile search drawer -->
    <div class="nav-search-drawer" id="nav-search-drawer" aria-hidden="true">
      <div class="container">
        <form class="js-nav-search-form" role="search" action="../products.html" method="GET" aria-label="Search products">
          <div class="nav-search-wrap">
            <svg class="nav-search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
            <input type="search" name="q" class="nav-search-input" placeholder="Search products..." autocomplete="off" aria-label="Search products" maxlength="100" />
            <button type="submit" class="nav-search-btn" aria-label="Submit search">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="nav-mobile" id="nav-mobile" role="dialog" aria-label="Navigation menu">
      <a href="../index.html">Home</a>
      <a href="../about.html">About</a>
      <a href="../products.html" class="active" aria-current="page">Products</a>
      <a href="../apparel.html">Apparel</a>
      <a href="../lipored.html">LipoRED HD</a>
      <a href="../contact.html">Contact</a>
      <a href="../distributor.html" class="btn btn-primary">Become a Distributor</a>
    </div>
  </header>

  <main id="main-content">
    <section class="page-hero product-page-hero" aria-labelledby="product-page-title">
      <div class="container">
        <nav class="breadcrumb" aria-label="Breadcrumb">
          <a href="../index.html">Home</a>
          <span aria-hidden="true">&rsaquo;</span>
          <a href="../products.html">Products</a>
          <span aria-hidden="true">&rsaquo;</span>
          <span aria-current="page">${escapeHtml(route.displayName)}</span>
        </nav>
        <span class="section-tag">${escapeHtml(route.categoryLabel)}</span>
        <h1 id="product-page-title">${escapeHtml(route.displayName)}</h1>
        <p id="product-page-subtitle">${escapeHtml(heroSubtitle)}</p>
      </div>
    </section>

    <section class="product-detail-section" aria-labelledby="product-detail-title">
      <div class="container">
        <article class="product-detail-grid">
          <div class="product-detail-media reveal">
            ${buildImageMarkup(product)}
          </div>
          <div class="product-detail-panel reveal reveal-delay-1">
            <h2 id="product-detail-title">${escapeHtml(route.displayName)}</h2>
            <dl class="product-detail-specs">
              <div class="product-detail-spec"><dt>Active compound</dt><dd>${escapeHtml(product.activeCompound || 'Available on request')}</dd></div>
              <div class="product-detail-spec"><dt>Presentation</dt><dd>${escapeHtml(product.presentation || route.strengthLabel)}</dd></div>
            </dl>
            <div class="product-detail-description">
              ${detailMarkup}
            </div>
            <div class="product-actions">
              <a href="../contact.html" class="btn btn-primary">Contact Us</a>
              <a href="${backHref}" class="btn btn-outline">Back to Catalog</a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section style="padding:60px 0;background:var(--bg-surface);">
      <div class="container">
        <div style="background:var(--bg-surface2);border:1px solid var(--border-gold);border-radius:var(--radius-lg);padding:2rem;display:flex;gap:1.5rem;align-items:flex-start;" role="note" aria-label="Product information notice">
          <span style="font-size:2rem;flex-shrink:0;" aria-hidden="true">&#9888;</span>
          <div>
            <h3 style="font-family:var(--font-heading);font-size:1rem;font-weight:700;color:var(--gold);margin-bottom:0.5rem;">Important Notice</h3>
            <p style="font-size:0.85rem;color:var(--text-secondary);line-height:1.75;">This page provides institutional and commercial information only. Product details, availability, documentation status, and market-specific requirements vary by product and market and must be confirmed through official XPharma channels. Nothing on this page should be interpreted as professional health guidance, a health-condition claim, or commercial authorization in any specific country.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer footer--with-contact" role="contentinfo">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-brand-logos">
            <a href="../index.html" aria-label="XPharma home page"><picture><source srcset="../assets/images/logos/footer/xpharma-logo-footer-white.webp" type="image/webp" /><img src="../assets/images/logos/footer/xpharma-logo-footer-white.png" alt="XPharma Premium" class="footer-brand-logo footer-brand-logo--xpharma" width="2169" height="725" decoding="async" /></picture></a>
            <div class="footer-brand-divider" role="presentation"></div>
            <picture><source srcset="../assets/images/logos/footer/mr-laboratorios-footer-white-trimmed.webp" type="image/webp" /><img src="../assets/images/logos/footer/mr-laboratorios-footer-white-trimmed.png" alt="MR Laboratorios" class="footer-brand-logo footer-brand-logo--mr" width="478" height="726" decoding="async" /></picture>
          </div>
          <p class="footer-brand-copy">Premium product information and commercial support for institutional and professional inquiries.</p>
        </div>
        <div class="footer-col footer-contact">
          <h4>Contact</h4>
          <address class="footer-contact-list">
            <div class="footer-contact-item"><svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg><span>Miami, Florida, United States</span></div>
            <div class="footer-contact-item"><svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.5 5v5.25l3.949 2.37-.75 1.25L11 13V7h1.5z"/></svg><span>Mon&ndash;Fri: 9:00 AM&ndash;6:00 PM EST</span></div>
            <div class="footer-contact-item"><svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg><a href="https://wa.me/14706734904" class="footer-contact-link" target="_blank" rel="noopener noreferrer">+1 (470) 673-4904</a></div>
            <div class="footer-contact-item"><svg class="footer-contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg><span class="footer-contact-pending">Email coming soon</span></div>
          </address>
        </div>
        <nav class="footer-col" aria-label="Footer links - company"><h4>Company</h4><ul role="list"><li><a href="../about.html">About Us</a></li><li><a href="../about.html#mission">Mission &amp; Values</a></li><li><a href="../about.html#story">Our Story</a></li><li><a href="../about.html#technology">Technology</a></li></ul></nav>
        <nav class="footer-col" aria-label="Footer links - products"><h4>Products</h4><ul role="list"><li><a href="../products.html">Full Catalog</a></li><li><a href="../products.html">Injectable Singles</a></li><li><a href="../products.html">Oral Hormones</a></li><li><a href="../products.html">Oral Pharmaceuticals</a></li><li><a href="../apparel.html">Apparel</a></li></ul></nav>
        <nav class="footer-col" aria-label="Footer links - support"><h4>Support</h4><ul role="list"><li><a href="../contact.html">Contact Us</a></li><li><a href="../distributor.html">Become a Distributor</a></li><li><a href="../contact.html#faq">FAQ</a></li></ul></nav>
      </div>
      <div class="footer-bottom">
        <p>&copy; <span id="footer-year"></span> XPharma. All rights reserved.</p>
        <div class="footer-bottom-right"><div class="footer-seals" aria-label="Quality certification seals"><img src="../assets/images/seals/seal-fda.png" alt="FDA seal" width="88" height="74" loading="lazy" decoding="async" /><img src="../assets/images/seals/seal-premium-quality.png" alt="Premium Quality seal" width="88" height="79" loading="lazy" decoding="async" /></div><div class="footer-bottom-links"><a href="../privacy.html">Privacy Policy</a><a href="../terms.html">Terms of Use</a></div></div>
      </div>
    </div>
  </footer>

  <script src="../js/main.js" defer></script>

  <div class="floating-actions" aria-label="Quick actions">
    <button type="button" class="floating-action floating-action--top" aria-label="Back to top"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg></button>
  </div>
</body>
</html>
`;
}

function buildSitemap(routeMap) {
  const paths = STATIC_PATHS.concat(routeMap.routes.map((route) => `/${route.publicPath}`));
  const entries = paths.map((pathname) => {
    const absoluteUrl = pathname === '/' ? `${DOMAIN}/` : `${DOMAIN}${pathname}`;
    return `  <url>\n    <loc>${absoluteUrl}</loc>\n  </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
}

function cleanOutputDirectory(routeMap) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const expectedFiles = new Set(routeMap.routes.map((route) => `${route.publicSlug}.html`));

  fs.readdirSync(OUTPUT_DIR).forEach((fileName) => {
    if (path.extname(fileName).toLowerCase() !== '.html') {
      return;
    }

    if (!expectedFiles.has(fileName)) {
      fs.unlinkSync(path.join(OUTPUT_DIR, fileName));
    }
  });
}

function writeProductPages(products, routeMap) {
  cleanOutputDirectory(routeMap);

  products.forEach((product) => {
    const route = routeMap.byLegacySlug[product.slug];
    const filePath = path.join(OUTPUT_DIR, `${route.publicSlug}.html`);
    const content = buildProductPage(product, route);
    writeTextFileIfChanged(filePath, content);
  });
}

function main() {
  const products = loadProducts();
  const routeMap = routeUtils.createProductRouteMap(products);

  writeProductPages(products, routeMap);
  writeTextFileIfChanged(SITEMAP_FILE, buildSitemap(routeMap));

  console.log(`Generated ${routeMap.routes.length} product pages.`);
}

main();