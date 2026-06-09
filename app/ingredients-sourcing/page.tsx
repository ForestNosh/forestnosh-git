import Link from "next/link";

export const metadata = {
  title: "Ingredients & Sourcing | Forest Nosh",
  description: "Learn about the premium ingredients used in Forest Nosh products."
};

export default function IngredientsSourcingPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-6">
        Ingredients & Sourcing
      </h1>

      <p className="mb-10 text-lg">
        At Forest Nosh, every ingredient is carefully selected from trusted
        suppliers to ensure quality, safety, and nutrition.
      </p>

      <div className="space-y-8">

        <div>
          <h2 className="text-2xl font-semibold">
            Dehydrated Chicken Breast
          </h2>
          <p>
            Premium human-grade chicken breast, gently dehydrated to preserve
            protein and natural flavour.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Moringa Powder
          </h2>
          <p>
            Sourced from Tata Sampann and selected for its natural nutritional profile.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Turmeric Powder
          </h2>
          <p>
            Carefully selected culinary-grade turmeric from trusted suppliers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            Sunflower Oil
          </h2>
          <p>
            Food-grade sunflower oil sourced from established retail channels.
          </p>
        </div>

      </div>

      <div className="mt-12">
        <Link
          href="/products"
          className="px-6 py-3 rounded-lg bg-black text-white"
        >
          Explore Products
        </Link>
      </div>

    </main>
  );
}