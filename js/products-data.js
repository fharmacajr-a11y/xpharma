(function () {
  'use strict';

  const injectableDescription = 'Injectable product presentation prepared for institutional and commercial review. Product details are available through official XPharma channels.';
  const oralDescription = 'Product presentation prepared for institutional and commercial review. Product details are available through official XPharma channels.';

  function buildProduct({ slug, name, category, imageSrc, altName }) {
    const product = {
      slug,
      name,
      category,
      description: category === 'injectable-singles' || category === 'injectable-blends'
        ? injectableDescription
        : oralDescription
    };

    if (imageSrc) {
      product.image = {
        src: imageSrc,
        alt: `XPharma ${altName || name} product presentation`
      };
    }

    return product;
  }

  window.XPHARMA_PRODUCTS = [
    buildProduct({ slug: 'boldebol-xp', name: 'Boldebol XP', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/boldebol-xp.png' }),
    buildProduct({ slug: 'durateston', name: 'Durateston', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/durateston-xp.png' }),
    buildProduct({ slug: 'finaplix-xp', name: 'Finaplix XP', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/finaplix-xp.png' }),
    buildProduct({ slug: 'laurabolin', name: 'Laurabolin', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/laurabolin.png' }),
    buildProduct({ slug: 'masteron', name: 'Masteron', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/masteron.png' }),
    buildProduct({ slug: 'masteron-slow', name: 'Masteron Slow', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/masteron-slow.png' }),
    buildProduct({ slug: 'masteron-slow-200', name: 'Masteron Slow 200', altName: 'Masteron Slow', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/masteron-slow-200.png' }),
    buildProduct({ slug: 'nadro-rapid-xp', name: 'Nadro Rapid XP', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/nadro-rapid-xp.png' }),
    buildProduct({ slug: 'nandrobolic', name: 'Nandrobolic', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/nandrobolic.png' }),
    buildProduct({ slug: 'parabolan', name: 'Parabolan', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/parabolan.png' }),
    buildProduct({ slug: 'primobolan', name: 'Primobolan', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/primobolan.png' }),
    buildProduct({ slug: 'prop-test', name: 'Prop Test', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/prop-test.png' }),
    buildProduct({ slug: 'testex-xp', name: 'Testex XP', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/testex-xp.png' }),
    buildProduct({ slug: 'testoviron', name: 'Testoviron', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/testoviron.png' }),
    buildProduct({ slug: 'trestolona', name: 'Trestolona', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/trestolona.png' }),
    buildProduct({ slug: 'winstrol', name: 'Winstrol', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/winstrol-20ml.png' }),
    buildProduct({ slug: 'winstrol-xp', name: 'Winstrol XP', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/winstrol-xp.png' }),
    buildProduct({ slug: 'wintrol', name: 'Wintrol', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/wintrol.png' }),
    buildProduct({ slug: 'bulkstack-xp', name: 'Bulkstack XP', category: 'injectable-blends', imageSrc: 'assets/images/products/injectable-blends/bulkstack-xp.png' }),
    buildProduct({ slug: 'bulkstak', name: 'Bulkstak', category: 'injectable-blends', imageSrc: 'assets/images/products/injectable-blends/bulkstak.png' }),
    buildProduct({ slug: 'cutstak', name: 'Cutstak', category: 'injectable-blends', imageSrc: 'assets/images/products/injectable-blends/cutstak.png' }),
    buildProduct({ slug: 'pure-blood', name: 'Pure Blood', category: 'injectable-blends', imageSrc: 'assets/images/products/injectable-blends/pure-blood.png' }),
    buildProduct({ slug: 'tri-rage', name: 'Tri-Rage', category: 'injectable-blends', imageSrc: 'assets/images/products/injectable-blends/tri-rage.png' }),
    buildProduct({ slug: 'oral-hormone-line', name: 'Oral Hormone Line', category: 'oral-hormones' }),
    buildProduct({ slug: 'oral-pharmaceutical-line', name: 'Oral Pharmaceutical Line', category: 'oral-pharmaceuticals' }),
    buildProduct({ slug: 'oral-thyroid-hormone-line', name: 'Oral Thyroid Hormone Line', category: 'oral-thyroid-hormones' })
  ];
}());