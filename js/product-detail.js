(function () {
  'use strict';

  const products = Array.isArray(window.XPHARMA_PRODUCTS) ? window.XPHARMA_PRODUCTS : [];
  const productRoutes = window.XPHARMA_PRODUCT_ROUTES && window.XPHARMA_PRODUCT_ROUTES.byLegacySlug
    ? window.XPHARMA_PRODUCT_ROUTES.byLegacySlug
    : null;
  const root = document.getElementById('product-detail-root');
  const titleEl = document.getElementById('product-page-title');
  const subtitleEl = document.getElementById('product-page-subtitle');
  const breadcrumbEl = document.getElementById('product-breadcrumb-name');

  if (!root) {
    return;
  }

  const categoryLabels = {
    'injectable-singles': 'Injectable Singles',
    'injectable-blends': 'Injectable Blends',
    'oral-hormones': 'Oral Hormones',
    'oral-pharmaceuticals': 'Oral Pharmaceuticals',
    'oral-thyroid-hormones': 'Oral Thyroid Hormones'
  };

  const categoryIcons = {
    'injectable-singles': '💉',
    'injectable-blends': '⚗️',
    'oral-hormones': '🌿',
    'oral-pharmaceuticals': '📦',
    'oral-thyroid-hormones': '☀️'
  };
  const validCatalogCategories = new Set([
    'all',
    'injectable-singles',
    'injectable-blends',
    'oral-hormones',
    'oral-pharmaceuticals',
    'oral-thyroid-hormones'
  ]);
  const validCatalogTargetPattern = /^product-[a-z0-9-]+$/i;

  function getCatalogHref() {
    const searchParams = new URLSearchParams(window.location.search);
    const category = searchParams.get('category');
    const from = searchParams.get('from');
    const href = new URL('products.html', window.location.href);

    if (validCatalogCategories.has(category) && category !== 'all') {
      href.searchParams.set('category', category);
    }

    if (validCatalogTargetPattern.test(from || '')) {
      href.hash = from;
    }

    return `${href.pathname}${href.search}${href.hash}`;
  }

  function appendSpecItem(container, label, value) {
    if (!value) {
      return;
    }

    const item = document.createElement('div');
    const term = document.createElement('dt');
    const description = document.createElement('dd');

    item.className = 'product-detail-spec';
    term.textContent = label;
    description.textContent = value;

    item.append(term, description);
    container.appendChild(item);
  }

  function createPlaceholder(product) {
    const placeholder = document.createElement('div');
    const icon = document.createElement('span');
    const label = document.createElement('span');
    const name = document.createElement('span');

    placeholder.className = 'img-placeholder';
    placeholder.setAttribute('role', 'img');
    placeholder.setAttribute('aria-label', `XPharma ${product.name} product presentation unavailable`);

    icon.className = 'ph-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = categoryIcons[product.category] || '🧪';

    label.textContent = 'Catalog image unavailable';
    name.textContent = product.name;
    name.style.fontSize = '0.8rem';
    name.style.letterSpacing = '0.05em';

    placeholder.append(icon, label, name);

    return placeholder;
  }

  function isInjectableSrc(src) {
    return src.includes('/injectable-singles/') || src.includes('/injectable-blends/');
  }

  function isOralSrc(src) {
    return src.includes('/oral-hormones/') || src.includes('/oral-pharmaceuticals/') || src.includes('/oral-thyroid-hormones/');
  }

  function getOralOptimizedPath(src) {
    const lastSlash = src.lastIndexOf('/');
    return src.slice(0, lastSlash + 1) + 'optimized/' + src.slice(lastSlash + 1);
  }

  function createMedia(product) {
    if (!product.image || !product.image.src) {
      return createPlaceholder(product);
    }

    const src = product.image.src;
    const alt = product.image.alt || `XPharma ${product.name} product presentation`;

    const image = document.createElement('img');
    image.className = 'product-detail-img';
    image.alt = alt;
    image.decoding = 'async';

    image.addEventListener('error', () => {
      const wrapper = image.closest('picture');
      if (wrapper) {
        wrapper.replaceWith(createPlaceholder(product));
      } else {
        image.replaceWith(createPlaceholder(product));
      }
    }, { once: true });

    if (isInjectableSrc(src)) {
      image.src    = src;
      image.width  = product.image.width  || 1024;
      image.height = product.image.height || 1536;
      const picture = document.createElement('picture');
      const source = document.createElement('source');
      source.srcset = src.replace(/\.png$/i, '.webp');
      source.type = 'image/webp';
      picture.appendChild(source);
      picture.appendChild(image);
      return picture;
    }

    if (isOralSrc(src)) {
      const optPng  = getOralOptimizedPath(src);
      const optWebp = optPng.replace(/\.png$/i, '.webp');
      image.src    = optPng;
      image.width  = 792;
      image.height = 1188;
      const picture = document.createElement('picture');
      const source  = document.createElement('source');
      source.srcset = optWebp;
      source.type   = 'image/webp';
      picture.appendChild(source);
      picture.appendChild(image);
      return picture;
    }

    image.src    = src;
    image.width  = product.image.width  || 1024;
    image.height = product.image.height || 1536;
    return image;
  }

  function appendDescriptionContent(container, text) {
    const paragraphs = String(text || '')
      .split(/\n\s*\n/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean);

    paragraphs.forEach((paragraph) => {
      const paragraphEl = document.createElement('p');
      paragraphEl.textContent = paragraph;
      container.appendChild(paragraphEl);
    });
  }

  function renderNotFound() {
    const catalogHref = getCatalogHref();

    document.title = 'Products | XPharma';

    if (titleEl) {
      titleEl.textContent = 'Product Not Found';
    }

    if (subtitleEl) {
      subtitleEl.textContent = 'The requested product could not be located in the current catalog.';
    }

    if (breadcrumbEl) {
      breadcrumbEl.textContent = 'Product Not Found';
    }

    root.innerHTML = [
      '<div class="product-empty-state">',
      '<span class="section-tag">Unavailable</span>',
      '<h2 id="product-detail-title">This product could not be found.</h2>',
      '<p>Please return to the catalog to review the currently available product presentations or contact the team for official guidance.</p>',
      '<div class="product-actions">',
      `<a href="${catalogHref}" class="btn btn-primary">Back to Catalog</a>`,
      '<a href="contact.html" class="btn btn-outline">Contact Us</a>',
      '</div>',
      '</div>'
    ].join('');

    root.removeAttribute('aria-busy');
  }

  function renderProduct(product) {
    const article = document.createElement('article');
    const media = document.createElement('div');
    const panel = document.createElement('div');
    const tag = document.createElement('span');
    const heading = document.createElement('h2');
    const specs = document.createElement('dl');
    const description = document.createElement('div');
    const actions = document.createElement('div');
    const contactLink = document.createElement('a');
    const backLink = document.createElement('a');
    const subtitleText = product.subtitle || product.presentation;
    const detailDescription = product.detailDescription || product.description;

    document.title = `${product.name} | XPharma Product`;

    if (titleEl) {
      titleEl.textContent = product.name;
    }

    if (subtitleEl) {
      subtitleEl.textContent = subtitleText || `Review the XPharma ${product.name} product presentation prepared for institutional and commercial review.`;
    }

    if (breadcrumbEl) {
      breadcrumbEl.textContent = product.name;
    }

    article.className = 'product-detail-grid';

    media.className = 'product-detail-media reveal';
    media.appendChild(createMedia(product));

    panel.className = 'product-detail-panel reveal reveal-delay-1';

    tag.className = 'product-tag';
    tag.textContent = categoryLabels[product.category] || 'Product';

    heading.id = 'product-detail-title';
    heading.textContent = product.name;

    specs.className = 'product-detail-specs';
    appendSpecItem(specs, 'Active compound', product.activeCompound);
    appendSpecItem(specs, 'Presentation', product.presentation);

    description.className = 'product-detail-description';
    appendDescriptionContent(description, detailDescription);

    actions.className = 'product-actions';

    contactLink.href = 'contact.html';
    contactLink.className = 'btn btn-primary';
    contactLink.textContent = 'Contact Us';

    backLink.href = getCatalogHref();
    backLink.className = 'btn btn-outline';
    backLink.textContent = 'Back to Catalog';

    actions.append(contactLink, backLink);
    panel.append(tag, heading);

    if (specs.childElementCount > 0) {
      panel.appendChild(specs);
    }

    panel.append(description, actions);
    article.append(media, panel);

    root.replaceChildren(article);
    root.removeAttribute('aria-busy');
  }

  const slug = new URLSearchParams(window.location.search).get('id');
  const product = products.find((item) => item.slug === slug);
  const route = slug && productRoutes ? productRoutes[slug] : null;

  if (product && route && route.publicPath) {
    window.location.replace(route.publicPath);
    return;
  }

  if (!slug || !product) {
    renderNotFound();
    return;
  }

  renderProduct(product);
}());