import "./globals.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Atlas Storefront Demo",
  description: "A Vercel + Akamai headless storefront demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container nav">
            <Link href="/" className="brand brand-wrap">
              <img
                src="/images/logo.png"
                alt="Atlas Storefront Logo"
                className="brand-logo"
              />
              <div className="brand-text">
                <span className="brand-title">Atlas Storefront</span>
                <span className="brand-subtitle">Vercel + Akamai Demo Lab</span>
              </div>
            </Link>

            <nav className="main-nav">
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/cart">Cart</Link>
              <Link href="/api/health">Health</Link>
              <Link href="/api/products">API</Link>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="site-footer">
          <div className="container footer-wrap">
            <div>
              <strong>Atlas Storefront Demo</strong>
              <p>Modern storefront architecture built for Akamai demos.</p>
            </div>
            <div>
              <p>Frontend: Next.js on Vercel</p>
              <p>Edge Layer: Akamai CDN + WAF + Routing</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}