"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const dogImages = [
  "/images/dog1.jpeg",
  "/images/DO18.jpeg",
  "/images/n5.jpeg",
  "/images/catstevens.jpeg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === dogImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

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

      {/* Hero Content */}
      <div className="absolute inset-0 z-10">
        <div
          className="
            absolute
            left-5
            right-5
            bottom-28
            md:left-20
            md:right-auto
            md:bottom-20
            max-w-4xl
          "
        >
          <p className="text-white/80 uppercase tracking-[0.3em] text-xs md:text-sm mb-4 md:mb-6">
            Our Philosophy
          </p>

          <h1
            className="
              luxury-heading
              text-3xl
              sm:text-4xl
              md:text-6xl
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
            <br className="hidden md:block" />
            Deserves Extraordinary Nutrition
          </h1>

          <p
            className="
              mt-6
              md:mt-8
              text-base
              md:text-xl
              text-white/80
              max-w-2xl
              leading-relaxed
            "
            style={{
              textShadow: "0 2px 15px rgba(0,0,0,0.8)",
            }}
          >
            At Forest Nosh, we celebrate the bond between
            humans and dogs through nutrition inspired by
            nature and refined by science.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <button
          onClick={scrollToNextSection}
          className="
            w-14
            h-14
            md:w-20
            md:h-20
            rounded-full
            border
            border-white/40
            flex
            items-center
            justify-center
            backdrop-blur-sm
            hover:bg-white/10
            transition-all
            duration-300
            cursor-pointer
          "
        >
          <span className="text-white text-2xl md:text-3xl animate-bounce">
            ↓
          </span>
        </button>

        <p className="mt-3 md:mt-4 text-white/70 text-[10px] md:text-xs tracking-[0.3em] uppercase">
          Scroll To Continue
        </p>
      </div>
    </section>
  );
}