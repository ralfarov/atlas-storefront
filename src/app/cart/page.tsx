export default function CartPage() {
  return (
    <section className="section">
      <h1>Cart</h1>
      <p>This is a simple placeholder cart page for the storefront demo.</p>

      <div className="card section">
        <h2>Demo Cart Summary</h2>
        <p>Items: 2</p>
        <p>Subtotal: $89.98</p>
        <p>Shipping: Calculated at checkout</p>
        <p>Total: $89.98</p>

        <div className="section">
          <button className="button secondary">Checkout Disabled in Demo</button>
        </div>
      </div>
    </section>
  );
}