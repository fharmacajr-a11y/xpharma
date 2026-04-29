(function () {
  'use strict';

  const injectableDescription = 'Injectable product presentation prepared for institutional and commercial review. Product details are available through official XPharma channels.';
  const oralDescription = 'Product presentation prepared for institutional and commercial review. Product details are available through official XPharma channels.';
  const oralCardDescription = 'Oral product presentation listed for XPharma catalog and commercial reference.';
  const oralDetailDescription = 'This oral product presentation is listed within the XPharma catalog for product identification, label review, commercial reference, and documentation requests. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.';

  function buildProduct({ slug, name, category, categoryLabel, imageSrc, altName, subtitle, presentation, activeCompound, cardDescription, detailDescription }) {
    const description = category === 'injectable-singles' || category === 'injectable-blends'
      ? injectableDescription
      : oralDescription;

    const product = {
      slug,
      name,
      category,
      description
    };

    if (categoryLabel) {
      product.categoryLabel = categoryLabel;
    }

    if (subtitle) {
      product.subtitle = subtitle;
    }

    if (presentation) {
      product.presentation = presentation;
    }

    if (activeCompound) {
      product.activeCompound = activeCompound;
    }

    if (cardDescription) {
      product.cardDescription = cardDescription;
    }

    if (detailDescription) {
      product.detailDescription = detailDescription;
    }

    if (imageSrc) {
      product.image = {
        src: imageSrc,
        alt: `XPharma ${altName || name} product presentation`
      };
    }

    return product;
  }

  window.XPHARMA_PRODUCTS = [
    buildProduct({
      slug: 'boldebol-xp',
      name: 'Boldebol XP',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/boldebol-xp.png',
      subtitle: 'Boldenone Undecylenate · 200 mg / 10 ml',
      presentation: '200 mg / 10 ml',
      activeCompound: 'Boldenone Undecylenate',
      cardDescription: 'Injectable single presentation based on Boldenone Undecylenate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Boldebol XP is an injectable single presentation based on Boldenone Undecylenate, as identified on the product label. Boldenone Undecylenate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, treatment recommendations, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({ slug: 'durateston', name: 'Durateston', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/durateston-xp.png' }),
    buildProduct({
      slug: 'finaplix-xp',
      name: 'Finaplix XP',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/finaplix-xp.png',
      subtitle: 'Trenbolone Enanthate · 200 mg / 10 ml',
      presentation: '200 mg / 10 ml',
      activeCompound: 'Trenbolone Enanthate',
      cardDescription: 'Injectable single presentation based on Trenbolone Enanthate, a long-ester trenbolone compound associated with anabolic-androgenic activity.',
      detailDescription: 'Finaplix XP is an injectable single presentation based on Trenbolone Enanthate, as identified on the product label. Trenbolone Enanthate is the enanthate ester form of trenbolone, an anabolic-androgenic compound commonly referenced in technical compound references for its androgen receptor activity, anabolic profile, and longer-ester presentation.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests. The enanthate ester format distinguishes this presentation from shorter-ester trenbolone formats in technical product classification.\n\nThis page does not provide usage guidance, treatment recommendations, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'laurabolin',
      name: 'Laurabolin',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/laurabolin.png',
      subtitle: 'Nandrolone Laurate · 100 mg / 10 ml',
      presentation: '100 mg / 10 ml',
      activeCompound: 'Nandrolone Laurate',
      cardDescription: 'Injectable single presentation based on Nandrolone Laurate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Laurabolin is an injectable single presentation based on Nandrolone Laurate, as identified on the product label. Nandrolone Laurate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, treatment recommendations, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'masteron',
      name: 'Masteron',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/masteron.png',
      subtitle: 'Drostanolone Propionate · 100 mg / 10 ml',
      presentation: '100 mg / 10 ml',
      activeCompound: 'Drostanolone Propionate',
      cardDescription: 'Injectable single presentation based on Drostanolone Propionate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Masteron is an injectable single presentation based on Drostanolone Propionate, as identified on the product label. Drostanolone Propionate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, treatment recommendations, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'masteron-slow',
      name: 'Masteron Slow',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/masteron-slow.png',
      subtitle: 'Drostanolone Enanthate · 100 mg / 10 ml',
      presentation: '100 mg / 10 ml',
      activeCompound: 'Drostanolone Enanthate',
      cardDescription: 'Injectable single presentation based on Drostanolone Enanthate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Masteron Slow is an injectable single presentation based on Drostanolone Enanthate, as identified on the product label. Drostanolone Enanthate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, treatment recommendations, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'masteron-slow-200',
      name: 'Masteron Slow 200',
      altName: 'Masteron Slow',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/masteron-slow-200.png',
      subtitle: 'Drostanolone Enanthate · 200 mg / 10 ml',
      presentation: '200 mg / 10 ml',
      activeCompound: 'Drostanolone Enanthate',
      cardDescription: 'Injectable single presentation based on Drostanolone Enanthate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Masteron Slow 200 is an injectable single presentation based on Drostanolone Enanthate, as identified on the product label. Drostanolone Enanthate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, treatment recommendations, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({ slug: 'nadro-rapid-xp', name: 'Nadro Rapid XP', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/nadro-rapid-xp.png' }),
    buildProduct({ slug: 'nandrobolic', name: 'Nandrobolic', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/nandrobolic.png' }),
    buildProduct({
      slug: 'parabolan',
      name: 'Parabolan',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/parabolan.png',
      subtitle: 'Trenbolone Acetate · 100 mg / 10 ml',
      presentation: '100 mg / 10 ml',
      activeCompound: 'Trenbolone Acetate',
      cardDescription: 'Injectable single presentation based on Trenbolone Acetate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Parabolan is an injectable single presentation based on Trenbolone Acetate, an anabolic-androgenic compound identified on the product label. Trenbolone Acetate is commonly referenced in technical compound references for its androgen receptor activity and anabolic profile.\n\nThe product is presented in a 100 mg / 10 ml format and organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, treatment recommendations, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'primobolan',
      name: 'Primobolan',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/primobolan.png',
      subtitle: 'Methenolone Enanthate · 100 mg / 10 ml',
      presentation: '100 mg / 10 ml',
      activeCompound: 'Methenolone Enanthate',
      cardDescription: 'Injectable single presentation based on Methenolone Enanthate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Primobolan is an injectable single presentation based on Methenolone Enanthate, as identified on the product label. Methenolone Enanthate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, treatment recommendations, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'prop-test',
      name: 'Prop Test',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/prop-test.png',
      subtitle: 'Testosterone Propionate · 100 mg / 10 ml',
      presentation: '100 mg / 10 ml',
      activeCompound: 'Testosterone Propionate',
      cardDescription: 'Injectable single presentation based on Testosterone Propionate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Prop Test is an injectable single presentation based on Testosterone Propionate, as identified on the product label. Testosterone Propionate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, treatment recommendations, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'testex-xp',
      name: 'Testex XP',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/testex-xp.png',
      subtitle: 'Testosterone Cipionate · 200 mg / 10 ml',
      presentation: '200 mg / 10 ml',
      activeCompound: 'Testosterone Cipionate',
      cardDescription: 'Injectable single presentation based on Testosterone Cipionate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Testex XP is an injectable single presentation based on Testosterone Cipionate, as identified on the product label. Testosterone Cipionate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, treatment recommendations, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'testoviron',
      name: 'Testoviron',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/testoviron.png',
      subtitle: 'Testosterone Enanthate · 250 mg / 10 ml',
      presentation: '250 mg / 10 ml',
      activeCompound: 'Testosterone Enanthate',
      cardDescription: 'Injectable single presentation based on Testosterone Enanthate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Testoviron is an injectable single presentation based on Testosterone Enanthate, as identified on the product label. Testosterone Enanthate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, treatment recommendations, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'trestolona',
      name: 'Trestolona',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/trestolona.png',
      subtitle: '7α-Methyl-19-Nortestosterone · 50 mg / 10 ml',
      presentation: '50 mg / 10 ml',
      activeCompound: '7α-Methyl-19-Nortestosterone',
      cardDescription: 'Injectable single presentation based on 7α-Methyl-19-Nortestosterone, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Trestolona is an injectable single presentation based on 7α-Methyl-19-Nortestosterone, as identified on the product label. 7α-Methyl-19-Nortestosterone is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, treatment recommendations, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({ slug: 'winstrol', name: 'Winstrol', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/winstrol-20ml.png' }),
    buildProduct({ slug: 'winstrol-xp', name: 'Winstrol XP', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/winstrol-xp.png' }),
    buildProduct({ slug: 'wintrol', name: 'Wintrol', category: 'injectable-singles', imageSrc: 'assets/images/products/injectable-singles/wintrol.png' }),
    buildProduct({ slug: 'bulkstack-xp', name: 'Bulkstack XP', category: 'injectable-blends', imageSrc: 'assets/images/products/injectable-blends/bulkstack-xp.png' }),
    buildProduct({ slug: 'cutstak', name: 'Cutstak', category: 'injectable-blends', imageSrc: 'assets/images/products/injectable-blends/cutstak.png' }),
    buildProduct({ slug: 'pure-blood', name: 'Pure Blood', category: 'injectable-blends', imageSrc: 'assets/images/products/injectable-blends/pure-blood.png' }),
    buildProduct({ slug: 'tri-rage', name: 'Tri-Rage', category: 'injectable-blends', imageSrc: 'assets/images/products/injectable-blends/tri-rage.png' }),
    buildProduct({
      slug: 'anadrol-xp',
      name: 'Anadrol XP',
      category: 'oral-hormones',
      categoryLabel: 'Oral Hormones',
      imageSrc: 'assets/images/products/oral-hormones/anadrol-xp.png',
      subtitle: 'Oxymetholone · 50 mg / 30 capsules',
      presentation: '50 mg / 30 capsules',
      activeCompound: 'Oxymetholone',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'dianabol',
      name: 'Dianabol',
      category: 'oral-hormones',
      categoryLabel: 'Oral Hormones',
      imageSrc: 'assets/images/products/oral-hormones/dianabol.png',
      subtitle: 'Methandrostenolone · 10 mg / 100 capsules',
      presentation: '10 mg / 100 capsules',
      activeCompound: 'Methandrostenolone',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'oxandrol-xp-5mg',
      name: 'Oxandrol XP 5 mg',
      category: 'oral-hormones',
      categoryLabel: 'Oral Hormones',
      imageSrc: 'assets/images/products/oral-hormones/oxandrol-xp-5mg.png',
      subtitle: 'Oxandrolone · 5 mg / 100 capsules',
      presentation: '5 mg / 100 capsules',
      activeCompound: 'Oxandrolone',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'oxandrol-xp-10mg',
      name: 'Oxandrol XP 10 mg',
      category: 'oral-hormones',
      categoryLabel: 'Oral Hormones',
      imageSrc: 'assets/images/products/oral-hormones/oxandrol-xp-10mg.png',
      subtitle: 'Oxandrolone · 10 mg / 100 capsules',
      presentation: '10 mg / 100 capsules',
      activeCompound: 'Oxandrolone',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'oxandrol-xp-20mg',
      name: 'Oxandrol XP 20 mg',
      category: 'oral-hormones',
      categoryLabel: 'Oral Hormones',
      imageSrc: 'assets/images/products/oral-hormones/oxandrol-xp-20mg.png',
      subtitle: 'Oxandrolone · 20 mg / 100 capsules',
      presentation: '20 mg / 100 capsules',
      activeCompound: 'Oxandrolone',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'test-prop-xp',
      name: 'Test Prop XP',
      category: 'oral-hormones',
      categoryLabel: 'Oral Hormones',
      imageSrc: 'assets/images/products/oral-hormones/test-prop-xp.png',
      subtitle: 'Testosterone Propionate · 10 mg / 100 capsules',
      presentation: '10 mg / 100 capsules',
      activeCompound: 'Testosterone Propionate',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'winstrol-oral',
      name: 'Winstrol XP',
      category: 'oral-hormones',
      categoryLabel: 'Oral Hormones',
      imageSrc: 'assets/images/products/oral-hormones/winstrol-oral.png',
      subtitle: 'Stanozolol · 10 mg / 100 capsules',
      presentation: '10 mg / 100 capsules',
      activeCompound: 'Stanozolol',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'arimidex',
      name: 'Arimidex',
      category: 'oral-pharmaceuticals',
      categoryLabel: 'Oral Pharmaceuticals',
      imageSrc: 'assets/images/products/oral-pharmaceuticals/arimidex.png',
      subtitle: 'Anastrozole · 1 mg / 30 capsules',
      presentation: '1 mg / 30 capsules',
      activeCompound: 'Anastrozole',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'cialis-xp',
      name: 'Cialis XP',
      category: 'oral-pharmaceuticals',
      categoryLabel: 'Oral Pharmaceuticals',
      imageSrc: 'assets/images/products/oral-pharmaceuticals/cialis-xp.png',
      subtitle: 'Tadalafil · 20 mg / 30 capsules',
      presentation: '20 mg / 30 capsules',
      activeCompound: 'Tadalafil',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'clomid-xp',
      name: 'Clomid XP',
      category: 'oral-pharmaceuticals',
      categoryLabel: 'Oral Pharmaceuticals',
      imageSrc: 'assets/images/products/oral-pharmaceuticals/clomid-xp.png',
      subtitle: 'Clomiphene · 50 mg / 30 capsules',
      presentation: '50 mg / 30 capsules',
      activeCompound: 'Clomiphene',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'desobesi-m-xp',
      name: 'Desobesi-M XP',
      category: 'oral-pharmaceuticals',
      categoryLabel: 'Oral Pharmaceuticals',
      imageSrc: 'assets/images/products/oral-pharmaceuticals/desobesi-m-xp.png',
      subtitle: 'Femproporex · 25 mg / 30 capsules',
      presentation: '25 mg / 30 capsules',
      activeCompound: 'Femproporex',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'letrozol-2-5-xp',
      name: 'Letrozol 2.5 XP',
      category: 'oral-pharmaceuticals',
      categoryLabel: 'Oral Pharmaceuticals',
      imageSrc: 'assets/images/products/oral-pharmaceuticals/letrozol-2-5-xp.png',
      subtitle: 'Letrozole · 2.5 mg / 30 capsules',
      presentation: '2.5 mg / 30 capsules',
      activeCompound: 'Letrozole',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'proviron',
      name: 'Proviron',
      category: 'oral-pharmaceuticals',
      categoryLabel: 'Oral Pharmaceuticals',
      imageSrc: 'assets/images/products/oral-pharmaceuticals/proviron.png',
      subtitle: 'Mesterolone · 25 mg / 30 capsules',
      presentation: '25 mg / 30 capsules',
      activeCompound: 'Mesterolone',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'silimalon-xp',
      name: 'Silimalon XP',
      category: 'oral-pharmaceuticals',
      categoryLabel: 'Oral Pharmaceuticals',
      imageSrc: 'assets/images/products/oral-pharmaceuticals/silimalon-xp.png',
      subtitle: 'Silymarin · 300 mg / 30 capsules',
      presentation: '300 mg / 30 capsules',
      activeCompound: 'Silymarin',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'tamox-20-xp',
      name: 'Tamox 20 XP',
      category: 'oral-pharmaceuticals',
      categoryLabel: 'Oral Pharmaceuticals',
      imageSrc: 'assets/images/products/oral-pharmaceuticals/tamox-20-xp.png',
      subtitle: 'Tamoxifen · 20 mg / 30 capsules',
      presentation: '20 mg / 30 capsules',
      activeCompound: 'Tamoxifen',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 'citomel',
      name: 'Citomel',
      category: 'oral-thyroid-hormones',
      categoryLabel: 'Oral Thyroid Hormones',
      imageSrc: 'assets/images/products/oral-thyroid-hormones/citomel.png',
      subtitle: 'Triiodothyronine (T3) · 25 mcg / 60 capsules',
      presentation: '25 mcg / 60 capsules',
      activeCompound: 'Triiodothyronine (T3)',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    }),
    buildProduct({
      slug: 't4-xp',
      name: 'T4 XP',
      category: 'oral-thyroid-hormones',
      categoryLabel: 'Oral Thyroid Hormones',
      imageSrc: 'assets/images/products/oral-thyroid-hormones/t4-xp.png',
      subtitle: 'Thyroxine · 50 mcg / 60 capsules',
      presentation: '50 mcg / 60 capsules',
      activeCompound: 'Thyroxine',
      cardDescription: oralCardDescription,
      detailDescription: oralDetailDescription
    })
  ];
}());