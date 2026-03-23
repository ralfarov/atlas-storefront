import Link from "next/link";
import { getProductBySlug } from "@/data/products";
import { notFound } from "next/navigation";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="section">
      <Link href="/products">← Back to products</Link>

      <div className="card section">
        <img src={product.image} alt={product.name} />
        <span className="badge">{product.category}</span>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="price">${product.price.toFixed(2)}</div>
        <p>SKU: {product.sku}</p>
        <p>Status: {product.inStock ? "In Stock" : "Out of Stock"}</p>

        <div className="section">
          <button className="button">Add to Cart</button>
        </div>
      </div>
    </section>
  );
}