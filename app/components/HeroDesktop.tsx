"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const dogImages = [
  "/images/dog1.jpeg",
  "/images/catstevens.jpeg",
  "/images/DO18.jpeg",
  "/images/n5.jpeg",
];

const SLIDE_DURATION = 6000;

export default function HeroDesktop() {
  const [currentImage, setCurrentImage] = useState(0);
  const [typingKey, setTypingKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === dogImages.length - 1 ? 0 : prev + 1
      );

      setTypingKey((prev) => prev + 1);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={dogImages[currentImage]}
        alt="Forest Nosh"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="ml-24 max-w-5xl z-10">
          <p className="text-white/70 uppercase tracking-[0.4em] text-sm mb-6">
            Our Philosophy
          </p>

          <h1
            className="
              luxury-heading
              text-7xl
              lg:text-8xl
              font-light
              leading-[1.1]
              text-white
            "
            style={{
              textShadow: "0 4px 30px rgba(0,0,0,0.8)",
            }}
          >
            For Those Who Give Us Everything
            <br />
            Deserve Extraordinary Nutrition
          </h1>

          <div
            className="
              mt-8
              text-xl
              text-white/80
              max-w-3xl
              leading-relaxed
              min-h-[80px]
            "
            style={{
              textShadow: "0 2px 15px rgba(0,0,0,0.8)",
            }}
          >
            <TypeAnimation
              key={typingKey}
              sequence={[
                "At Forest Nosh, we celebrate the bond between humans and dogs through nutrition inspired by nature and refined by science.",
              ]}
              speed={60}
              cursor={true}
              repeat={0}
            />
          </div>
        </div>
      </div>
    </section>
  );
}