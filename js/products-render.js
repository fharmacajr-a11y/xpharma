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

  function getProductCardId(product) {
    return `product-${product.slug}`;
  }

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

  function isInjectableSrc(src) {
    return src.includes('/injectable-singles/') || src.includes('/injectable-blends/');
  }

  function createMedia(product) {
    if (!product.image || !product.image.src) {
      return createPlaceholder(product);
    }

    const src = product.image.src;
    const alt = product.image.alt || `XPharma ${product.name} product presentation`;
    const width = product.image.width || 1024;
    const height = product.image.height || 1536;

    const image = document.createElement('img');

    image.className = 'product-card-img';
    image.src = src;
    image.alt = alt;
    image.width = width;
    image.height = height;
    image.loading = 'lazy';
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
      const picture = document.createElement('picture');
      const source = document.createElement('source');
      source.srcset = src.replace(/\.png$/i, '.webp');
      source.type = 'image/webp';
      picture.appendChild(source);
      picture.appendChild(image);
      return picture;
    }

    return image;
  }

  function getProductHref(product) {
    const href = new URL('product.html', window.location.href);
    const activeCategory = new URLSearchParams(window.location.search).get('category');

    href.searchParams.set('id', product.slug);
    href.searchParams.set('from', getProductCardId(product));

    if (activeCategory && activeCategory !== 'all') {
      href.searchParams.set('category', activeCategory);
    }

    return `${href.pathname}${href.search}`;
  }

  function createCard(product, index) {
    const card = document.createElement('article');
    const wrapper = document.createElement('a');
    const media = document.createElement('div');
    const body = document.createElement('div');
    const tag = document.createElement('span');
    const title = document.createElement('h3');
    const subtitle = document.createElement('p');
    const description = document.createElement('p');
    const subtitleText = product.subtitle || product.presentation;

    card.className = `product-card reveal reveal-delay-${(index % 4) + 1}`;
    card.id = getProductCardId(product);
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
    subtitle.className = 'product-card-subtitle';
    subtitle.textContent = subtitleText || '';
    description.textContent = product.cardDescription || product.description;

    body.append(tag, title);

    if (subtitleText) {
      body.appendChild(subtitle);
    }

    body.appendChild(description);
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