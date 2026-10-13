# Mishaq Jewels — Storefront Tweaks & Performance Fixes

This repo contains custom frontend fixes and production adjustments written for [Mishaq Jewels](https://mishaqjewels.com/). The goal was to clean up mobile UI quirks, match brand styling guidelines, and resolve audit warnings related to Core Web Vitals and accessibility.

### Context & What Was Fixed

1. **Layout & Cumulative Layout Shift (CLS)**
   - Hardcoded dimensions on the main header logo were causing layout shifts during initial load. Added explicit aspect ratios and container constraints to keep layout shifts to a minimum.
   - Removed duplicate mobile drawer elements and cleaned up overlapping cart/close buttons.

2. **Brand & UI Adjustments**
   - Overrode theme defaults to enforce brand colors (emerald green buttons and gold accents on product titles).
   - Fixed contrast issues on discounted price tags (`<del>` elements) so secondary text passes readability checks.
   - Expanded mobile swipe touch targets on carousel pagination bullets to meet tap target guidelines (minimum 48x48px hit area).

3. **Accessibility (Icon Links)**
   - The theme template rendered multiple header links, social icons, and product card image anchors without inner text or screen-reader tags.
   - Wrote a lightweight jQuery snippet to dynamically attach descriptive `aria-label` tags to icon-only links across the site.

4. **LCP Optimization**
   - Added a high-priority preload tag for the mobile/desktop hero banner image to cut down Largest Contentful Paint time.

### Files Included

- `custom-styles.css` — All layout corrections, brand overrides, and contrast adjustments.
- `performance-accessibility.js` — Client-side ARIA label injection script.
- `preload-head.html` — Above-the-fold hero image preload snippet.

### Built With
- CSS3
- jQuery / Vanilla JS
- HTML5
