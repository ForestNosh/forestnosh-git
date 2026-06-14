import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      <div style={{ paddingBottom: "20px" }}>
        <Link
          href="/products"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontSize: "12px",
            fontWeight: 600,
          }}
        >
          ← Back to Products
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-10">
        Forest Nosh Products
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            Bones & Joint Support Soft Chews
          </h2>

          <Link href="/products/bones-joint-support">
            View Product →
          </Link>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-2xl font-semibold mb-3">
            Female Dog Wellness
          </h2>

          <Link href="/products/female-dog-wellness">
            View Product →
          </Link>
        </div>
      </div>
    </main>
  );
}