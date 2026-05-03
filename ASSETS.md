# XPharma Asset Inventory

This document reflects the current asset structure verified during the pre-publication audit.
The current identity layer includes a canonical header logo, favicon set, and the source logo used to derive them.

---

## Verified Project Baseline

- 52 public HTML files are currently part of the site output: 10 in the root, 39 in `products/`, and 3 in `apparel/`.
- The 39 routes created from `js/product-routes.js` match the 39 generated files in `products/`.
- `product.html` remains in the repository as a legacy fallback and should stay for now.
- Header identity now uses `assets/images/logos/header/xpharma-logo-header.png` with shared favicons in `assets/images/favicons/` and `favicon.ico` at the project root.
- Review candidates are classified below as placeholders, reserved assets, or assets pending publication review.

---

## Current Asset Structure

| Folder | Status | Notes |
|---|---|---|
| `assets/docs/lipored-hd/` | In use | Downloadable LipoRED HD manual |
| `assets/icons/` | Empty | Present in the repository, but currently has no files or published references |
| `assets/images/apparel/` | In use | 12 image files supporting the 3 apparel detail pages |
| `assets/images/brand/` | Mixed | Source logo, reserved logo, and review candidates |
| `assets/images/home/` | In use | Delivery WebP assets for the 3 featured home cards and Who We Are section image |
| `assets/images/favicons/` | In use | Shared PNG favicon set for root pages and subfolders |
| `assets/images/institutional/` | In use + placeholder | 2 published images plus 1 `.gitkeep` placeholder |
| `assets/images/logos/header/` | In use | Canonical header logo used by root pages, apparel pages, and generated product pages |
| `assets/images/logos/footer/` | In use | Footer logos in `.png` and `.webp` |
| `assets/images/products/` | Mixed | Root product marketing images, product subfolders, and 1 `.gitkeep` placeholder |
| `assets/images/products/injectable-blends/` | In use | Injectable blend product renders used by generated product pages |
| `assets/images/products/injectable-singles/` | In use | Injectable single product renders used by generated product pages |
| `assets/images/products/lipored-hd/` | Mixed | Active LipoRED HD visuals, reserved carton renders, and review candidates |
| `assets/images/products/oral-hormones/` | In use | Source images used for OG metadata and product references |
| `assets/images/products/oral-hormones/optimized/` | In use | Delivery images rendered inside generated oral hormone product pages |
| `assets/images/products/oral-pharmaceuticals/` | In use | Source images used for OG metadata and product references |
| `assets/images/products/oral-pharmaceuticals/optimized/` | In use | Delivery images rendered inside generated oral pharmaceutical product pages |
| `assets/images/products/oral-thyroid-hormones/` | In use | Source images used for OG metadata and product references |
| `assets/images/products/oral-thyroid-hormones/optimized/` | In use | Delivery images rendered inside generated thyroid product pages |
| `assets/images/seals/` | In use | Footer certification seals |

---

## Assets Currently In Use

| Files | Current use |
|---|---|
| `favicon.ico` | Root favicon for browsers that resolve the icon from the site root |
| `assets/docs/lipored-hd/manual-lipo-red-hd-pt-en.pdf` | Download button on the LipoRED HD page |
| `assets/images/apparel/*.jpg`, `assets/images/apparel/*.png`, `assets/images/apparel/*.webp` | Front and back media for the 3 apparel product pages |
| `assets/images/brand/logo-oficial.png` | Source file used to derive the current header logo and favicon set |
| `assets/images/favicons/favicon-32x32.png`, `assets/images/favicons/favicon-48x48.png`, `assets/images/favicons/apple-touch-icon.png` | Shared favicon and touch icon files for root pages and subfolders |
| `assets/images/home/home-card-catalog-standard.webp` | Full Catalog featured card on the home page |
| `assets/images/home/home-card-lipored-standard.webp` | LipoRED HD featured card on the home page |
| `assets/images/home/home-card-apparel-standard.webp` | XPharma Apparel featured card on the home page |
| `assets/images/institutional/about-lab-environment.png` | About page institutional visual |
| `assets/images/institutional/facility.png` | About page facility and technology visual |
| `assets/images/logos/header/xpharma-logo-header.png` | Canonical header logo and assurance logo asset |
| `assets/images/logos/footer/*.png`, `assets/images/logos/footer/*.webp` | Footer partner and brand logo rendering |
| `assets/images/products/injectable-blends/*.png`, `assets/images/products/injectable-blends/*.webp` | Generated product pages for injectable blends |
| `assets/images/products/injectable-singles/*.png`, `assets/images/products/injectable-singles/*.webp` | Generated product pages for injectable singles |
| `assets/images/products/oral-hormones/*.png` and `assets/images/products/oral-hormones/optimized/*.png`, `assets/images/products/oral-hormones/optimized/*.webp` | OG/source assets and rendered product media for oral hormone products |
| `assets/images/products/oral-pharmaceuticals/*.png` and `assets/images/products/oral-pharmaceuticals/optimized/*.png`, `assets/images/products/oral-pharmaceuticals/optimized/*.webp` | OG/source assets and rendered product media for oral pharmaceutical products |
| `assets/images/products/oral-thyroid-hormones/*.png` and `assets/images/products/oral-thyroid-hormones/optimized/*.png`, `assets/images/products/oral-thyroid-hormones/optimized/*.webp` | OG/source assets and rendered product media for thyroid hormone products |
| `assets/images/home/injectable-premium-presentation-clean.webp` | Injectable Premium two-carton presentation (background removed); used in the About / Who We Are section on the home page |
| `assets/images/products/lipored-hd/lipored-hd-banner.png`, `assets/images/products/lipored-hd/lipored-hd-banner.webp` | LipoRED HD banner section |
| `assets/images/products/lipored-hd/lipored-hd-documentation.png`, `assets/images/products/lipored-hd/lipored-hd-documentation.webp` | LipoRED HD documentation section |
| `assets/images/products/lipored-hd/lipored-hd-vial-clean.webp` | LipoRED HD canonical vial asset; used in visual presentation section |
| `assets/images/seals/seal-fda.png`, `assets/images/seals/seal-premium-quality.png` | Footer seals on public pages |

---

## Placeholder Files Kept Intentionally

These files are not public assets. They are repository placeholders and should remain classified as such until a cleanup round is approved.

| File | Purpose |
|---|---|
| `assets/images/.gitkeep` | Historical placeholder file; not referenced by public output |
| `assets/images/institutional/.gitkeep` | Historical placeholder file; not referenced by public output |
| `assets/images/products/.gitkeep` | Historical placeholder file; not referenced by public output |

---

## Reserved For Future Use

These files are intentionally kept in the repository even though they are not referenced by the current HTML, CSS, JS, or generated routes.

| File | Reason |
|---|---|
| `assets/images/brand/logo-xpharma-premium-with-symbol.jpg` | Reserved alternate brand lockup for a future design round |
| `assets/images/products/injectable-premium-carton-front.jpg` | Reserved injectable premium carton visual; not LipoRED HD |
| `assets/images/products/injectable-premium-carton-front.webp` | WebP pair for the reserved injectable premium carton visual |

---

## Orphan Assets Requiring Review Before Publication

These files are present in the repository but were not found in live HTML, CSS, JS, or generated product routes during the audit. No deletion or move is authorized in this pass.

| File | Current audit status |
|---|---|
| `assets/images/brand/logo-mr.jpg` | Not referenced; review whether it belongs in active brand assets or a local archive |

---

## Future Upload Standards

- Use only company-owned or commercially authorized imagery.
- Prefer `.jpg` for photography, `.png` for transparency, and `.webp` when a delivery pair is needed.
- Use exact documented paths when replacing placeholders or enabling reserved assets.
- Re-audit references before publishing any currently orphan or reserved file.
