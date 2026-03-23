export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  sku: string;
  inStock: boolean;
};

export const products: Product[] = [
  {
    id: "p-1001",
    slug: "atlas-performance-hoodie",
    name: "Atlas Performance Hoodie",
    description: "A premium demo hoodie built for edge architects and cache optimizers.",
    price: 59.99,
    category: "apparel",
    image: "/images/atlas_performance_hoodie.png",
    sku: "ATL-HOODIE-001",
    inStock: true,
  },
  {
    id: "p-1002",
    slug: "edge-cache-tee",
    name: "Edge Cache Tee",
    description: "Lightweight shirt for fast paths, low latency, and high cache-hit ratios.",
    price: 29.99,
    category: "apparel",
    image: "/images/edge_cache_tee.png",
    sku: "ATL-TEE-002",
    inStock: true,
  },
  {
    id: "p-1003",
    slug: "waf-shield-mug",
    name: "WAF Shield Mug",
    description: "Start your day protected. Blocks bad vibes and suspicious payloads.",
    price: 19.99,
    category: "drinkware",
    image: "/images/waf_shield_mug.png",
    sku: "ATL-MUG-003",
    inStock: true,
  },
  {
    id: "p-1004",
    slug: "origin-failover-backpack",
    name: "Origin Failover Backpack",
    description: "Carries your essentials even when your primary path is unhealthy.",
    price: 89.99,
    category: "gear",
    image: "/images/origin_failover_backpack.png",
    sku: "ATL-BAG-004",
    inStock: false,
  },
  {
    id: "p-1005",
    slug: "request-tracing-sticker-pack",
    name: "Request Tracing Sticker Pack",
    description: "A sticker pack for people who actually read headers and logs.",
    price: 9.99,
    category: "accessories",
    image: "/images/request_tracing_sticker_pack.png",
    sku: "ATL-STICK-005",
    inStock: true,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}