import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <span className="badge">Vercel Headless Frontend Lab</span>
        <h1>Atlas Storefront Demo</h1>
        <p>
          This is a modern storefront-style application built with Next.js and designed
          to sit behind Akamai as the public edge for caching, WAF, routing, and
          observability.
        </p>

        <div className="section">
          <Link href="/products" className="button">
            Browse Products
          </Link>
        </div>
      </section>

      <section className="section grid">
        <div className="card">
          <h2>Frontend</h2>
          <p>Hosted on Vercel using Next.js App Router.</p>
        </div>
        <div className="card">
          <h2>API</h2>
          <p>Route Handlers under /api/* for health and product data.</p>
        </div>
        <div className="card">
          <h2>Akamai Story</h2>
          <p>Ready for CDN, WAF, path-based routing, and request tracing.</p>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <h2>Suggested Demo Paths</h2>
          <div className="codebox">
            <div>/</div>
            <div>/products</div>
            <div>/products/atlas-performance-hoodie</div>
            <div>/cart</div>
            <div>/api/health</div>
            <div>/api/products</div>
          </div>
        </div>
      </section>
    </>
  );
}