(function (root, factory) {
  const api = factory();

  if (typeof module === 'object' && module.exports) {
    module.exports = api;
  }

  root.XPHARMA_PRODUCT_ROUTE_UTILS = api;

  if (Array.isArray(root.XPHARMA_PRODUCTS)) {
    root.XPHARMA_PRODUCT_ROUTES = api.createProductRouteMap(root.XPHARMA_PRODUCTS);
  }
}(typeof window !== 'undefined' ? window : globalThis, function () {
  'use strict';

  const DOMAIN = 'https://xpharmapremium.com';
  const ORAL_CATEGORIES = new Set([
    'oral-hormones',
    'oral-pharmaceuticals',
    'oral-thyroid-hormones'
  ]);
  const CATEGORY_LABELS = {
    'injectable-singles': 'Injectable Singles',
    'injectable-blends': 'Injectable Blends',
    'oral-hormones': 'Oral Hormones',
    'oral-pharmaceuticals': 'Oral Pharmaceuticals',
    'oral-thyroid-hormones': 'Oral Thyroid Hormones'
  };

  function sanitizeNameForSlug(name) {
    return String(name || '')
      .replace(/^\(([^)]+)\)\s*-\s*/i, '')
      .trim();
  }

  function slugify(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .replace(/-{2,}/g, '-');
  }

  function cleanNumber(value) {
    return String(value || '')
      .trim()
      .replace(/\.0+$/, '');
  }

  function toNumberToken(value) {
    return cleanNumber(value).replace(/\./g, '-');
  }

  function parsePresentation(presentation) {
    const value = String(presentation || '');
    const strengthMatch = value.match(/([0-9]+(?:\.[0-9]+)?)\s*(mg|mcg)\b/i);
    const volumeMatch = value.match(/([0-9]+(?:\.[0-9]+)?)\s*ml\b/i);

    if (!strengthMatch) {
      throw new Error(`Unable to determine strength from presentation: ${value}`);
    }

    return {
      strengthValue: cleanNumber(strengthMatch[1]),
      strengthUnit: strengthMatch[2].toLowerCase(),
      volumeValue: volumeMatch ? cleanNumber(volumeMatch[1]) : ''
    };
  }

  function isOralCategory(category) {
    return ORAL_CATEGORIES.has(category);
  }

  function getDisplayName(product, needsOralQualifier) {
    const baseName = String(product && product.name ? product.name : '').trim();

    if (needsOralQualifier) {
      return `${baseName} Oral`;
    }

    return baseName;
  }

  function buildMetaDescription(route) {
    const summary = [
      `${route.displayName} ${route.strengthLabel} institutional product page from XPharma.`,
      'Review category, active compound, presentation details, and official commercial contact channels.'
    ].join(' ');

    return summary.length <= 160 ? summary : `${summary.slice(0, 157).trimEnd()}...`;
  }

  function createDraftRouteRecord(product, index) {
    const presentation = parsePresentation(product.presentation);
    const baseSlug = slugify(sanitizeNameForSlug(product.name));

    return {
      index,
      product,
      legacySlug: product.slug,
      baseSlug,
      isOral: isOralCategory(product.category),
      strengthValue: presentation.strengthValue,
      strengthUnit: presentation.strengthUnit,
      strengthToken: `${toNumberToken(presentation.strengthValue)}${presentation.strengthUnit}`,
      strengthLabel: `${presentation.strengthValue} ${presentation.strengthUnit}`,
      volumeValue: presentation.volumeValue,
      volumeToken: presentation.volumeValue ? `${toNumberToken(presentation.volumeValue)}ml` : '',
      categoryLabel: product.categoryLabel || CATEGORY_LABELS[product.category] || 'Product'
    };
  }

  function groupBy(items, getKey) {
    const groups = new Map();

    items.forEach((item) => {
      const key = getKey(item);
      const group = groups.get(key);

      if (group) {
        group.push(item);
        return;
      }

      groups.set(key, [item]);
    });

    return groups;
  }

  function createProductRouteMap(products) {
    const records = (Array.isArray(products) ? products : []).map(createDraftRouteRecord);
    const nameGroups = groupBy(records, (record) => record.baseSlug);

    records.forEach((record) => {
      const siblings = nameGroups.get(record.baseSlug) || [];
      const hasOralVariant = siblings.some((item) => item.isOral);
      const hasInjectableVariant = siblings.some((item) => !item.isOral);

      record.needsOralQualifier = record.isOral && hasOralVariant && hasInjectableVariant;
      record.displayName = getDisplayName(record.product, record.needsOralQualifier);
    });

    const collisionGroups = groupBy(
      records,
      (record) => `${record.baseSlug}|${record.needsOralQualifier ? 'oral' : 'standard'}|${record.strengthToken}`
    );

    records.forEach((record) => {
      const collisions = collisionGroups.get(`${record.baseSlug}|${record.needsOralQualifier ? 'oral' : 'standard'}|${record.strengthToken}`) || [];

      record.needsVolumeQualifier = collisions.length > 1;

      if (record.needsVolumeQualifier && !record.volumeToken) {
        throw new Error(`Unable to disambiguate route for ${record.legacySlug} without ml information.`);
      }

      const publicSlugParts = [record.baseSlug];

      if (record.needsOralQualifier) {
        publicSlugParts.push('oral');
      }

      publicSlugParts.push(record.strengthToken);

      if (record.needsVolumeQualifier) {
        publicSlugParts.push(record.volumeToken);
      }

      record.publicSlug = publicSlugParts.join('-');
      record.publicPath = `products/${record.publicSlug}.html`;
      record.publicUrl = `${DOMAIN}/${record.publicPath}`;
      record.pageTitle = `${record.displayName} · ${record.strengthLabel} | XPharma Product`;
      record.metaDescription = buildMetaDescription(record);
      record.ogTitle = record.pageTitle;
      record.ogDescription = record.metaDescription;
      record.ogImage = record.product.image && record.product.image.src
        ? `${DOMAIN}/${String(record.product.image.src).replace(/^\/+/, '')}`
        : '';
    });

    const byLegacySlug = Object.create(null);
    const byPublicSlug = Object.create(null);
    const legacyToPublicSlug = Object.create(null);
    const duplicatePublicSlugs = new Set();

    records.forEach((record) => {
      if (byPublicSlug[record.publicSlug]) {
        duplicatePublicSlugs.add(record.publicSlug);
      }

      byLegacySlug[record.legacySlug] = record;
      byPublicSlug[record.publicSlug] = record;
      legacyToPublicSlug[record.legacySlug] = record.publicSlug;
    });

    if (duplicatePublicSlugs.size > 0) {
      throw new Error(`Duplicate public slugs detected: ${Array.from(duplicatePublicSlugs).join(', ')}`);
    }

    return {
      domain: DOMAIN,
      routes: records,
      byLegacySlug,
      byPublicSlug,
      legacyToPublicSlug
    };
  }

  return {
    DOMAIN,
    CATEGORY_LABELS,
    createProductRouteMap,
    isOralCategory,
    parsePresentation,
    sanitizeNameForSlug,
    slugify
  };
}));