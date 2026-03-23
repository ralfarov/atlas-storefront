Project Structure

atlas-storefront/
├─ app/
│  ├─ api/
│  │  ├─ health/
│  │  │  └─ route.ts
│  │  └─ products/
│  │     └─ route.ts
│  ├─ cart/
│  │  └─ page.tsx
│  ├─ products/
│  │  ├─ [slug]/
│  │  │  └─ page.tsx
│  │  └─ page.tsx
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ globals.css
│
├─ components/
│  ├─ Header.tsx
│  ├─ Footer.tsx
│  ├─ ProductCard.tsx
│  ├─ ProductGrid.tsx
│  ├─ RequestDebugPanel.tsx
│  └─ AddToCartButton.tsx
│
├─ lib/
│  ├─ products.ts
│  ├─ headers.ts
│  ├─ request-id.ts
│  └─ constants.ts
│
├─ data/
│  └─ products.ts
│
├─ public/
│  └─ images/
│
├─ middleware.ts
├─ next.config.ts
├─ package.json
├─ tsconfig.json
└─ README.md