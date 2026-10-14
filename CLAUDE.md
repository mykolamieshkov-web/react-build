# React Build — Final State

## Session Work

Fixed build errors. Established image workflow. Vite config complete.

## Key Changes

Vite config (vite.config.js):
- ViteImageOptimizer enabled with quality 75
- includePublic: true (optimizes /public/img/)
- rollupOptions for webp output to img/ folder
- Supports jpg, png, jpeg, gif, svg auto-conversion to webp on build

Folder structure:
- src/styles/main.scss (entry point, not src/assets/styles/)
- public/img/ (images, originals stay, webp generated on build)
- public/videos/ (media files)
- public/fonts/ (typography)

Image pattern in JSX:
```jsx
<picture>
  <source srcSet="/img/banner.webp" type="image/webp" />
  <img 
    src="/img/banner.jpg" 
    alt="Descriptive alt text, not just 'image'"
  />
</picture>
```

Dev workflow: jpg/png load as fallback (webp not generated yet, no errors)
Build workflow: npm run build generates webp automatically, both formats in dist
Hosting: webp serves first (smaller), jpg fallback for old browsers

## Next Steps

Clean build:
- rm -rf dist
- npm cache clean --force
- npm run build
- npm run dev

Test on localhost:5173. Images load, no console errors.

## Ready For

HeroSection component styling (colors, fonts)
Services section build
Google Ads integration

---
example of writing scss BEM nesting using my custom media-quaries from ./media.scss
// ServiceSection.scss
// No @use lines: `media` and the mixins are injected by vite.config.js

.service {
  --service-gap: 24px;
  padding: 96px 0;

  @include media.tablet-b { padding: 64px 0; }
  @include media.tablet   { padding: 48px 0; }

  // "__container" also picks up width / max-width / padding from the
  // global [class*="__container"] rule in _utilities.scss
  &__container {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  // Header: title left, lead right, wraps gracefully
  &__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: var(--service-gap);

    @include media.tablet-b {
      flex-direction: column;
      align-items: flex-start;
    }
  }

  &__title {
    flex: 1 1 320px;
    max-width: 640px;
    margin: 0;
  }

  &__lead {
    flex: 0 1 360px;
    margin: 0;
  }

  // Card grid built with flex-wrap + calc, no grid needed
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: var(--service-gap);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__item {
    // 3 columns: (100% - 2 gaps) / 3. flex-grow is 0 so an orphan
    // card in the last row keeps the same width as the others
    flex: 0 1 calc((100% - var(--service-gap) * 2) / 3);
    min-width: 0; // lets long words shrink instead of overflowing

    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 32px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    transition: transform 0.3s ease, background 0.3s ease;

    @include media.tablet-b {
      flex-basis: calc((100% - var(--service-gap)) / 2); // 2 columns
    }
    @include media.tablet {
      flex-basis: 100%;                                  // 1 column
      padding: 24px;
    }

    // Hover on real pointers, :active on touch (your mixin handles both)
    @include media.hover {
      transform: translateY(-4px);
      background: rgba(255, 255, 255, 0.05);
    }

    // BEM modifier: full-width featured card, horizontal on desktop
    &--featured {
      flex-basis: 100%;
      flex-direction: row;
      align-items: center;
      gap: 32px;

      @include media.tablet-b {
        flex-direction: column;
        align-items: stretch;
      }
    }
  }

  &__icon {
    flex: 0 0 56px;   // fixed size, never shrinks or grows
    width: 56px;
    height: 56px;
  }

  &__name {
    margin: 0;
  }

  // Text takes all free space, which pushes the CTA to the card bottom
  &__text {
    flex-grow: 1;
    margin: 0;
  }

  &__cta {
    margin-top: auto;      // sticks to the bottom in equal-height cards
    align-self: flex-start;
    color: var(--accent-color);
  }
}

End session. Build stable. No Jade Touch connection yet.