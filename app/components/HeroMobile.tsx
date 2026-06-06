"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const mobileImages = [
  "/images/D01mobile.jpeg",
  "/images/DO9.jpeg",
  "/images/martha1.jpeg",
  "/images/n5.jpeg",
];

const text =
  "At Forest Nosh, we celebrate the bond between humans and dogs through nutrition inspired by nature and refined by science.";

export default function HeroMobile() {
  const [currentImage, setCurrentImage] = useState(0);
  const [typingKey, setTypingKey] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === mobileImages.length - 1 ? 0 : prev + 1
      );

      setTypingKey((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(slideInterval);
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
          For Those Who Give Us Everything
          <br />
          Deserve Extraordinary Nutrition
        </h1>

        <div className="mt-8 text-lg text-white/80 leading-relaxed min-h-[120px]">
          <TypeAnimation
            key={typingKey}
            sequence={[text]}
            speed={55}
            cursor={true}
            repeat={0}
          />
        </div>
      </div>
    </section>
  );
}