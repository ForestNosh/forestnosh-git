import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
title: "Bones & Joint Support Soft Chews | Forest Nosh",
description:
"Natural mobility support for active and aging dogs with premium proteins and carefully selected botanicals.",
};

export default function BonesJointPage() {
return ( <main className="max-w-5xl mx-auto px-6 py-12">

```
  {/* HERO */}
  <section className="mb-16">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Forest Nosh Bones & Joint Support Soft Chews
    </h1>

    <p className="text-xl text-gray-600 mb-6">
      Natural Mobility Support for Active Dogs
    </p>

    <p className="text-lg leading-relaxed">
      Every tail wag, playful sprint, and joyful walk begins with healthy
      movement. Forest Nosh Bones & Joint Support Soft Chews combine
      premium animal proteins with carefully selected botanicals to help
      support joint health, flexibility, and everyday mobility so your dog
      can continue enjoying life's adventures with confidence.
    </p>
  </section>

  {/* BENEFITS */}
  <section className="mb-16">
    <h2 className="text-3xl font-semibold mb-8">
      Key Benefits
    </h2>

    <div className="space-y-6">

      <div>
        <h3 className="text-xl font-semibold mb-2">
          Supports Healthy Joints & Mobility
        </h3>
        <p>
          Crafted with Hadjod and Shallaki, traditionally valued for
          supporting healthy joints, bones, and connective tissues.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">
          Helps Maintain Flexibility
        </h3>
        <p>
          Supports comfortable movement and everyday activity in active
          and aging dogs.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">
          Protein-Rich Nutrition
        </h3>
        <p>
          Made with premium chicken breast and mutton liver to help
          maintain strong muscles that support an active lifestyle.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">
          Natural Antioxidant Support
        </h3>
        <p>
          Turmeric and mixed tocopherols provide antioxidant support and
          help protect cells from oxidative stress.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">
          Soft & Highly Palatable
        </h3>
        <p>
          Soft texture designed to be easy to chew and loved by dogs of
          all breeds and sizes.
        </p>
      </div>

    </div>
  </section>

  {/* WHY PET PARENTS LOVE IT */}
  <section className="mb-16">
    <h2 className="text-3xl font-semibold mb-8">
      Why Pet Parents Choose Forest Nosh
    </h2>

    <ul className="space-y-3 list-disc pl-6">
      <li>Made with Real Dehydrated Chicken Breast & Mutton Liver</li>
      <li>Crafted with Hadjod & Shallaki</li>
      <li>Soft Texture for Easy Chewing</li>
      <li>No Artificial Colors</li>
      <li>Suitable for Daily Use</li>
      <li>Thoughtfully Made with Functional Ingredients</li>
    </ul>
  </section>

  {/* SUITABLE FOR */}
  <section className="mb-16">
    <h2 className="text-3xl font-semibold mb-8">
      Suitable For
    </h2>

    <ul className="space-y-3 list-disc pl-6">
      <li>Adult Dogs</li>
      <li>Senior Dogs</li>
      <li>Active Dogs</li>
      <li>Large Breeds</li>
      <li>Dogs Requiring Additional Joint Support</li>
    </ul>
  </section>

  {/* FEEDING GUIDE */}
  <section className="mb-16">
    <h2 className="text-3xl font-semibold mb-8">
      Feeding Guide
    </h2>

    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200">
        <thead>
          <tr>
            <th className="border p-3 text-left">Dog Weight</th>
            <th className="border p-3 text-left">Daily Feeding</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-3">Up to 10 kg</td>
            <td className="border p-3">1 Chew</td>
          </tr>

          <tr>
            <td className="border p-3">10-25 kg</td>
            <td className="border p-3">2 Chews</td>
          </tr>

          <tr>
            <td className="border p-3">Above 25 kg</td>
            <td className="border p-3">3 Chews</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="mt-4 text-sm text-gray-600">
      Adjust feeding quantity according to your dog's age, activity level,
      and your veterinarian's recommendation.
    </p>
  </section>

  {/* INGREDIENTS */}
  <section className="mb-16">
    <h2 className="text-3xl font-semibold mb-4">
      Ingredients & Sourcing
    </h2>

    <p className="mb-4">
      Learn more about every ingredient used in this recipe and where we
      source them.
    </p>

    <Link
      href="/ingredients/bones-joint-support"
      className="font-medium underline"
    >
      View Full Ingredients & Sourcing Information →
    </Link>
  </section>

  {/* STORAGE */}
  <section className="mb-16">
    <h2 className="text-3xl font-semibold mb-4">
      Storage Instructions
    </h2>

    <ul className="space-y-2 list-disc pl-6">
      <li>Store in a cool, dry place away from direct sunlight.</li>
      <li>Reseal the pack after opening.</li>
      <li>Always provide fresh drinking water.</li>
    </ul>
  </section>

  {/* DISCLAIMER */}
  <section className="border-t pt-8 text-sm text-gray-600">
    <h2 className="font-semibold mb-4">
      Disclaimer
    </h2>

    <p>
      This product is intended as a supplemental pet treat and is not a
      substitute for a complete and balanced diet.
    </p>

    <p className="mt-3">
      The herbs and functional ingredients used in this product are
      traditionally valued for supporting normal joint health and mobility.
      Individual results may vary.
    </p>

    <p className="mt-3">
      Forest Nosh Bones & Joint Support Soft Chews are not intended to
      diagnose, treat, cure, or prevent any disease.
    </p>

    <p className="mt-3">
      Consult your veterinarian before introducing any new treat or
      supplement if your dog has a medical condition or is receiving
      veterinary care.
    </p>
  </section>

</main>


);
}
