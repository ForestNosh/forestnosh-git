"use client";

import Hero from "../components/Hero";
import StorySection from "../components/StorySection";
import ProductSection from "../components/ProductSection";
import Footer from "../components/footer";
import PremiumLoader from "../components/PremiumLoader";
import StoryIntro from "../components/StoryIntro";
import CollectionIntro from "../components/CollectionIntro";

export default function Experience() {
  return (
    <>
      <PremiumLoader />

      <main className="bg-black text-white">
        <Hero />

        <StoryIntro />

        <StorySection
          title="Inspired by Nature
          Backed by Science"
          description= "Every ingredient is carefully selected From nature's finest sources."
          video="/videos/dv1.mp4"
        />



        <CollectionIntro />

        <ProductSection />

        <Footer />
      </main>
    </>
  );
}