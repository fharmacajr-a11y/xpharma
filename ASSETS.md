# XPharma Asset Guide

All files should be stored under `assets/images/` using the folders below.
Use only images with a clear commercial license or written company authorization.
Accepted formats: `.jpg` for photography, `.png` for transparency, and `.webp` for optimized delivery.

---

## Current Folder Structure

- `assets/images/brand/` - official logos, brand symbol, future favicon
- `assets/images/institutional/` - laboratory, team, facility, quality-control environments
- `assets/images/products/` - catalog images, packaging visuals, product cards, campaign visuals

---

## Brand Assets Already Added

| File | Current use | Notes |
|---|---|---|
| `brand/logo-xpharma-premium-horizontal.png` | Header and footer | Main logo used across the site |
| `brand/logo-xpharma-premium-with-symbol.jpg` | Reserved for future use | Not used in this round |

---

## Product Assets Already Added

| File | Current use | Suggested alt text |
|---|---|---|
| `products/lipored-hd-bottle.jpg` | LipoRED HD page and product cards | LipoRED HD bottle with a red and white label |
| `products/lipored-hd-campaign.jpg` | LipoRED HD campaign visual | LipoRED HD XPharma Premium campaign visual |
| `products/xpharma-premium-product-boxes.jpg` | Home hero and catalog reference | XPharma Premium product boxes on a clean light background |
| `products/xpharma-premium-red-package-front.jpg` | Home, About, Products, and LipoRED HD pages | Red XPharma Premium package |

---

## Pending Assets - High Priority

Visible images for the highest-traffic institutional sections. Current HTML placeholders remain in place until these assets are authorized for use.

| Expected file | Page(s) | Ratio | Minimum resolution | Type | Suggested alt text | Notes |
|---|---|---|---|---|---|---|
| `institutional/team.jpg` | about.html - Who We Are section | 4:5 | 800 x 1000 px | Real photo - team in laboratory | XPharma team in a research laboratory | Appears near the top of the About page |
| `institutional/facility.jpg` | about.html - Technology section | 16:9 | 1200 x 675 px | Real photo - production or quality-control environment | XPharma production facility or quality control environment | Wide image for the technology section |

---

## Pending Assets - Medium Priority

Additional product and institutional visuals that can improve the catalog and supporting pages.

| Expected file | Page(s) | Ratio | Minimum resolution | Type | Suggested alt text | Notes |
|---|---|---|---|---|---|---|
| `products/product-performance.jpg` | index.html + products.html | 1:1 | 600 x 600 px | Product or packaging photo | XPharma Performance Pro product presentation | Use only authorized commercial imagery |
| `products/product-presentation.jpg` | index.html + products.html | 1:1 | 600 x 600 px | Product or packaging photo | XPharma product presentation | Use only authorized commercial imagery |
| `products/product-wellness.jpg` | index.html + products.html | 1:1 | 600 x 600 px | Product or packaging photo | XPharma Wellness and Vital product presentation | Use only authorized commercial imagery |

---

## Pending Assets - Product Card Placeholders

Each file corresponds to a product card currently represented by a placeholder in `products.html`.
Do not use imagery that implies unauthorized health-related or market-authorization claims.

| Expected file | Product | Ratio | Minimum resolution | Type | Suggested alt text |
|---|---|---|---|---|---|
| `products/performance-line.jpg` | Performance Line | 1:1 | 600 x 600 px | Product or packaging photo | Performance line product presentation |
| `products/performance-documentation.jpg` | Performance Documentation | 1:1 | 600 x 600 px | Product or packaging photo | Performance documentation product presentation |
| `products/performance-portfolio.jpg` | Performance Portfolio | 1:1 | 600 x 600 px | Product or packaging photo | Performance portfolio product presentation |
| `products/product-documentation.jpg` | Product Documentation | 1:1 | 600 x 600 px | Product or packaging photo | Product documentation presentation |
| `products/quality-review.jpg` | Quality Review | 1:1 | 600 x 600 px | Product or packaging photo | Quality review product presentation |
| `products/wellness-line.jpg` | Wellness Line | 1:1 | 600 x 600 px | Product or packaging photo | Wellness line product presentation |
| `products/wellness-documentation.jpg` | Wellness Documentation | 1:1 | 600 x 600 px | Product or packaging photo | Wellness documentation product presentation |
| `products/essential-nutrition.jpg` | Essential Nutrition | 1:1 | 600 x 600 px | Product or packaging photo | Essential nutrition product presentation |
| `products/recovery-line.jpg` | Recovery Line | 1:1 | 600 x 600 px | Product or packaging photo | Recovery line product presentation |
| `products/recovery-documentation.jpg` | Recovery Documentation | 1:1 | 600 x 600 px | Product or packaging photo | Recovery documentation product presentation |
| `products/commercial-portfolio.jpg` | Commercial Portfolio | 1:1 | 600 x 600 px | Product or packaging photo | Commercial portfolio product presentation |

---

## Quality and License Requirements

- Prefer real company photography for laboratory, team, production, and quality-control contexts.
- If stock photography is used, require a clear commercial license or equivalent authorization.
- Do not use AI-generated images unless their license is clear and compatible with commercial use.
- Optimize every file before upload:
  - Use Squoosh, sharp, or an equivalent optimization tool.
  - Keep product `.jpg` files below 200 KB when possible.
  - Keep hero and wide institutional images below 400 KB when possible.
  - Consider adding `.webp` versions for modern browsers.
- Use exact documented paths when replacing placeholders.

---

## Replacing Placeholders

The current placeholders were not replaced in this language update. When visual replacement happens, use the documented folders and authorized alt text.

```html
<!-- Future example -->
<img src="assets/images/institutional/team.jpg"
     alt="XPharma team in a research laboratory"
     width="800" height="1000"
     loading="lazy"
     decoding="async">
```

Total pending images: **16**
(2 high priority, 3 medium priority, 11 product card placeholders)
