import Link from "next/link";
import ProductSection from "../components/ProductSection";

export default function ProductsPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <Link
          href="/"
          className="uppercase tracking-[0.15em] text-xs text-white/70 hover:text-white"
        >
          ← Back Home
        </Link>

        <h1 className="text-4xl md:text-5xl mt-8 mb-20 font-light">
          Forest Nosh Products
        </h1>

 <ProductSection />

      </div>

    </main>
  );
}