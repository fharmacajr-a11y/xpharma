(function () {
  'use strict';

  const productsGrid = document.getElementById('products-grid');
  const products = Array.isArray(window.XPHARMA_PRODUCTS) ? window.XPHARMA_PRODUCTS : [];

  if (!productsGrid) {
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

    placeholder.className = 'img-placeholder product-card-img';
    placeholder.setAttribute('role', 'img');
    placeholder.setAttribute('aria-label', `Catalog image unavailable for ${product.name}`);

    icon.className = 'ph-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = categoryIcons[product.category] || '🧪';

    label.textContent = 'Catalog image unavailable';

    name.textContent = product.name;
    name.style.fontSize = '0.72rem';
    name.style.letterSpacing = '0.04em';

    placeholder.append(icon, label, name);

    return placeholder;
  }

  function createMedia(product) {
    if (!product.image || !product.image.src) {
      return createPlaceholder(product);
    }

    const image = document.createElement('img');

    image.className = 'product-card-img';
    image.src = product.image.src;
    image.alt = product.image.alt || `XPharma ${product.name} product presentation`;
    image.width = product.image.width || 1024;
    image.height = product.image.height || 1536;
    image.loading = 'lazy';
    image.decoding = 'async';

    image.addEventListener('error', () => {
      image.replaceWith(createPlaceholder(product));
    }, { once: true });

    return image;
  }

  function getProductHref(product) {
    return `product.html?id=${encodeURIComponent(product.slug)}`;
  }

  function createCard(product, index) {
    const card = document.createElement('article');
    const wrapper = document.createElement('a');
    const media = document.createElement('div');
    const body = document.createElement('div');
    const tag = document.createElement('span');
    const title = document.createElement('h3');
    const description = document.createElement('p');

    card.className = `product-card reveal reveal-delay-${(index % 4) + 1}`;
    card.dataset.category = product.category;

    wrapper.className = 'product-card-link';
    wrapper.href = getProductHref(product);
    wrapper.setAttribute('aria-label', `View details for ${product.name}`);

    media.className = 'product-card-media';
    media.appendChild(createMedia(product));

    wrapper.appendChild(media);

    body.className = 'product-card-body';

    tag.className = 'product-tag';
    tag.textContent = categoryLabels[product.category] || product.category;

    title.textContent = product.name;
    description.textContent = product.description;

    body.append(tag, title, description);
    wrapper.appendChild(body);
    card.appendChild(wrapper);

    return card;
  }

  function renderProducts() {
    const fragment = document.createDocumentFragment();

    productsGrid.setAttribute('aria-busy', 'true');

    products.forEach((product, index) => {
      fragment.appendChild(createCard(product, index));
    });

    productsGrid.replaceChildren(fragment);
    productsGrid.removeAttribute('aria-busy');
  }

  renderProducts();
}());