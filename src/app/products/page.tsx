import Link from "next/link";
import { products } from "@/data/products";

export default function ProductsPage() {
  return (
    <section className="section">
      <h1>Products</h1>
      <p>Demo catalog for storefront and caching use cases.</p>

      <div className="grid section">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <span className="badge">{product.category}</span>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="price">${product.price.toFixed(2)}</div>
            <p>SKU: {product.sku}</p>
            <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
            <Link href={`/products/${product.slug}`} className="button">
              View Product
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}