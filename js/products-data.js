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
      detailDescription: 'Boldebol XP is an injectable single presentation based on Boldenone Undecylenate, as identified on the product label. Boldenone Undecylenate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'durateston',
      name: 'Durateston',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/durateston-xp.png',
      subtitle: 'Testosterone Propionate, Phenylpropionate, Isocaproate, and Decanoate · 250 mg / 10 ml',
      presentation: '250 mg / 10 ml',
      activeCompound: 'Testosterone Propionate, Phenylpropionate, Isocaproate, and Decanoate',
      cardDescription: 'Injectable single presentation based on the multi-component composition identified on the product label and listed for XPharma catalog and commercial reference.',
      detailDescription: 'Durateston is an injectable single presentation based on the multi-component composition identified on the product label. The label lists 30 mg Testosterone Propionate, 60 mg Phenylpropionate, 60 mg Isocaproate, and 100 mg Decanoate in a 250 mg / 10 ml presentation.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'finaplix-xp',
      name: 'Finaplix XP',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/finaplix-xp.png',
      subtitle: 'Trenbolone Enanthate · 200 mg / 10 ml',
      presentation: '200 mg / 10 ml',
      activeCompound: 'Trenbolone Enanthate',
      cardDescription: 'Injectable single presentation based on Trenbolone Enanthate, a long-ester trenbolone compound associated with anabolic-androgenic activity.',
      detailDescription: 'Finaplix XP is an injectable single presentation based on Trenbolone Enanthate, as identified on the product label. Trenbolone Enanthate is the enanthate ester form of trenbolone, an anabolic-androgenic compound commonly referenced in technical compound references for its androgen receptor activity, anabolic profile, and longer-ester presentation.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests. The enanthate ester format distinguishes this presentation from shorter-ester trenbolone formats in technical product classification.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'dhb',
      name: 'DHB',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/dhb.png',
      subtitle: 'Dihydroboldenone Cypionate · 150 mg / 10 ml',
      presentation: '150 mg / 10 ml',
      activeCompound: 'Dihydroboldenone Cypionate',
      cardDescription: 'Injectable single presentation based on Dihydroboldenone Cypionate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'DHB is an injectable single presentation based on Dihydroboldenone Cypionate, as identified on the product label. Dihydroboldenone, sometimes referenced as 1-Testosterone in technical compound literature, is structurally related to Boldenone and is classified as an anabolic-androgenic compound. The cypionate ester format distinguishes this presentation from other ester-based Dihydroboldenone presentations in product classification and technical catalog reference.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      detailDescription: 'Laurabolin is an injectable single presentation based on Nandrolone Laurate, as identified on the product label. Nandrolone Laurate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      detailDescription: 'Masteron is an injectable single presentation based on Drostanolone Propionate, as identified on the product label. Drostanolone Propionate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      detailDescription: 'Masteron Slow is an injectable single presentation based on Drostanolone Enanthate, as identified on the product label. Drostanolone Enanthate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'masteron-slow-200',
      name: 'Masteron Slow',
      altName: 'Masteron Slow',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/masteron-slow-200.png',
      subtitle: 'Drostanolone Enanthate · 200 mg / 10 ml',
      presentation: '200 mg / 10 ml',
      activeCompound: 'Drostanolone Enanthate',
      cardDescription: 'Injectable single presentation based on Drostanolone Enanthate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Masteron Slow is an injectable single presentation based on Drostanolone Enanthate, as identified on the product label. The label describes a 200 mg / 10 ml presentation for this product. Drostanolone Enanthate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'nadro-rapid-xp',
      name: 'Nandro Rapid XP',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/nadro-rapid-xp.png',
      subtitle: 'Nandrolone Phenylpropionate (NPP) · 100 mg / 10 ml',
      presentation: '100 mg / 10 ml',
      activeCompound: 'Nandrolone Phenylpropionate (NPP)',
      cardDescription: 'Injectable single presentation based on Nandrolone Phenylpropionate (NPP), as identified on the product label and listed for XPharma catalog and commercial reference.',
      detailDescription: 'Nandro Rapid XP is an injectable single presentation based on Nandrolone Phenylpropionate (NPP), as identified on the product label. Nandrolone Phenylpropionate is commonly referenced in technical compound references as the phenylpropionate ester form of nandrolone, a classification used to distinguish this presentation from longer-ester nandrolone formats in product identification and catalog reference.\n\nThe label describes a 100 mg / 10 ml presentation for this product. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'nandrobolic',
      name: 'Nandrobolic',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/nandrobolic.png',
      subtitle: 'Nandrolone Decanoate · 200 mg / 10 ml',
      presentation: '200 mg / 10 ml',
      activeCompound: 'Nandrolone Decanoate',
      cardDescription: 'Injectable single presentation based on Nandrolone Decanoate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Nandrobolic is an injectable single presentation based on Nandrolone Decanoate, as identified on the product label. Nandrolone Decanoate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'parabolan',
      name: 'Parabolan',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/parabolan.png',
      subtitle: 'Trenbolone Acetate · 100 mg / 10 ml',
      presentation: '100 mg / 10 ml',
      activeCompound: 'Trenbolone Acetate',
      cardDescription: 'Injectable single presentation based on Trenbolone Acetate, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Parabolan is an injectable single presentation based on Trenbolone Acetate, an anabolic-androgenic compound identified on the product label. Trenbolone Acetate is commonly referenced in technical compound references for its androgen receptor activity and anabolic profile.\n\nThe product is presented in a 100 mg / 10 ml format and organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      detailDescription: 'Primobolan is an injectable single presentation based on Methenolone Enanthate, as identified on the product label. Methenolone Enanthate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      detailDescription: 'Prop Test is an injectable single presentation based on Testosterone Propionate, as identified on the product label. Testosterone Propionate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      detailDescription: 'Testex XP is an injectable single presentation based on Testosterone Cipionate, as identified on the product label. Testosterone Cipionate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      detailDescription: 'Testoviron is an injectable single presentation based on Testosterone Enanthate, as identified on the product label. Testosterone Enanthate is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'trestolona',
      name: 'Ment-Trestolona',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/trestolona.png',
      subtitle: '7α-Methyl-19-Nortestosterone · 50 mg / 10 ml',
      presentation: '50 mg / 10 ml',
      activeCompound: '7α-Methyl-19-Nortestosterone',
      cardDescription: 'Injectable single presentation based on 7α-Methyl-19-Nortestosterone, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Ment-Trestolona is an injectable single presentation based on 7α-Methyl-19-Nortestosterone, as identified on the product label. 7α-Methyl-19-Nortestosterone, sometimes referenced as MENT in technical compound references, is commonly described for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'winstrol',
      name: 'Winstrol XP',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/winstrol-20ml.png',
      subtitle: 'Stanozolol · 50 mg / 20 ml',
      presentation: '50 mg / 20 ml',
      activeCompound: 'Stanozolol',
      cardDescription: 'Injectable single presentation based on Stanozolol, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Winstrol XP is an injectable single presentation based on Stanozolol, as identified on the product label. The label describes a depot oil presentation in a 50 mg / 20 ml format. Stanozolol is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'winstrol-xp',
      name: 'Winstrol XP',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/winstrol-xp.png',
      subtitle: 'Stanozolol · 50 mg / 30 ml',
      presentation: '50 mg / 30 ml',
      activeCompound: 'Stanozolol',
      cardDescription: 'Injectable single presentation based on Stanozolol, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Winstrol XP is an injectable single presentation based on Stanozolol, as identified on the product label. The label describes a depot oil presentation in a 50 mg / 30 ml format. Stanozolol is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'winstrol-xp-100',
      name: 'Winstrol XP',
      category: 'injectable-singles',
      imageSrc: 'assets/images/products/injectable-singles/winstrol-xp-100.png',
      subtitle: 'Stanozolol · 100 mg / 30 ml',
      presentation: '100 mg / 30 ml',
      activeCompound: 'Stanozolol',
      cardDescription: 'Injectable single presentation based on Stanozolol, an anabolic-androgenic compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Winstrol XP is an injectable single presentation based on Stanozolol, as identified on the product label. The label describes a depot oil presentation in a 100 mg / 30 ml format. Stanozolol is commonly referenced in technical compound references for its androgen receptor activity, anabolic-androgenic profile, and product classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'bulkstack-xp',
      name: 'Bulkstack XP',
      category: 'injectable-blends',
      imageSrc: 'assets/images/products/injectable-blends/bulkstack-xp.png',
      subtitle: 'Testosterone Cipionate, Nandrolone Decanoate, Boldenone Undecylenate · 300 mg / 10 ml',
      presentation: '300 mg / 10 ml',
      activeCompound: 'Testosterone Cipionate, Nandrolone Decanoate, Boldenone Undecylenate',
      cardDescription: 'Injectable blend presentation based on Testosterone Cipionate, Nandrolone Decanoate, and Boldenone Undecylenate, anabolic-androgenic compounds listed for XPharma catalog and commercial reference.',
      detailDescription: 'Bulkstack XP is an injectable blend presentation based on Testosterone Cipionate, Nandrolone Decanoate, and Boldenone Undecylenate, as identified on the product label. The label describes a combined composition of 100 mg Testosterone Cipionate, 100 mg Nandrolone Decanoate, and 100 mg Boldenone Undecylenate in a 300 mg / 10 ml presentation. These compounds are commonly referenced in technical compound references for androgen receptor activity, anabolic-androgenic profile, and blend classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'cutstak',
      name: 'Cutstak',
      category: 'injectable-blends',
      imageSrc: 'assets/images/products/injectable-blends/cutstak.png',
      subtitle: 'Testosterone Propionate, Trenbolone Acetate, Drostanolone Propionate · 200 mg / 10 ml',
      presentation: '200 mg / 10 ml',
      activeCompound: 'Testosterone Propionate, Trenbolone Acetate, Drostanolone Propionate',
      cardDescription: 'Injectable blend presentation based on Testosterone Propionate, Trenbolone Acetate, and Drostanolone Propionate, anabolic-androgenic compounds listed for XPharma catalog and commercial reference.',
      detailDescription: 'Cutstak is an injectable blend presentation based on Testosterone Propionate, Trenbolone Acetate, and Drostanolone Propionate, as identified on the product label. The label describes a combined composition of 100 mg Testosterone Propionate, 50 mg Trenbolone Acetate, and 50 mg Drostanolone Propionate in a 200 mg / 10 ml presentation. These compounds are commonly referenced in technical compound references for androgen receptor activity, anabolic-androgenic profile, and blend classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'pure-blood',
      name: 'Pure Blood',
      category: 'injectable-blends',
      imageSrc: 'assets/images/products/injectable-blends/pure-blood.png',
      subtitle: 'Trenbolone Enanthate, Nandrolone Decanoate, Testosterone Enanthate · 300 mg / 10 ml',
      presentation: '300 mg / 10 ml',
      activeCompound: 'Trenbolone Enanthate, Nandrolone Decanoate, Testosterone Enanthate',
      cardDescription: 'Injectable blend presentation based on Trenbolone Enanthate, Nandrolone Decanoate, and Testosterone Enanthate, anabolic-androgenic compounds listed for XPharma catalog and commercial reference.',
      detailDescription: 'Pure Blood is an injectable blend presentation based on Trenbolone Enanthate, Nandrolone Decanoate, and Testosterone Enanthate, as identified on the product label. The label describes a combined composition of 100 mg Trenbolone Enanthate, 50 mg Nandrolone Decanoate, and 150 mg Testosterone Enanthate in a 300 mg / 10 ml presentation. These compounds are commonly referenced in technical compound references for androgen receptor activity, anabolic-androgenic profile, and blend classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'tri-rage',
      name: 'Tri-Rage',
      category: 'injectable-blends',
      imageSrc: 'assets/images/products/injectable-blends/tri-rage.png',
      subtitle: 'Stanozolol Depot, Testosterone Propionate, Trenbolone Acetate · 250 mg / 10 ml',
      presentation: '250 mg / 10 ml',
      activeCompound: 'Stanozolol Depot, Testosterone Propionate, Trenbolone Acetate',
      cardDescription: 'Injectable blend presentation based on Stanozolol Depot, Testosterone Propionate, and Trenbolone Acetate, anabolic-androgenic compounds listed for XPharma catalog and commercial reference.',
      detailDescription: 'Tri-Rage is an injectable blend presentation based on Stanozolol Depot, Testosterone Propionate, and Trenbolone Acetate, as identified on the product label. The label describes a combined composition of 50 mg Stanozolol Depot, 100 mg Testosterone Propionate, and 100 mg Trenbolone Acetate in a 250 mg / 10 ml presentation. These compounds are commonly referenced in technical compound references for androgen receptor activity, anabolic-androgenic profile, and blend classification.\n\nThis product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'anadrol-xp',
      name: 'Anadrol XP',
      category: 'oral-hormones',
      categoryLabel: 'Oral Hormones',
      imageSrc: 'assets/images/products/oral-hormones/anadrol-xp.png',
      subtitle: 'Oxymetholone · 50 mg / 30 capsules',
      presentation: '50 mg / 30 capsules',
      activeCompound: 'Oxymetholone',
      cardDescription: 'Oral hormone presentation based on Oxymetholone, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Anadrol XP is an oral hormone presentation based on Oxymetholone, as identified on the product label. Oxymetholone is commonly referenced in technical steroid literature as a 17-alpha-alkylated anabolic-androgenic compound, a classification used for compound identification and catalog reference.\n\nThe label identifies a 50 mg / 30 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      cardDescription: 'Oral hormone presentation based on Methandrostenolone, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Dianabol is an oral hormone presentation based on Methandrostenolone, as identified on the product label. Methandrostenolone is commonly referenced in technical steroid literature as a 17-alpha-alkylated anabolic-androgenic compound, a classification used for compound identification and product differentiation.\n\nThe label identifies a 10 mg / 100 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'oxandrol-xp-5mg',
      name: 'Oxandrol XP',
      category: 'oral-hormones',
      categoryLabel: 'Oral Hormones',
      imageSrc: 'assets/images/products/oral-hormones/oxandrol-xp-5mg.png',
      subtitle: 'Oxandrolone · 5 mg / 100 capsules',
      presentation: '5 mg / 100 capsules',
      activeCompound: 'Oxandrolone',
      cardDescription: 'Oral hormone presentation based on Oxandrolone, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Oxandrol XP is an oral hormone presentation based on Oxandrolone, as identified on the product label. Oxandrolone is commonly referenced in technical steroid literature as a dihydrotestosterone-derived, 17-alpha-alkylated anabolic-androgenic compound, a classification used for compound identification and catalog reference.\n\nThe label identifies a 5 mg / 100 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'oxandrol-xp-10mg',
      name: 'Oxandrol XP',
      category: 'oral-hormones',
      categoryLabel: 'Oral Hormones',
      imageSrc: 'assets/images/products/oral-hormones/oxandrol-xp-10mg.png',
      subtitle: 'Oxandrolone · 10 mg / 100 capsules',
      presentation: '10 mg / 100 capsules',
      activeCompound: 'Oxandrolone',
      cardDescription: 'Oral hormone presentation based on Oxandrolone, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Oxandrol XP is an oral hormone presentation based on Oxandrolone, as identified on the product label. Oxandrolone is commonly referenced in technical steroid literature as a dihydrotestosterone-derived, 17-alpha-alkylated anabolic-androgenic compound, a classification used for compound identification and catalog reference.\n\nThe label identifies a 10 mg / 100 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    }),
    buildProduct({
      slug: 'oxandrol-xp-20mg',
      name: 'Oxandrol XP',
      category: 'oral-hormones',
      categoryLabel: 'Oral Hormones',
      imageSrc: 'assets/images/products/oral-hormones/oxandrol-xp-20mg.png',
      subtitle: 'Oxandrolone · 20 mg / 100 capsules',
      presentation: '20 mg / 100 capsules',
      activeCompound: 'Oxandrolone',
      cardDescription: 'Oral hormone presentation based on Oxandrolone, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Oxandrol XP is an oral hormone presentation based on Oxandrolone, as identified on the product label. Oxandrolone is commonly referenced in technical steroid literature as a dihydrotestosterone-derived, 17-alpha-alkylated anabolic-androgenic compound, a classification used for compound identification and catalog reference.\n\nThe label identifies a 20 mg / 100 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      cardDescription: 'Oral hormone presentation based on Testosterone Propionate, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Test Prop XP is an oral hormone presentation based on Testosterone Propionate, as identified on the product label. Testosterone Propionate is commonly classified in technical compound literature as an esterified testosterone compound, and this listing follows the label identification used for product classification and catalog reference.\n\nThe label identifies a 10 mg / 100 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      cardDescription: 'Oral hormone presentation based on Stanozolol, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Winstrol XP is an oral hormone presentation based on Stanozolol, as identified on the product label. Stanozolol is commonly referenced in technical steroid literature as a synthetic anabolic-androgenic compound, a classification used for stanozolol-based product identification and label review.\n\nThe label identifies a 10 mg / 100 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      cardDescription: 'Oral pharmaceutical presentation based on Anastrozole, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Arimidex is an oral pharmaceutical presentation based on Anastrozole, as identified on the product label. Anastrozole is commonly classified in pharmaceutical literature as a nonsteroidal aromatase inhibitor, a designation used for ingredient identification and category reference.\n\nThe label identifies a 1 mg / 30 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      cardDescription: 'Oral pharmaceutical presentation based on Tadalafil, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Cialis XP is an oral pharmaceutical presentation based on Tadalafil, as identified on the product label. Tadalafil is commonly classified in pharmaceutical literature as a phosphodiesterase type 5 inhibitor, a designation used for compound identification and commercial reference.\n\nThe label identifies a 20 mg / 30 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      cardDescription: 'Oral pharmaceutical presentation based on Clomiphene, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Clomid XP is an oral pharmaceutical presentation based on Clomiphene, as identified on the product label. Clomiphene is commonly referenced in pharmaceutical literature as a selective estrogen receptor modulator, a classification used for ingredient identification and label review.\n\nThe label identifies a 50 mg / 30 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      cardDescription: 'Oral pharmaceutical presentation based on Femproporex, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Desobesi-M XP is an oral pharmaceutical presentation based on Femproporex, as identified on the product label. Femproporex is commonly referenced in pharmaceutical and regulatory literature as a substituted amphetamine derivative, a classification used for compound identification and documentation reference.\n\nThe label identifies a 25 mg / 30 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      cardDescription: 'Oral pharmaceutical presentation based on Letrozole, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Letrozol 2.5 XP is an oral pharmaceutical presentation based on Letrozole, as identified on the product label. Letrozole is commonly classified in pharmaceutical literature as a nonsteroidal aromatase inhibitor, a designation used for ingredient identification and category reference.\n\nThe label identifies a 2.5 mg / 30 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      cardDescription: 'Oral pharmaceutical presentation based on Mesterolone, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Proviron is an oral pharmaceutical presentation based on Mesterolone, as identified on the product label. Mesterolone is commonly referenced in technical steroid literature as a dihydrotestosterone-derived androgenic compound, a classification used for product identification and catalog reference.\n\nThe label identifies a 25 mg / 30 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      cardDescription: 'Oral pharmaceutical presentation based on Silymarin, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Silimalon XP is an oral pharmaceutical presentation based on Silymarin, as identified on the product label. Silymarin is commonly referenced in botanical and pharmaceutical literature as a flavonolignan complex derived from Silybum marianum, a classification used for ingredient identification and formulation reference.\n\nThe label identifies a 300 mg / 30 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      cardDescription: 'Oral pharmaceutical presentation based on Tamoxifen, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Tamox 20 XP is an oral pharmaceutical presentation based on Tamoxifen, as identified on the product label. Tamoxifen is commonly referenced in pharmaceutical literature as a selective estrogen receptor modulator, a classification used for ingredient identification and label review.\n\nThe label identifies a 20 mg / 30 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      cardDescription: 'Oral thyroid hormone presentation based on Triiodothyronine (T3), a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'Citomel is an oral thyroid hormone presentation based on Triiodothyronine (T3), as identified on the product label. Triiodothyronine is commonly referenced in endocrine literature as the active triiodothyronine form within thyroid hormone classification, a designation used for compound identification and catalog reference.\n\nThe label identifies a 25 mcg / 60 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
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
      cardDescription: 'Oral thyroid hormone presentation based on Thyroxine, a compound listed for XPharma catalog and commercial reference.',
      detailDescription: 'T4 XP is an oral thyroid hormone presentation based on Thyroxine, as identified on the product label. Thyroxine is commonly referenced in endocrine literature as a tetraiodinated thyroid hormone within iodothyronine classification, a designation used for compound identification and catalog reference.\n\nThe label identifies a 50 mcg / 60 capsules presentation for this listing. This product is organized within the XPharma catalog for product identification, label review, commercial reference, and documentation requests.\n\nThis page does not provide usage guidance, medical advice, or performance claims. Composition, labeling, regulatory status, market availability, and supporting documentation should be confirmed through official XPharma channels.'
    })
  ];
}());