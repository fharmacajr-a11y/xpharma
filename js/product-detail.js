(function () {
  'use strict';

  const products = Array.isArray(window.XPHARMA_PRODUCTS) ? window.XPHARMA_PRODUCTS : [];
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

  function createMedia(product) {
    if (!product.image || !product.image.src) {
      return createPlaceholder(product);
    }

    const image = document.createElement('img');

    image.className = 'product-detail-img';
    image.src = product.image.src;
    image.alt = product.image.alt || `XPharma ${product.name} product presentation`;
    image.width = product.image.width || 1024;
    image.height = product.image.height || 1536;
    image.decoding = 'async';

    image.addEventListener('error', () => {
      image.replaceWith(createPlaceholder(product));
    }, { once: true });

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
    document.title = 'Product Not Found | XPharma';

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
      '<a href="products.html" class="btn btn-primary">Back to Catalog</a>',
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
    const meta = document.createElement('div');
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

    meta.className = 'product-detail-meta';

    if (product.activeCompound) {
      const compoundLine = document.createElement('p');
      compoundLine.textContent = `Active compound: ${product.activeCompound}`;
      meta.appendChild(compoundLine);
    }

    if (product.presentation) {
      const presentationLine = document.createElement('p');
      presentationLine.textContent = `Presentation: ${product.presentation}`;
      meta.appendChild(presentationLine);
    }

    description.className = 'product-detail-description';
    appendDescriptionContent(description, detailDescription);

    actions.className = 'product-actions';

    contactLink.href = 'contact.html';
    contactLink.className = 'btn btn-primary';
    contactLink.textContent = 'Contact Us';

    backLink.href = 'products.html';
    backLink.className = 'btn btn-outline';
    backLink.textContent = 'Back to Catalog';

    actions.append(contactLink, backLink);
    panel.append(tag, heading);

    if (meta.childElementCount > 0) {
      panel.appendChild(meta);
    }

    panel.append(description, actions);
    article.append(media, panel);

    root.replaceChildren(article);
    root.removeAttribute('aria-busy');
  }

  const slug = new URLSearchParams(window.location.search).get('id');
  const product = products.find((item) => item.slug === slug);

  if (!slug || !product) {
    renderNotFound();
    return;
  }

  renderProduct(product);
}());