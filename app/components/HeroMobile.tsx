"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const mobileImages = [
  "/images/dog21.jpeg",
  "/images/D09mobile.jpeg",
  "/images/martha1.jpeg",
  "/images/n2.jpeg",
];

export default function HeroMobile() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === mobileImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      <Image
        src={mobileImages[currentImage]}
        alt="Forest Nosh"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute bottom-24 left-6 right-6 z-10">

        <p className="text-white/70 uppercase tracking-[0.3em] text-xs mb-4">
          Our Philosophy
        </p>

        <h1
          className="text-4xl font-light text-white leading-tight"
          style={{
            textShadow: "0 4px 20px rgba(0,0,0,0.8)",
          }}
        >
          Extraordinary Nutrition
          <br />
          For Extraordinary Dogs
        </h1>

        <p
          className="mt-5 text-white/80 text-sm leading-relaxed"
          style={{
            textShadow: "0 2px 10px rgba(0,0,0,0.8)",
          }}
        >
          Nature-inspired nutrition refined by science.
        </p>

      </div>
    </section>
  );
}