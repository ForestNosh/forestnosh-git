import Link from "next/link";

export const metadata = {
  title: "Female Dog Wellness | Forest Nosh",
  description: "Daily wellness support for female dogs."
};

export default function FemaleDogWellnessPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-4">
        Female Dog Wellness
      </h1>

      <p className="text-lg mb-8">
        Daily Wellness Support for Female Dogs
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Product Description
      </h2>

      <p className="mb-6">
        A carefully crafted functional chew designed to support the nutritional
        needs and overall wellness of female dogs.
      </p>

      <h2 className="text-2xl font-semibold mb-3">
        Key Benefits
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        <li>Supports daily wellness</li>
        <li>Made with premium ingredients</li>
        <li>Highly palatable soft chew format</li>
        <li>Easy daily supplementation</li>
      </ul>

      <div className="mt-10">
        <Link
          href="/ingredients-sourcing"
          className="underline text-blue-600"
        >
          View Ingredient & Sourcing Details →
        </Link>
      </div>

    </main>
  );
}